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
      setColor('primary.main');
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
      sx={{ backgroundColor: bgColor, zIndex: 900, transition: 'all 1s ease-in' }}
      px={8}
      display='flex'
      position='fixed'
      zIndex={20}
      top={0}
      bottom={0}
      width='100vw'
      height={70}
      left={0}
    >
      <Box
        display={'flex'}
        marginLeft={isOpen ? '250px' : '76px'}
        sx={{
          transition: '0.1s ease-in',
        }}
        width={'100%'}
        alignItems='center'
        justifyContent='space-between'
      >
        <Box display={'flex'} alignItems={'center'}>
          <Box
            sx={{
              cursor: 'pointer',
              '&:hover': {
                borderRadius: '10%',
                boxShadow: 'rgba(177, 202, 233, 0.15) 0px 48px 100px 0px;',
                color: 'primary.dark',
                svg: {
                  transform: 'scale(1.3)',
                  transition: 'transform 0.3s ease-in',
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
            <Icon width={30} icon={isOpen ? 'grommet-icons:previous' : 'ep:menu'} />
          </Box>
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={4} ml={2}>
            <img width={100} src='/images/Logo_IUH.webp'/>
            <Box>
              <Typography
                fontWeight={'bold'}
                textTransform={'uppercase'}
                variant='h6'
                color={color}
              >
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
          <Notification />
          <ProfileMenu color={color} />
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
