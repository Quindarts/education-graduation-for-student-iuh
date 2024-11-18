import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
const avatarStyles = {
  width: 40,
  height: 40,
  borderRadius: '50%',
  margin: 'auto',
  position: 'relative',
};

const imgStyles = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  borderRadius: '50%',
};

const statusStyles = {
  position: 'absolute',
  bottom: '0px',
  right: '0px',
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  animation: 'border-animation 1s infinite',
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: '-2px',
    right: '0rem',
    width: '12px',
    height: '12px',
    animation: 'border-animation 1s infinite',
    background: '#fafafc',
    borderRadius: '50%',
  },
};

const statusCircleStyles = {
  backgroundColor: '#1de327',
  width: '8px',
  height: '8px',
  position: 'absolute',
  bottom: '1px',
  right: '2px',
  borderRadius: '50%',
  transition: '1s ease-in-out',
};

const keyframes = `
  @keyframes border-animation {
    0% {
      background: #fcfafc;
    }
    25% {
      background: #d5d3d5;
    }
    50% {
      background: #a19fa1;
    }
    75% {
      background: #bab9ba;
    }
    100% {
      background: #cacaca;
    }
  }
`;
const ChatHeader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 16px',
        backgroundColor: '#002366',
        color: '#fff',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={avatarStyles}>
          <style>{keyframes}</style>
          <Avatar alt='avatar' src='/images/logo-sm.webp' sx={imgStyles} />
          <Box sx={statusStyles}>
            <Box sx={statusCircleStyles} />
          </Box>
        </Box>
        <Box ml={6}>
          <Typography variant='h6' color={'grey.200'} fontWeight='500'>
            Tư vấn gợi ý đề tài
          </Typography>
          <Typography color={'success.main'} variant='body1'>online</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatHeader;
