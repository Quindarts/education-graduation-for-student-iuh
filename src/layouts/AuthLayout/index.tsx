import Footer from '@/components/shared/Footer';
import HeadLogin from '@/components/shared/Header/HeadLogin';
import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
function AuthLayout() {
  return (
    <Box>
      <HeadLogin />
      <Box
        sx={{
          mt: 20,
          height: '100vh',
          overflowY: 'hidden',
          backgroundClip: 'revert',
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
          bgcolor:'#dfefff',
        }}
      >
      
        <Box zIndex={1}>
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default AuthLayout;
