import useAuth from '@/hook/api/useAuth';
import usePopup from '@/hook/ui/usePopup';
import useUserStore from '@/store/userStore';
import { APP_PROFILE_MENU } from '@/utils/app-config';
import { Icon } from '@iconify/react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const avatarStyles = {
  width: 40,
  height: 40,
  borderRadius: '50%',
  margin: 'auto',
  position: 'relative',
};

const imgStyles = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  borderRadius: '50%',
};

const statusStyles = {
  position: 'absolute',
  bottom: '0px',
  right: '0px',
  width: '1rem',
  height: '1rem',
  borderRadius: '50%',
  animation: 'border-animation 1s infinite',
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: '-2px',
    right: '0rem',
    width: '1rem',
    height: '1rem',
    animation: 'border-animation 1s infinite',
    background: '#fafafc',
    borderRadius: '50%',
  },
};

const statusCircleStyles = {
  backgroundColor: '#1de327',
  width: 12,
  height: 12,
  position: 'absolute',
  bottom: '1px',
  right: '2px',
  borderRadius: '50%',
  transition: '1s ease-in-out',
};

const keyframes = `
  @keyframes border-animation {
    0% {
      background: #fcfafc;
    }
    25% {
      background: #d5d3d5;
    }
    50% {
      background: #a19fa1;
    }
    75% {
      background: #bab9ba;
    }
    100% {
      background: #cacaca;
    }
  }
`;
function ProfileMenu({color}:any) {
  const navigate = useNavigate();
  const { handleActive, active, menuRef } = usePopup();
  const me = useUserStore((state: any) => state.me);
  const { HandleLogout } = useAuth();
  const { mutate: logout } = HandleLogout();
  return (
    <Box
      display='flex'
      sx={{
        cursor: 'pointer',
        '&:hover': {
          bgcolor: 'color',
        },
        gap: {
          xs: 0,
          md: 5,
        },
      }}
      height={70}
      px={10}
      py={4}
      alignItems='center'
      onClick={handleActive}
      ref={menuRef}
      position='relative'
    >
      <Box sx={avatarStyles}>
        <style>{keyframes}</style>
        <Avatar alt='avatar' sx={imgStyles} />
        <Box sx={statusStyles}>
          <Box sx={statusCircleStyles} />
        </Box>
      </Box>

      <Box
        sx={{
          '& .MuiTypography-root': {
            display: {
              xs: 'none',
              lg: 'block',
            },
          },
        }}
      >
        <Typography color={color} variant='h6' fontWeight={600}>
          {me?.fullName}
        </Typography>
        <Typography color={color} variant='body2' fontWeight={600}>
          Sinh viên
        </Typography>
      </Box>
      {active && (
        <Box
          zIndex={20}
          top={'100%'}
          right={0}
          boxShadow={2}
          sx={{
            backgroundColor: 'background.paper',
            position: {
              xs: 'fixed',
              sm: 'absolute',
            },
            width: {
              xs: '100vw',
              sm: 180,
            },
          }}
          borderRadius={2}
          py={4}
        >
          <Typography
            color='text.secondary'
            height={29}
            variant='body2'
            fontWeight={500}
            px={9}
            py={4}
          >
            Chào mừng trở lại!
          </Typography>
          <MenuList sx={{ p: 0 }}>
            {APP_PROFILE_MENU.map((menuItem: any) => (
              <MenuItem
                sx={{ '.MuiListItemIcon-root ': { minWidth: 24 }, my: 2 }}
                onClick={() => {
                  if (menuItem.link === '/auth/login') {
                    logout();
                  } else navigate(menuItem.link);
                }}
              >
                <ListItemIcon sx={{ color: 'text.secondary' }}>
                  <Icon width={18} height={22} icon={menuItem.icon} />
                </ListItemIcon>
                <Typography variant='body2' fontWeight={500} color='color'>
                  {menuItem.text}
                </Typography>
              </MenuItem>
            ))}
          </MenuList>
        </Box>
      )}
    </Box>
  );
}

export default ProfileMenu;
