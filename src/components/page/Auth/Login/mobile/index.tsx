import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import CustomTextField from '@/components/ui/CustomTextField';
import { Icon } from '@iconify/react';
import { CircularProgress } from '@mui/material';
import useAuth from '@/hook/api/useAuth';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const LoginValidationSchema = Yup.object({
  username: Yup.string()
    .matches(/^\d{6,}$/, 'Tên đăng nhập chỉ gồm chữ số và lớn hơn 6 ký tự')
    .required('Tên đăng nhập không được để trống'),
  password: Yup.string()
    .min(8, 'Mật khẩu chứa ít nhất 8 ký tự')
    .required('Mật khẩu không được để trống'),
});

function LoginMobile() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show: boolean) => !show);
  const { HandleLogin } = useAuth();
  const { mutate: login, isPending } = HandleLogin();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: LoginValidationSchema,
    onSubmit: (values) => {
      login({ username: values.username, password: values.password });
    },
  });
  const { values, handleChange, handleBlur, errors, touched, handleSubmit } = formik;

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      paddingY={'40px'}
      paddingX={'20px'}
      width={'100%'}
      height={'96vh'}
    >
      <img width={212} src='/images/login_mobile.png' />
      <Typography fontSize={'36px'} variant='body1' fontWeight={'bold'} color='#000000'>
        Đăng nhập
      </Typography>
      <Box component='form' onSubmit={handleSubmit} width={'100%'} mt={'20px'} method='POST'>
        <CustomTextField
          error={Boolean(errors.username) && touched.username}
          helperText={touched.username && errors.username}
          value={values.username}
          size='medium'
          required
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder='Nhập tên đăng nhập'
          label='Mã số sinh viên'
          id='username'
          name='username'
        />
        <CustomTextField
          error={Boolean(errors.password) && touched.password}
          helperText={touched.password && errors.password}
          onBlur={handleBlur}
          size='medium'
          required
          onChange={handleChange}
          label='Mật khẩu'
          placeholder='Nhập mật khẩu'
          id='password'
          name='password'
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  edge='end'
                  size='small'
                  sx={{
                    '& svg': {
                      color: 'text.primary',
                    },
                  }}
                >
                  {showPassword ? (
                    <Icon icon='mdi:eye-outline' />
                  ) : (
                    <Icon icon='mdi:eye-off-outline' />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Typography
          variant='h6'
          mb={4}
          onClick={() => navigate('/auth/forgot-password')}
          sx={{
            '&:hover': {
              color: 'grey.500',
              cursor: 'pointer',
            },
          }}
          color='grey.600'
          textAlign={'end'}
        >
          Quên mật khẩu ?
        </Typography>
        <Button
          variant='contained'
          sx={{ height: 50, fontSize: 17, marginTop: '20px' }}
          type='submit'
          fullWidth
          color='primary'
        >
          Đăng nhập
          {isPending && (
            <CircularProgress
              size={'small'}
              sx={{ mx: 4, color: 'white', width: 20, height: 20 }}
            />
          )}
        </Button>
      </Box>
    </Box>
  );
}

export default LoginMobile;
