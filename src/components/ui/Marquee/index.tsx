import { Box, Typography } from '@mui/material';
import Marquee from 'react-fast-marquee';
const MarqueeRunning = () => {
  return (
    <Box
      sx={{
        py: {
          xs: 4,
          md: 10,
        },
        bgcolor: 'error.dark',
        color: 'white',
        textTransform: 'uppercase',
      }}
      className='running'
    >
      <Marquee pauseOnHover speed={70} gradientColor='white'>
        <Box className='running__text' mx={40}>
          <Typography className='icon'>
            Trang Quản lý Khóa luận Tốt nghiệp Khoa công nghệ thông tin
          </Typography>
        </Box>
        <Box className='running__text' mx={40}>
          <Typography className='icon'>
            Trang sinh viên: Thông báo mới nhất về đăng kí Khóa luận Tốt nghiệp
          </Typography>
        </Box>
        <Box className='running__text' mx={40}>
          <Typography className='icon'>Thời gian mở đăng ký nhóm sinh viên:</Typography>
        </Box>
      </Marquee>
    </Box>
  );
};

export default MarqueeRunning;
