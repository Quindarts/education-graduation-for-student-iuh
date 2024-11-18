import React from 'react';
import { Box, Card, Typography, Button } from '@mui/material';

interface CardNoFileProps {
  fileName: string; // Tên file (nếu có)
  totalSize?: string; // Kích thước file (nếu cần)
  onUpload?: () => void; // Hàm xử lý khi bấm nút Upload
}

const CardNoFile: React.FC<CardNoFileProps> = ({ fileName, totalSize = 'N/A', onUpload }) => {
  return (
    <Card
      sx={{
        p: 4,
        borderRadius: 2,
        backgroundColor: '#f9f9f9',
        border: '1px solid #ddd',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      }}
    >
      <Box display='flex' alignItems='center' gap={2} mb={4}></Box>

      <Typography variant='body1' color='error' fontWeight='bold' sx={{ mb: 3 }}>
        Trạng thái: Chưa tải file lên
      </Typography>
      {onUpload && (
        <Button
          variant='contained'
          color='primary'
          onClick={onUpload}
          sx={{
            textTransform: 'none',
            borderRadius: 2,
            width: '100%',
            fontWeight: 'bold',
          }}
        >
          Tải file lên
        </Button>
      )}
    </Card>
  );
};

export default CardNoFile;
