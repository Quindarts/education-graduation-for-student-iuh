import React, { useContext } from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';
import { ChatStore } from '@/page/ChatBox';

const MessageLoaderWithLinearProgress: React.FC<{ isLoading: boolean }> = (props) => {
  const { isLoading } = props;
  return (
    <>
      {isLoading === true && (
        <Box
          sx={{
            width: '100%',
            border: '1px solid #ddd',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
            py: 2,
          }}
        >
          <Typography textAlign='center' marginBottom='8px'>
            Đang soạn tin...
          </Typography>
          <LinearProgress />
        </Box>
      )}
    </>
  );
};

export default MessageLoaderWithLinearProgress;
