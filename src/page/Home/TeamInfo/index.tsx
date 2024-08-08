import AnimatedSection from '@/components/ui/Animated/AnimatedSection';
import TitleManager from '@/components/ui/Title';
import { Box, Typography } from '@mui/material';
import React from 'react';

function TeamInfoSection() {
  return (
    <>
      <Box
        bgcolor='#edf5ff'
        position={'relative'}
        sx={{
          px: {
            xs: 6,
            md: 12,
            lg: 30,
          },
          py: {
            xs: 6,
            sm: 60,
          },
        }}
        zIndex={10}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              lg: 'row',
            },
            gap: {
              xs: 20,
              lg: 60,
            },
          }}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Box>
            <AnimatedSection direction='left'>
              <TitleManager
                fontWeight={'bold'}
                color={'#FF7D27'}
                sx={{
                  mb: {
                    xs: 4,
                    lg: 20,
                  },
                  fontSize: {
                    xs: 20,
                    lg: 40,
                  },
                }}
                fontSize={40}
                variant='h1'
              >
                Đội ngũ phát triển
              </TitleManager>
            </AnimatedSection>
            <Box sx={{ zIndex: 10 }}>
              <AnimatedSection direction='left'>
                <Typography variant='h6' mb={10} color='grey.600'>
                  <Typography variant='h5' component={'span'} fontWeight={'bold'} color='grey.600'>
                    Giáo viên hướng dẫn:
                  </Typography>{' '}
                  <br />
                  Nguyễn Thị Hạnh (Chủ nhiệm ngành Kỹ thuật Phần mềm)
                  <br /> Châu Thị Bảo Hà (Chủ quản môn học Khóa luận tốt nghiệp)
                </Typography>
              </AnimatedSection>
              <AnimatedSection direction='left'>
                <Typography variant='h6' mb={10} color='grey.600'>
                  <Typography variant='h5' component={'span'} fontWeight={'bold'} color='grey.600'>
                    Người phát triển phần mềm:
                  </Typography>{' '}
                  <br /> Lê Minh Quang
                  <br />
                  Nguyễn Huy Hoàng.
                </Typography>
              </AnimatedSection>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
            zIndex={10}
          >
            <AnimatedSection direction='right'>
              <Box
                borderRadius={'80%'}
                sx={{
                  width: {
                    xs: '320px',
                    md: '480px',
                    lg: '600px',
                  },
                }}
                bgcolor='white'
              >
                <img width={'100%'} src='/images/undraw_wait_in_line_o2aq.webp' />
              </Box>
            </AnimatedSection>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default TeamInfoSection;
