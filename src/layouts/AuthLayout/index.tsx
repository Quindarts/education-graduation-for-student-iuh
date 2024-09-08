import { Icon } from '@iconify/react';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
function AuthLayout() {
  const navigate = useNavigate();
  return (
    <Box>
      <Box
        position={'relative'}
        gap={4}
        justifyContent={'center'}
        display={'flex'}
        flexWrap={'wrap'}
        sx={{
          minHeight: {
            lg: '100vh',
          },
          flexDirection: {
            xs: 'column',
            lg: 'row',
          },
        }}
      >
        <Box
          sx={{
            top: 0,
            left: {
              xs: '-205px',
              md: 0,
            },
            right: {
              xs: 0,
            },
          }}
          position={'absolute'}
        >
          <Box alignItems={'center'} flexDirection={'column'} display={'flex'}>
            <Box
              sx={{
                width: {
                  xs: 100,
                  lg: 150,
                },
              }}
            >
              <img width={'100%'} src='/images/logo_login.webp' alt='' />
            </Box>
            <Typography
              sx={{
                display: {
                  xs: 'none',
                  lg: 'block',
                },
              }}
              textAlign={'center'}
              fontWeight={'700'}
              variant='h1'
              color='grey.600'
            >
              Đại học Công nghiệp Thành phố Hồ Chí Minh
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            order: {
              xs: 2,
              md: 1,
            },
            bgcolor: 'grey.100',
            width: {
              sm: '100%',
              md: '100%',
              lg: 'calc(50% - 4px)',
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            position={'relative'}
            alignItems={'center'}
            flexDirection={'column'}
            display={'flex'}
          >
            <Typography
              sx={{
                mt: {
                  xs: 10,
                  lg: 0,
                },
              }}
              variant='h1'
              fontWeight={'bold'}
              color='grey.700'
            >
              Hướng dẫn
            </Typography>
            <Typography variant='h3' textAlign={'center'} fontWeight={'500'} color='grey.700'>
              Trang quản lý khóa luận tốt nghiệp khoa công nghệ thông tin
            </Typography>
            <Box
              sx={{
                width: {
                  xs: '100%',
                  lg: 500,
                },
                px: {
                  xs: 10,
                  lg: 0,
                },
              }}
              mt={6}
            >
              <Box
                sx={{
                  px: {
                    xs: 10,
                    lg: 0,
                  },
                }}
              >
                <ol>
                  <li>
                    Sinh viên đăng ký làm khóa luận tốt nghiệp chỉ đăng nhập tài khoản mà bộ môn
                    khóa luận cung cấp. Không thể dùng tài khoản{' '}
                    <a href='https://lms.iuh.edu.vn'>LMS</a> hay{' '}
                    <a href='https://sv.iuh.edu.vn'>Sinh viên</a> để đăng nhập.
                  </li>
                  <li>
                    <strong>Lưu ý:</strong>
                    <ul>
                      <li>
                        Việc đổi mật khẩu, cập nhật email và các thông tin cá nhân liên quan nên
                        được thực hiện khi lần đầu tiên truy cập vào hệ thống.
                      </li>
                      <li>
                        Không thể đổi mật khẩu tại trang <a href='https://lms.iuh.edu.vn'>LMS</a>{' '}
                        hay trang <a href='https://sv.iuh.edu.vn'>Sinh viên</a>{' '}
                      </li>
                      <li>
                        Nếu quên mật khẩu, truy cập:{' '}
                        <a href='/https://iuh.io.vn:5001/auth/forgot-password'>tại đây</a>
                      </li>
                    </ul>
                  </li>
                </ol>
              </Box>
              <Button sx={{ mt: 5 }} onClick={() => navigate('/home')} size='large'>
                <Icon
                  icon='ic:baseline-home'
                  width={20}
                  style={{ marginRight: 4, marginBottom: 2, color: 'black' }}
                />
                Quay lại Trang chủ
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            order: {
              xs: 1,
              md: 2,
            },
            bgcolor: 'white',
            width: {
              sm: '100vw',
              md: '100%',
              lg: 'calc(50% - 4px)',
            },
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default AuthLayout;
