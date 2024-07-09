import { Box } from '@mui/material';
import React from 'react';
import cover from '../../../public/images/bg-home.jpg';
import { Outlet } from 'react-router-dom';
function AuthLayout() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${cover})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        overflowY: 'hidden',
        backgroundClip: 'revert',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          backdropFilter: 'blur(10px)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      ></Box>
      <Box zIndex={1}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default AuthLayout;
