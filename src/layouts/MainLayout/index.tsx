import Header from '@/components/shared/Header';
import { Box } from '@mui/material';
import cover from '../../../public/images/bg-home.jpg';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${cover})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100vh',
          overflowY: 'hidden',
          backgroundClip: 'revert',
        }}
        component={'section'}
      >
        <Header />
        <Box sx={{ overflowY: 'auto', height: '100vh', width: 'full', mt: '70px' }}>
          <Box height={'auto'}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MainLayout;
