import { Box, Typography } from '@mui/material';
import React from 'react';

function Schedule() {
  return (
    <Box paddingX={'25px'}>
      <Typography fontWeight={'bold'} variant='h6' mt={'20px'} color='primary.dark'>
        Các giai đoạn thực hiện khóa luận
      </Typography>
      <Box mt={2}>
        <Box display='flex' mb={6} gap='20px'>
          <Typography variant='body1' fontWeight={500} color='#BCC1CD'>
            Ngày/ Tháng
          </Typography>
          <Typography variant='body1' fontWeight={500} color='#BCC1CD'>
            Nội dung
          </Typography>
        </Box>
        <Box display={'flex'} flexDirection={'column'} gap={10}>
          {[1, 2, 3, 4].map((a: any) => (
            <Box key={a} display='flex' alignItems={'stretch'} gap='20px'>
              <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                width={'70px'}
                borderRight={2}
                borderColor={'#FAF9F9'}
                height={'100%'}
                minHeight={'120px'}
              >
                <Typography
                  height={'100%'}
                  textAlign={'center'}
                  variant='body1'
                  fontWeight={600}
                  color='grey.700'
                >
                  08/07
                </Typography>
              </Box>
              <Box
                borderRadius={'16px'}
                flex={1}
                paddingX={'10px'}
                paddingY={'18px'}
                bgcolor={'#F6F6F5'}
              >
                <Typography variant='h6' fontWeight={700} color='212525'>
                  Xem đề tài
                </Typography>
                <Typography variant='body2' fontWeight={500} color='initial'>
                  Danh sách các đề tài được công bố, các nhóm sinh viên tham khảo và chọn ra đề tài
                  mà nhóm muốn thực hiện
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Schedule;
