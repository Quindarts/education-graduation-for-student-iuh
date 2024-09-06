import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NewFeedSection from './NewFeed';
import BannerSection from './Banner';
import InfoPropjectSection from './Info';
import MarqueeRunning from '../../components/ui/Marquee';
import TeamInfoSection from './TeamInfo';
import { useNavigate } from 'react-router-dom';
import Benefits from './Benefit';
import OverLaySection from './OverLay';
import { keyframes } from '@mui/system';
import CompanyMarquee from './CompanyMarquee';

const fadeInOut = keyframes`
  0% {
    display: block;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    display: none;
    opacity: 0;
  }
`;
function HomeTemplate() {
  const navigate = useNavigate();
  const [overLay, setOverLay] = useState(`${fadeInOut} 2s forwards`);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOverLay('');
    }, 2400);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      {overLay ? (
        <OverLaySection fadeInOut={fadeInOut} />
      ) : (
        <Box sx={{ position: 'relative' }}>
          <BannerSection />
          <MarqueeRunning />
          <InfoPropjectSection />
          <TeamInfoSection />
          <Benefits />
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            bgcolor={'rgba(0,0,0,0.7)'}
            height={'60vh'}
            flexDirection={'column'}
          >
            <Box>
              <img
                src='/images/logo-IUH-ngang-trang-300x131-1.webp'
                alt='Logo của Đại học Công nghiệp TP.HCM (IUH)'
              />
            </Box>
            <Typography
              mt={10}
              variant='h1'
              fontWeight={'bold'}
              textTransform={'uppercase'}
              color='grey.400'
              sx={{
                fontSize: {
                  xs: 14,
                  md: 30,
                },
              }}
            >
              Trang quản lý khóa luận tốt nghiệp
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: 14,
                  md: 30,
                },
              }}
              variant='h1'
              textTransform={'uppercase'}
              mt={4}
              mb={10}
              color='grey.400'
            >
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
          <CompanyMarquee />
        </Box>
      )}
    </Box>
  );
}

export default HomeTemplate;
