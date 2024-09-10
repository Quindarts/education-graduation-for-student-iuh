import React from 'react';
import { Box, keyframes } from '@mui/system';
import { useLocation } from 'react-router-dom';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
const PageWrapper = ({ children }) => {
  const location = useLocation();

  return (
    <Box
      key={location.pathname}
      sx={{
        animation: `${slideIn} 0.2s ease-out`,
        position: 'absolute',
        width: '100vw',
        bgcolor: 'red',
        zIndex: 1,
        height: '50px',
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      {children}
    </Box>
  );
};

export default PageWrapper;
