import { Box, Button, Typography } from '@mui/material';
import React from 'react';

function HeroSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#0052b1',
        color: '#fff',
        padding: '0 20px',
      }}
    >
      <Typography variant='h3' gutterBottom>
        Giải pháp quản lý khóa luận tốt nghiệp toàn diện cho Khoa Công nghệ Thông tin IUH
      </Typography>
      <Typography variant='h6' gutterBottom>
        Quản lý và theo dõi khóa luận dễ dàng hơn bao giờ hết với phần mềm thân thiện và hiệu quả.
      </Typography>
      <Button variant='contained' color='warning' size='large' sx={{ marginTop: '20px' }}>
        Bắt đầu ngay
      </Button>
    </Box>
  );
}

export default HeroSection;
