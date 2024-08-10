import { Box } from '@mui/material';
import Marquee from 'react-fast-marquee';
const MarqueeRunning = () => {
  return (
    <Box
      sx={{ py: 10, bgcolor: 'error.dark', color: 'white', textTransform: 'uppercase' }}
      className='running'
    >
      <Marquee pauseOnHover speed={70} gradientColor='white'>
        <Box className='running__text' mx={40}>
          <span className='icon'>
            Trang Quản lý Khóa luận Tốt nghiệp Khoa công nghệ thông tin
          </span>
        </Box>
        <Box className='running__text' mx={40}>
          <span className='icon'>
            Trang sinh viên: Thông báo mới nhất về đăng kí Khóa luận Tốt nghiệp Học kì I 2024 - 2025
          </span>
        </Box>
        <Box className='running__text' mx={40}>
          <span className='icon'>Thời gian mở đăng ký nhóm sinh viên:</span>
          <span className='text'> 08/2024</span>
        </Box>
      </Marquee>
    </Box>
  );
};

export default MarqueeRunning;
