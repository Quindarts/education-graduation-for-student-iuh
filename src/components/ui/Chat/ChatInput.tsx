import { Box, IconButton, TextField } from '@mui/material';
import React from 'react';
import { Icon } from '@iconify/react';

const ChatInput = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px',
        borderTop: '1px solid #ddd',
        width: '100%',
        backgroundColor: 'grey.50',
        zIndex: 100,
      }}
    >
      <TextField
        size='small'
        placeholder='Nhập nội dung tin nhắn(đang phát triển)...'
        disabled
        fullWidth
        sx={{ marginRight: '8px' }}
      />
      <IconButton color='primary'>
        <Icon icon='mingcute:send-fill' />
      </IconButton>
    </Box>
  );
};

export default ChatInput;
