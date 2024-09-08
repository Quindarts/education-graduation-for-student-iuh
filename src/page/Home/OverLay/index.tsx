import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Box, Typography } from '@mui/material';

const OverlaySection = ({ fadeInOut }: any) => {
  const galaxyTextStyle = {
    background: 'linear-gradient(45deg, #ff0081, #ff8c00, #7300ff, #006eff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: `
            0 0 5px rgba(255, 255, 255, 0.6), // Ánh sáng nhẹ
            0 0 10px rgba(255, 255, 255, 0.4), // Ánh sáng mạnh hơn
            0 0 15px rgba(255, 255, 255, 0.2)  // Ánh sáng yếu hơn
          `,
    animation: `${fadeInOut}`,
    fontSize: {
      xs: 16,
      md: 20,
    },
  };
  return (
    <Box>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'white',
          animation: `${fadeInOut} `,
          zIndex: 9999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      />

      <Box>
        <DotLottieReact
          style={{
            animation: `${fadeInOut}`,
            position: 'relative',
            top: 'calc(50% - 200px)',
            left: 'calc(50% - 200px)',
            zIndex: 10000,
            width: '400px',
            height: '400px',
          }}
          src='https://lottie.host/6f6baffa-0dcd-4702-9ca3-c3dde617240a/Em3h34rJgn.json'
          autoplay
        />
        <Box
          sx={{
            position: 'relative',
            zIndex: 19999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            textAlign={'center'}
            mx={4}
            variant='h3'
            fontWeight={'bold'}
            sx={galaxyTextStyle}
          >
            KHOA CÔNG NGHỆ THÔNG TIN
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OverlaySection;
