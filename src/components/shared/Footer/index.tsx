import TitleManager from '@/components/ui/Title';
import { Icon } from '@iconify/react';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';

function Footer() {
  return (
    <Box
      sx={{
        p: {
          xs: 6,
          sm: 20,
          md: 30,
          lg: 40,
          xl: 50,
        },
      }}
      height={{
        lg: 500,
      }}
      display={'flex'}
      flexWrap={'wrap'}
      justifyContent={'space-between'}
      bgcolor='#132e65'
      gap={'100px'}
    >
      <Box
        width={{
          lg: 'calc(50% - 100px)',
        }}
      >
        <img width={200} src='/images/logo-IUH-ngang-trang-300x131-1.webp' />

        <Typography variant='h5' color='grey.500'>
          12 Nguyễn Văn Bảo, Phường 4, Gò Vấp, Hồ Chí Minh
        </Typography>

        <Typography mt={10} mb={6} variant='h5' color='grey.500'>
          © 2017 Khoa Công nghệ thông tin - Đại học Công nghiệp Thành phố Hồ Chí Minh
        </Typography>
      </Box>
      <Box
        width={{
          lg: 'calc(50%)',
        }}
      >
        <TitleManager variant='h1' textTransform={'uppercase'} color='grey.600'>
          Thông tin liên hệ
        </TitleManager>
        <Box mt={20}>
          <Box my={20} display={'flex'} alignItems={'center'} gap={10}>
            <Box borderRadius={'50%'} bgcolor='grey.400' py={4} px={6}>
              <Icon color='#153786' height={30} width={30} icon='carbon:location-filled' />
            </Box>
            <Typography color={'grey.500'} variant='h3'>
              Khoa Công nghệ Thông tin - Lầu 1 - Nhà H
            </Typography>
          </Box>

          <Box my={20} display={'flex'} alignItems={'center'} gap={10}>
            <Box borderRadius={'50%'} bgcolor='grey.400' py={4} px={6}>
              <Icon color='#153786' height={30} width={30} icon='f7:phone-fill' />
            </Box>
            <Typography color={'grey.500'} variant='h3'>
              Điện thoại: 028. 389.40390 - 167
            </Typography>
          </Box>
          <Box my={20} display={'flex'} alignItems={'center'} gap={10}>
            <Box borderRadius={'50%'} bgcolor='grey.400' py={4} px={6}>
              <Icon color='#153786' height={30} width={30} icon='mdi:email' />
            </Box>
            <Typography color={'grey.500'} variant='h3'>
              Email: daotao.fit@iuh.edu.vn
            </Typography>
          </Box>
          <Box mt={20}>
            <Button
              href='https://fit.iuh.edu.vn/'
              variant='contained'
              sx={{ textTransform: 'uppercase', fontWeight: '500' }}
              size='large'
              color='success'
            >
              Xem thêm
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default React.memo(Footer);
