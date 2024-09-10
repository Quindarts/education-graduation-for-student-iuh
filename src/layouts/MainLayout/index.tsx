import Header from '@/components/shared/Header';
import { Box } from '@mui/material';
import cover from '/images/bg-home.webp';
import { Outlet } from 'react-router-dom';
import Footer from '@/components/shared/Footer';

function MainLayout() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${cover})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          overflowY: 'hidden',
          backgroundClip: 'revert',
          height: '100vh',
        }}
        component={'section'}
      >
        <Header />
        <Box sx={{ overflowY: 'auto', height: '100vh', width: 'full', mt: '70px' }}>
          <Outlet />
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default MainLayout;
