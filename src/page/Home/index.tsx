import { Box, Button, ButtonProps, Typography } from '@mui/material';
import React from 'react';
import NewFeedSection from './NewFeed';
import BannerSection from './Banner';
import InfoPropjectSection from './Info';
import MarqueeRunning from '../../components/ui/Marquee';
import TeamInfoSection from './TeamInfo';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: '#FFF',
  transition: 'all 0.5s',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    transition: 'all 0.3s',
  },
  '&:hover::before': {
    opacity: 0,
    transform: 'scale(0.5, 0.5)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    opacity: 0,
    transition: 'all 0.3s',
    border: '1px solid rgba(255,255,255,0.5)',
    transform: 'scale(1.2, 1.2)',
  },
  '&:hover::after': {
    opacity: 1,
    transform: 'scale(1, 1)',
  },
}));
function HomeTemplate() {
  const navigate = useNavigate();
  return (
    <Box>
      <Box>
        <BannerSection />
        <MarqueeRunning />
        <InfoPropjectSection />
        <TeamInfoSection />
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          bgcolor={'rgba(0,0,0,0.7)'}
          height={'60vh'}
          flexDirection={'column'}
        >
          <img src='/public/images/logo-IUH-ngang-trang-300x131-1.png' alt='' />
          <Typography
            mt={10}
            variant='h1'
            fontWeight={'bold'}
            textTransform={'uppercase'}
            color='grey.400'
          >
            Trang quản lý khóa luận tốt nghiệp
          </Typography>
          <Typography variant='h1' textTransform={'uppercase'} mt={4} mb={10} color='grey.400'>
            Khoa công nghệ thông tin
          </Typography>
          <CustomButton onClick={() => navigate('/auth/login')}>Đăng nhập ngay</CustomButton>
        </Box>
        <NewFeedSection />
      </Box>
    </Box>
  );
}

export default HomeTemplate;
