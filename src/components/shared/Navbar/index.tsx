import { Icon } from '@iconify/react';
import Box from '@mui/material/Box';
// import logo from '/images/Logo_IUH.webp';
import Typography from '@mui/material/Typography';
import ProfileMenu from './ProfileMenu';
import useSidebarStore from '@/store/ui/sidebarStore';
import Notification from './Notification';
import { useEffect, useState } from 'react';

function Navbar() {
  const [bgColor, setBgColor] = useState('grey.100');
  const [color, setColor] = useState('grey.600');
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBgColor('rgb(242, 246, 249,0.97)');
      setColor('grey.600');
    } else {
      setBgColor('grey.100');
      setColor('primary.dark');
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const { isOpen, toggleSidebar } = useSidebarStore();

  return (
    <Box
      sx={{ backgroundColor: bgColor, transition: 'all 0.3s', zIndex: 1001 }}
      px={12}
      display='flex'
      position='fixed'
      zIndex={20}
      top={0}
      bottom={0}
      width='100%'
      height={70}
      maxWidth={isOpen ? `calc(100vw - 250px)` : `calc(100vw - 76px)`}
      alignItems='center'
      left={isOpen ? '250px' : '76px'}
      justifyContent='space-between'
    >
      <Box display={'flex'} alignItems={'center'}>
        <Box
          sx={{
            cursor: 'pointer',
            '&:hover': {
              borderRadius: '10%',
              transition: 'transform 1s',
              boxShadow: 'rgba(177, 202, 233, 0.15) 0px 48px 100px 0px;',
              color: 'primary.dark',
              svg: {
                transform: 'scale(1.3)',
              },
            },
          }}
          mx={2}
          display='flex'
          p={6}
          alignItems='center'
          onClick={toggleSidebar}
          fontWeight={'bold'}
          color={'grey.700'}
        >
          <Icon
            width={30}
            style={{ color: color }}
            icon={isOpen ? 'grommet-icons:previous' : 'ep:menu'}
          />
        </Box>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={4} ml={2}>
          <Box>
            <Typography fontWeight={'bold'} textTransform={'uppercase'} variant='h6' color={color}>
              Đại học công nghiệp Tp.HCM
            </Typography>
            <Typography
              fontWeight={'bold'}
              textTransform={'uppercase'}
              variant='body2'
              color={color}
            >
              Khoa Công nghệ thông tin
            </Typography>
          </Box>
        </Box>
        {/* <Box>
          <BreadCrumbRouting />
        </Box> */}
      </Box>

      <Box display='flex' alignItems='center' gap={6}>
        <Notification color={color} />
        <ProfileMenu color={color} />
      </Box>
    </Box>
  );
}

export default Navbar;
