import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
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
function LoginDesktop() {
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
    <Card
      sx={{
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;',
        border: '1px solid #D9E5FADE',
        bgcolor: 'rgba(234, 248, 250, 0.481)',
        px: 20,
        py: 40,
        width: {
          xs: '100%',
          lg: 500,
        },
        // p: 0,
      }}
    >
      <CardContent
        sx={{
          p: {
            xs: 4,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: {
              xs: 20,
              md: 0,
            },
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src='/images/logo-light.webp' width={150} />
          <Typography
            variant='h2'
            mt={10}
            fontWeight={700}
            sx={{
              borderBottom: '2px solid #198df2',
              pb: 2,
              textAlign: {
                xs: 'center',
                lg: 'start',
              },
            }}
            color={'white'}
            textTransform={'uppercase'}
          >
            Đăng nhập hệ thống
          </Typography>
        </Box>
        <Box component='form' onSubmit={handleSubmit} mt={8} method='POST'>
          <CustomTextField
            label='Tên đăng nhập'
            error={Boolean(errors.username) && touched.username}
            helperText={touched.username && errors.username}
            value={values.username}
            required
            onBlur={handleBlur}
            onChange={handleChange}
            size='medium'
            placeholder='Nhập tên đăng nhập'
            id='username'
            name='username'
          />
          <CustomTextField
            label='Mật khẩu'
            error={Boolean(errors.password) && touched.password}
            helperText={touched.password && errors.password}
            onBlur={handleBlur}
            required
            size='medium'
            onChange={handleChange}
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

          <Button
            variant='contained'
            type='submit'
            size='large'
            sx={{ height: 50, mt: 10 }}
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
          <Typography
            variant='h6'
            mt={10}
            onClick={() => navigate('/auth/forgot-password')}
            sx={{
              color: 'primary.main',
              '&:hover': {
                color: 'primary.dark',
                cursor: 'pointer',
              },
            }}
            color='initial'
            textAlign={'center'}
          >
            Quên mật khẩu ?
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default LoginDesktop;
