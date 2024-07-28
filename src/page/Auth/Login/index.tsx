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
import { CircularProgress, Paper } from '@mui/material';
import bgStudent from '../../../../public/images/student-nobg.png';
import logoIUH from '../../../../public/images/logo-light.png';
import useAuth from '@/hook/api/useAuth';
function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show: boolean) => !show);
  const { HandleLogin } = useAuth();
  const { mutate: login, isPending } = HandleLogin();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values, actions) => {
      login({ username: values.username, password: values.password });
    },
  });
  const { values, handleChange, handleBlur, errors, touched, handleSubmit } = formik;

  return (
    <Paper
      sx={{
        borderRadius: 100,
        width: 650,
        display: 'flex',
        bgcolor: '#132e65',
        boxShadow:
          ' rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;',
      }}
    >
      <Card sx={{ width: 400 }}>
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyItems: 'center',
            }}
          >
            <img width={150} height={60} src={`${logoIUH}`} />
            <Typography
              mt={10}
              variant='body1'
              align='center'
              lineHeight={1.2}
              fontWeight={'bold'}
              color='error.dark'
              textTransform={'uppercase'}
            >
              Trang Quản lý khóa luận dành cho sinh viên Khoa Công Nghệ Thông Tin
            </Typography>
            <Typography
              variant='h3'
              mt={10}
              fontWeight={600}
              align='center'
              color={'primary.dark'}
              textTransform={'uppercase'}
            >
              Đăng nhập
            </Typography>
          </Box>
          <Box component='form' onSubmit={handleSubmit} mt={8} p={4} method='POST'>
            <CustomTextField
              label='Tên đăng nhập'
              error={Boolean(errors.username) && touched.username}
              helperText={touched.username && errors.username}
              value={values.username}
              required
              onBlur={handleBlur}
              onChange={handleChange}
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
            <Button variant='contained' type='submit' fullWidth color='primary'>
              Đăng nhập
              {isPending && (
                <CircularProgress
                  size={'small'}
                  sx={{ mx: 4, color: 'white', width: 20, height: 20 }}
                />
              )}
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Box position={'relative'}>
        <Box position={'absolute'} top={'-150px'}>
          <img height={600} width={600} src={`${bgStudent}`} />
        </Box>
      </Box>
    </Paper>
  );
}

export default LoginPage;
