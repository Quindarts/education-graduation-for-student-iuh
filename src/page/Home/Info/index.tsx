import AnimatedSection from '@/components/ui/Animated/AnimatedSection';
import TitleManager from '@/components/ui/Title';
import styled from '@emotion/styled';
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
    <Box position={'relative'} bgcolor='white' px={30} py={60}>
      <Box zIndex={10} display={'flex'} gap={20} justifyContent={'center'} alignItems={'center'}>
        <AnimatedSection direction='left'>
          <Box position={'relative'} zIndex={10}>
            <img width={600} src='/public/images/undraw_educator_re_ju47.svg' />
          </Box>
        </AnimatedSection>
        <AnimatedSection direction='right'>
          <TitleManager fontWeight={'bold'} color={'#FF7D27'} mb={30} fontSize={40} variant='h1'>
            Giới thiệu
          </TitleManager>
          <Typography position={'relative'} zIndex={10} variant='h6' color='grey.600'>
            Phần mềm quản lý khóa luận tốt nghiệp khoa Công nghệ Thông tin IUH là giải pháp toàn
            diện giúp các sinh viên và giảng viên quản lý và theo dõi quá trình thực hiện khóa luận
            một cách hiệu quả. Với giao diện thân thiện và dễ sử dụng, phần mềm này giúp người dùng
            dễ dàng tạo, cập nhật và quản lý thông tin khóa luận chỉ với vài thao tác đơn giản.
          </Typography>
          <Box position={'relative'} zIndex={10} pl={20} mt={10}>
            <AnimatedSection direction='right'>
              <Box display={'flex'} gap={6} alignItems={'center'} color='#FF7D27'>
                <Box bgcolor='#FF7D27' borderRadius={'50%'} pt={3} pb={2} px={4}>
                  <Icon width={16} height={16} color='white' icon='subway:tick' />
                </Box>
                <Typography variant='h5'>Tăng cường hiệu quả quản lý và theo dõi</Typography>
              </Box>
            </AnimatedSection>
            <AnimatedSection direction='right'>
              <Box display={'flex'} my={8} gap={6} alignItems={'center'} color='#FF7D27'>
                <Box bgcolor='#FF7D27' borderRadius={'50%'} pt={3} pb={2} px={4}>
                  <Icon width={16} height={16} color='white' icon='subway:tick' />
                </Box>
                <Typography variant='h5'> Hỗ trợ nâng cao chất lượng khóa luận</Typography>
              </Box>
            </AnimatedSection>
            <AnimatedSection direction='right'>
              <Box display={'flex'} my={8} gap={6} alignItems={'center'} color='#FF7D27'>
                <Box bgcolor='#FF7D27' borderRadius={'50%'} pt={3} pb={2} px={4}>
                  <Icon width={16} height={16} color='white' icon='subway:tick' />
                </Box>
                <Typography variant='h5'>Bảo mật thông tin và dễ dàng truy cập tài liệu</Typography>
              </Box>
            </AnimatedSection>
          </Box>
        </AnimatedSection>
      </Box>
      <Box position={'absolute'} left={0} bottom={-10} zIndex={0} maxWidth={'100%'}>
        <img width={'100%'} src='/public/images/wall.png' alt='' />
      </Box>
    </Box>
  );
}

export default InfoPropjectSection;
