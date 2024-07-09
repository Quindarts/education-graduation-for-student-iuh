import TitleManager from '@/components/ui/Title';
import { Icon } from '@iconify/react';
import { Box, Typography } from '@mui/material';
import React from 'react';
const VALUE = [
  {
    icon: 'cil:happy',
    title: 'Thuận tiện',
    desc: 'Đăng ký khóa luận mọi nơi',
  },
  {
    icon: 'carbon:flash-filled',

    title: 'Nhanh',
    desc: 'Tốc độ load nhanh, hỗ trợ đăng ký học phần ',
  },
  {
    icon: 'material-symbols:security',

    title: 'Bảo mật',
    desc: 'Thông tin bảo mật',
  },
  {
    icon: 'hugeicons:developer',
    title: 'Dễ sử dụng',
    desc: 'Giao diện thân thiện',
  },
];
function InfoPropjectSection() {
  return (
    <Box my={10} bgcolor='#F8FDFF' py={30}>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <TitleManager fontWeight={'bold'} color={'#ffa927'} fontSize={40} variant='h1'>
          Giới thiệu
        </TitleManager>
        <Typography mt={3} mb={25} component={'i'} variant='h5' color='grey.600'>
        Website quản lý khóa luận hỗ trợ sinh viên khoa Công nghệ thông tin đăng ký khóa luận dễ dàng
        </Typography>
        <Box display={'flex'} px={30} width={'100%'} gap={10}>
          {VALUE.map((value) => (
            <Box
              width={'calc(25% - 10px)'}
              sx={{
                bgcolor: 'white',
                py: 10,
                px: 20,
                borderRadius: 3,
                cursor: 'pointer',
                '& > .MuiTypography-root': {
                  color: 'warning.main',
                },
                '& > svg': {
                  color: 'warning.main',
                },
                '&:hover': {
                  boxShadow: ' rgba(0, 0, 0, 0.35) 0px 5px 15px;',
                  transition: '0.3s ease-in',
                  bgcolor: 'primary.dark',
                  '& > .MuiTypography-root': {
                    color: 'white',
                  },
                  '& > svg': {
                    color: 'white',
                  },
                },
              }}
              textAlign={'center'}
            >
              <Icon width={40} icon={value.icon} />
              <Typography variant='h4' color='warning'>
                {value.title}
              </Typography>
              <Typography variant='body1' color='grey.700'>
                {value.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default InfoPropjectSection;
