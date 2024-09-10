import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CustomTextField from '@/components/ui/CustomTextField';
import { CircularProgress } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import useAuth from '@/hook/api/useAuth';
import * as Yup from 'yup';

const ForgotValidationSchema = Yup.object({
  username: Yup.string()
    .matches(/^\d{6,}$/, 'Mã sinh viên chỉ gồm chữ số và lớn hơn 6 ký tự')
    .required('Mã sinh viên không được để trống'),
});
function ForgotPasswordMobile() {
  const { HanldeForgotPassword } = useAuth();
  const { mutate: forgotPass, isPending } = HanldeForgotPassword();

  const formik = useFormik({
    initialValues: {
      username: '',
    },
    validationSchema: ForgotValidationSchema,
    onSubmit: (values: { username: string }) => {
      forgotPass(values.username);
    },
  });
  const { values, handleChange, handleBlur, errors, touched, handleSubmit } = formik;
  const navigate = useNavigate();

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      paddingY={'40px'}
      paddingX={'20px'}
      marginTop={'10px'}
      width={'100%'}
      height={'96vh'}
    >
      <img width={212} src='/images/forgot_mobile.png' />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography fontSize={'36px'} variant='body1' fontWeight={'bold'} color='#000000'>
          Quên Mật Khẩu
        </Typography>
      </Box>
      <Box component='form' onSubmit={handleSubmit} mt={'40px'} p={4} width={'100%'} method='POST'>
        <CustomTextField
          label='Nhập vào mã sinh viên'
          error={Boolean(errors.username) && touched.username}
          helperText={touched.username && errors.username}
          value={values.username}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder='01xxxxx'
          size='medium'
          id='username'
          name='username'
        />
        <Button
          variant='contained'
          sx={{
            height: 50,
            fontSize: 17,
            mt: '40px',
          }}
          type='submit'
          fullWidth
          color='primary'
        >
          Quên mật khẩu
          {isPending && (
            <CircularProgress
              size={'small'}
              sx={{ mx: 4, color: 'white', width: 20, height: 20 }}
            />
          )}
        </Button>
        <Typography my={2} textAlign={'center'} variant='body1' color='grey.600'>
          Hoặc
        </Typography>
        <Typography
          variant='h6'
          onClick={() => navigate('/auth/login')}
          sx={{
            '&:hover': {
              color: 'primary.dark',
              cursor: 'pointer',
            },
          }}
          color='warning.main'
          textAlign={'center'}
        >
          Quay lại Đăng Nhập
        </Typography>
      </Box>
    </Box>
  );
}

export default ForgotPasswordMobile;
