import { checkGender } from '@/utils/validations/person.validation';
import { Box, Card, CardContent, Typography, IconButton, Button, Chip } from '@mui/material';
import React from 'react';

function StudentCard({ name, mssv, email, phone, gender, studentId, isAdmin, index }: any) {
  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: 'calc(100% - 16px)',
        backgroundColor: '#fff',
        border: '2px solid #e4f1fe',
        color: 'primary.dark',
        margin: 'auto',
        marginTop: 4,
        cursor: 'pointer',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.01)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
        },
      }}
    >
      <CardContent sx={{ px: 10, py: 2 }}>
        <Typography sx={{ fontSize: 20, fontWeight: 'bold', color: 'primary.dark' }} gutterBottom>
          Sinh viên {index}: {name}
        </Typography>
        <Box sx={{ display: 'flex', gap: 10 }}>
          <Box width={'300px'}>
            <Typography sx={{ fontSize: 16, marginBottom: 1, color: 'primary.dark' }}>
              MSSV: {mssv}
            </Typography>
            <Typography variant='h6' component='p'>
              Email liên hệ: {email ? email : 'Đang cập nhật'}
            </Typography>
          </Box>
          <Box width={'200px'}>
            <Typography variant='h6' component='p'>
              SĐT: {phone}
            </Typography>
            <Typography variant='h6' component='p'>
              Giới tính: {checkGender(gender)}
            </Typography>
          </Box>
        </Box>
        <Box justifyContent={'end'} display={'flex'} gap={4}>
          {!isAdmin ? (
            <Button variant='contained' color='success'>
              Bầu làm trưởng nhóm
            </Button>
          ) : (
            <>
              <Typography variant='h6' fontWeight={'bold'} color='error.dark'>
                Trưởng Nhóm
              </Typography>
            </>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

export default StudentCard;
