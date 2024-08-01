import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import NewFeedSection from './NewFeed';
import BannerSection from './Banner';
import InfoPropjectSection from './Info';
import MarqueeRunning from '../../components/ui/Marquee';
import TeamInfoSection from './TeamInfo';
import { useNavigate } from 'react-router-dom';

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
          <img src='/images/logo-IUH-ngang-trang-300x131-1.webp' alt='' />
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
          <Button
            sx={{
              textTransform: 'uppercase ',
              color: 'white',
              border: '1px solid white',
              px: 10,
            }}
            onClick={() => navigate('/auth/login')}
          >
            Đăng nhập ngay
          </Button>
        </Box>
        <NewFeedSection />
      </Box>
    </Box>
  );
}

export default HomeTemplate;
