import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
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
function ForgotPasswordDesktop() {
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
    <Grid container spacing={2} pb={8} sx={{}}>
      <Grid item xs={12}>
        <Card
          sx={{
            boxShadow:
              'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;',
            border: '1px solid #6D6E6E44',
            bgcolor: 'rgba(240, 249, 250, 0.684)',
            px: 20,
            py: 10,
            width: {
              xs: '100%',
              lg: 500,
            },
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography
                variant='h3'
                mt={4}
                fontWeight={600}
                color={'primary.main'}
                mb={2}
                textTransform={'uppercase'}
                textAlign={'center'}
              >
                Quên Mật Khẩu
              </Typography>
            </Box>
            <Box component='form' onSubmit={handleSubmit} mt={8} p={4} method='POST'>
              <CustomTextField
                label='Nhập vào mã sinh viên'
                error={Boolean(errors.username) && touched.username}
                helperText={touched.username && errors.username}
                value={values.username}
                onBlur={handleBlur}
                size='medium'
                onChange={handleChange}
                placeholder='01xxxxx'
                id='username'
                name='username'
              />
              <Button
                variant='contained'
                type='submit'
                size='large'
                sx={{
                  height: 50,
                  fontSize:14
                }}
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
                variant='body1'
                onClick={() => navigate('/auth/login')}
                sx={{
                  '&:hover': {
                    color: 'primary.dark',
                    cursor: 'pointer',
                  },
                }}
                color='initial'
                textAlign={'center'}
              >
                Quay lại Đăng Nhập
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ForgotPasswordDesktop;
