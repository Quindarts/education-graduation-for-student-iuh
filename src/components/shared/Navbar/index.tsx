import { Icon } from '@iconify/react';
import Box from '@mui/material/Box';
import logo from '/images/Logo_IUH.webp';
import Typography from '@mui/material/Typography';
import ProfileMenu from './ProfileMenu';
import useSidebarStore from '@/store/ui/sidebarStore';
import Notification from './Notification';

function Navbar() {
  const { isOpen, toggleSidebar } = useSidebarStore();

  return (
    <Box
      sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', zIndex: 1001 }}
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
              bgcolor: '#efefef',
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
          <Icon width={30} icon={isOpen ? 'grommet-icons:previous' : 'ep:menu'} />
        </Box>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={4} ml={2}>
          <img width={140} src={`${logo}`} />
          <Box>
            <Typography
              fontWeight={'bold'}
              textTransform={'uppercase'}
              variant='h6'
              color='primary'
            >
              Đại học công nghiệp Tp.HCM
            </Typography>
            <Typography
              fontWeight={'bold'}
              textTransform={'uppercase'}
              variant='body2'
              color='primary'
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
        <ProfileMenu />
      </Box>
    </Box>
  );
}

export default Navbar;
