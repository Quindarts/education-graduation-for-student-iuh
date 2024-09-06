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
function ForgotPassword() {
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
    <Grid container spacing={2} pb={8}>
      <Grid item xs={12}>
        <Card sx={{ boxShadow: '0px 0px 0px white' }}>
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography
                variant='h5'
                mt={4}
                fontWeight={600}
                color={'primary.main'}
                mb={2}
                textTransform={'uppercase'}
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
                onChange={handleChange}
                placeholder='01xxxxx'
                id='username'
                name='username'
              />
              <Button variant='contained' type='submit' fullWidth color='primary'>
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

export default ForgotPassword;
