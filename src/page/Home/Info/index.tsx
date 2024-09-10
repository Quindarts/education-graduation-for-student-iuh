import AnimatedSection from '@/components/ui/Animated/AnimatedSection';
import TitleManager from '@/components/ui/Title';
import { Icon } from '@iconify/react';
import { Box, Typography } from '@mui/material';
import React from 'react';

function InfoPropjectSection() {
  return (
    <Box
      id='infoProp'
      position={'relative'}
      bgcolor='white'
      sx={{
        px: {
          xs: 6,
          md: 12,
          sm: 30,
        },
        py: {
          xs: 6,
          sm: 60,
        },
      }}
    >
      <Box
        zIndex={10}
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            lg: 'row',
          },
        }}
        gap={20}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <AnimatedSection direction='left'>
          <Box
            sx={{
              width: {
                xs: '320px',
                md: '480px',
                lg: '600px',
              },
            }}
            position={'relative'}
            zIndex={10}
          >
            <img width={'100%'} src='/images/undraw_educator_re_ju47.webp' />
          </Box>
        </AnimatedSection>
        <AnimatedSection direction='right'>
          <TitleManager
            fontWeight={'bold'}
            color={'#FF7D27'}
            sx={{
              mb: {
                xs: 5,
                md: 10,
                lg: 30,
              },
              fontSize: {
                xs: 20,
                lg: 40,
              },
            }}
            variant='h1'
          >
            Giới thiệu
          </TitleManager>
          <Typography position={'relative'} zIndex={10} variant='h6' color='grey.600'>
            Phần mềm quản lý khóa luận tốt nghiệp khoa Công nghệ Thông tin IUH là giải pháp toàn
            diện giúp các sinh viên và giảng viên quản lý và theo dõi quá trình thực hiện khóa luận
            một cách hiệu quả. Với giao diện thân thiện và dễ sử dụng, phần mềm này giúp người dùng
            dễ dàng tạo, cập nhật và quản lý thông tin khóa luận chỉ với vài thao tác đơn giản.
          </Typography>
          <Box
            position={'relative'}
            zIndex={10}
            sx={{
              pl: {
                xs: 0,
                sm: 12,
                lg: 20,
              },
              mt: {
                xs: 4,
                sm: 10,
              },
            }}
          >
            <AnimatedSection direction='right'>
              <Box
                display={'flex'}
                gap={6}
                alignItems={'center'}
                sx={{
                  '.MuiTypography-root': {
                    fontSize: {
                      xs: 14,
                      sm: 16,
                    },
                  },
                }}
                color='#FF7D27'
              >
                <Box
                  bgcolor='#FF7D27'
                  borderRadius={'50%'}
                  sx={{
                    px: {
                      xs: 2,
                      md: 3,
                    },
                  }}
                >
                  <Icon width={16} color='white' icon='subway:tick' />
                </Box>
                <Typography variant='h5'>Tăng cường hiệu quả quản lý và theo dõi</Typography>
              </Box>
            </AnimatedSection>
            <AnimatedSection direction='right'>
              <Box
                display={'flex'}
                gap={6}
                alignItems={'center'}
                sx={{
                  '.MuiTypography-root': {
                    fontSize: {
                      xs: 14,
                      sm: 16,
                    },
                  },
                }}
                color='#FF7D27'
                my={8}
              >
                <Box
                  bgcolor='#FF7D27'
                  borderRadius={'50%'}
                  sx={{
                    px: {
                      xs: 2,
                      md: 3,
                    },
                  }}
                >
                  <Icon width={16} height={16} color='white' icon='subway:tick' />
                </Box>
                <Typography variant='h5'> Hỗ trợ nâng cao chất lượng khóa luận</Typography>
              </Box>
            </AnimatedSection>
            <AnimatedSection direction='right'>
              <Box
                display={'flex'}
                gap={6}
                alignItems={'center'}
                sx={{
                  '.MuiTypography-root': {
                    fontSize: {
                      xs: 14,
                      sm: 16,
                    },
                  },
                }}
                color='#FF7D27'
                my={8}
              >
                <Box
                  bgcolor='#FF7D27'
                  borderRadius={'50%'}
                  sx={{
                    px: {
                      xs: 2,
                      md: 3,
                    },
                  }}
                >
                  <Icon width={16} height={16} color='white' icon='subway:tick' />
                </Box>
                <Typography variant='h5'>Bảo mật thông tin và dễ dàng truy cập tài liệu</Typography>
              </Box>
            </AnimatedSection>
          </Box>
        </AnimatedSection>
      </Box>
      <Box position={'absolute'} left={0} bottom={-10} zIndex={0} maxWidth={'100%'}>
        <img width={'100%'} src='/images/wall.webp' alt='' />
      </Box>
    </Box>
  );
}

export default InfoPropjectSection;
