import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Icon } from '@iconify/react';
import { Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '@/utils/app-config';
import React, { useEffect, useLayoutEffect, useState } from 'react';
const BottomNavigationApp = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [currentPath, setCurrentPath] = useState(pathname);
 
  useLayoutEffect(() => {
    setCurrentPath(currentPath);
  }, [pathname]);

  const handleChange = (_: React.SyntheticEvent, path: string) => {
    navigate(path);
    setCurrentPath(path);
  };
  return (
    <BottomNavigation
      sx={{
        width: '100vw',
        bgcolor: 'grey.50',
        position: 'fixed',
        bottom: 0,
        left: 0,
        height: '84px',
        transform: 'translateX(0)',
        zIndex: 999,
      }}
      value={pathname}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label='Trang chủ'
        value={APP_ROUTES.DASHBOARD}
        icon={
          <Box>
            <Icon width={24} icon={'ic:round-home'} />
          </Box>
        }
      />
      <BottomNavigationAction
        label='Nhóm '
        icon={
          <Box>
            <Icon width={24} icon={'typcn:group'} />
          </Box>
        }
        value={APP_ROUTES.GROUP_STUDENT.DETAIL}
      />
      <BottomNavigationAction
        label='Đề tài '
        icon={
          <Box>
            <Icon width={24} icon={'material-symbols:topic'} />
          </Box>
        }
        value={APP_ROUTES.TOPIC.STUDENT}
      />
      <BottomNavigationAction
        label='Cá nhân'
        icon={
          <Box>
            <Icon width={24} icon={'basil:user-outline'} />
          </Box>
        }
        value={APP_ROUTES.USER.PROFILE}
      />
    </BottomNavigation>
  );
};
export default React.memo(BottomNavigationApp);
