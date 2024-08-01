import AnimatedSection from '@/components/ui/Animated/AnimatedSection';
import TitleManager from '@/components/ui/Title';
import { Box, Typography } from '@mui/material';
import React from 'react';

function TeamInfoSection() {
  return (
    <>
      <Box bgcolor='#edf5ff' position={'relative'} px={30} py={60} zIndex={10}>
        <Box display={'flex'} gap={60} justifyContent={'center'} alignItems={'center'}>
          <Box data-aos='fade-right'>
            <AnimatedSection direction='left'>
              <TitleManager
                fontWeight={'bold'}
                color={'#FF7D27'}
                mb={20}
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
          <Box  zIndex={10}>
            <AnimatedSection direction='right'>
              <Box borderRadius={'80%'} bgcolor='white'>
                <img width={600} src='/images/undraw_wait_in_line_o2aq.webp' />
              </Box>
            </AnimatedSection>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default TeamInfoSection;
