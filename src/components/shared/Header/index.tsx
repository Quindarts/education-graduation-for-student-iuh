import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from '/images/Logo_IUH.webp';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function Header() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{ backgroundColor: 'primary.dark', zIndex: 1001 }}
      px={12}
      position='fixed'
      zIndex={20}
      top={0}
      bottom={0}
      width='100%'
      height={70}
      alignItems='center'
      justifyContent='space-between'
      display={'flex'}
    >
      <Box gap={10} display={'flex'}>
        <Box>
          <img width={100} src={logo} alt='' />
        </Box>
        <Box>
          <Typography variant='body1' color='white' textTransform={'uppercase'}>
            Thành phố Hồ Chí Minh
          </Typography>
          <Typography variant='h5' color='white'>
            {' '}
          </Typography>
          <Typography
            variant='body1'
            mt={3}
            fontWeight={600}
            textTransform={'uppercase'}
            color='white'
          >
            Trường đại học công nghiệp
          </Typography>
        </Box>
      </Box>
      <Box display={'flex'} alignItems={'center'} gap={20}>
        <Box color={'white'}>
          <Link style={{ color: 'white', textTransform: 'uppercase', fontWeight: '500' }} to={'/'}>
            Khóa luận tốt nghiệp
          </Link>
        </Box>
        <Box color={'white'}>
          <Link style={{ color: 'white', textTransform: 'uppercase', fontWeight: '500' }} to={'/'}>
            Lịch khóa luận
          </Link>
        </Box>
        <Box color={'white'}>
          <Link style={{ color: 'white', textTransform: 'uppercase', fontWeight: '500' }} to={'/'}>
            Đăng ký khóa luận
          </Link>
        </Box>
        <Box color={'white'}>
          <Link style={{ color: 'white', textTransform: 'uppercase', fontWeight: '500' }} to={'/'}>
            Thông tin
          </Link>
        </Box>
        <Box>
          <Button onClick={() => navigate('/auth/login')} variant='contained' color='success'>
            Đăng nhập
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
