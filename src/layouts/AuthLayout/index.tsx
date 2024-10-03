import { Icon } from '@iconify/react';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
function AuthLayout() {
  const navigate = useNavigate();
  return (
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
        backgroundImage: 'url(/images/bgiuh.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Lớp overlay phủ toàn bộ màn hình */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(55, 53, 53, 0.5)', 
          backdropFilter: 'blur(10px)', 
          zIndex: 1, 
        }}
      />

      <Box
        sx={{
          order: {
            xs: 2,
            md: 1,
          },
          position: 'relative',
          width: {
            sm: '100%',
            md: '100%',
            lg: 'calc(50% - 4px)',
          },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2, // Đảm bảo nội dung nằm trên lớp overlay
        }}
      >
        <Box
          sx={{
            position: 'relative', // Để nội dung nằm trên lớp phủ
            bgcolor: 'rgba(173, 216, 230,0.7)',
            px: 20,
            py: 10,
            borderRadius: 2,
            color: 'white',
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
            <Typography variant='h3' textAlign={'center'} fontWeight={'bold'} color='error.main'>
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
              <Button sx={{ mt: 5 }} color='error' onClick={() => navigate('/home')} size='large'>
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
      </Box>
      <Box
        sx={{
          order: {
            xs: 1,
            md: 2,
          },
          
          width: {
            sm: '100vw',
            md: '100%',
            lg: 'calc(50% - 4px)',
          },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2, 
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default AuthLayout;
