import { Icon } from '@iconify/react';
import Box from '@mui/material/Box';
import logo from '../../../../public/images/Logo_IUH.png';
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
          sx={{ cursor: 'pointer' }}
          width={54}
          height={70}
          display='flex'
          alignItems='center'
          onClick={toggleSidebar}
          color={'grey.600'}
        >
          <Icon width={20} icon={isOpen ? 'ooui:next-ltr' : 'fluent:list-16-regular'} />
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
