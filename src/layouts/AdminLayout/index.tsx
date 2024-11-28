import Navbar from '@/components/shared/Navbar';
import Sidebar from '@/components/shared/Sidebar';
import GlobalLoading from '@/components/ui/Loading/GlobalLoading';
import useAuth from '@/hook/api/useAuth';
import useTerm from '@/hook/api/useTerm';
import useSidebarStore from '@/store/ui/sidebarStore';
import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useMobile } from '@/hook/ui/useMobile';
import BottomNavigationApp from '@/components/shared/BottomNavigation';
import useGroupStudent from '@/hook/api/useGroupStudent';
import ControlledOpenSpeedDial from '@/components/ui/SpeedDial';
// import PageWrapper from '@/components/ui/PaperWrapper';

const DesktopUI = ({ isOpen }) => {
  return (
    <Box
      display='flex'
      sx={{
        height: '100%',
        overflowX: 'hidden',
        backgroundColor: 'background.default',
      }}
    >
      <Sidebar />
      <Box
        height='100%'
        component='section'
        sx={{
          maxWidth: '100vw',
          width: '100%',
          minHeight: '100vh',
        }}
      >
        <Box
          pt={20}
          px={10}
          pb={6}
          mt={20}
          sx={{
            height: '100%',
            width: 'auto',
            transition: 'all 0.2s ease-in',
            marginLeft: isOpen ? '270px' : '90px',
            marginRight: 10,
          }}
        >
          <Navbar />
          <React.Suspense fallback={<GlobalLoading />}>
            <Outlet />
          </React.Suspense>
        </Box>
      </Box>
      <ControlledOpenSpeedDial />
    </Box>
  );
};

function AdminLayout() {
  const { isOpen } = useSidebarStore();

  const { HandleGetme } = useAuth();
  const { HandleGetCurrentTerm } = useTerm();
  const { HandleGetMyGroupStudent } = useGroupStudent();
  const { data } = HandleGetMyGroupStudent();
  const { me } = HandleGetme();
  HandleGetCurrentTerm(`${me?.user?.majorId}`);
  const { isMobile } = useMobile();

  return (
    <Box>
      {isMobile ? (
        <Box
          sx={{
            maxWidth: '100vw',
          }}
        >
          {/* <PageWrapper> */}
          <React.Suspense fallback={<GlobalLoading />}>
            <Outlet />
          </React.Suspense>
          {/* </PageWrapper> */}
          <Box mt={50}>
            <BottomNavigationApp />
          </Box>
        </Box>
      ) : (
        <>
          <DesktopUI isOpen={isOpen} />
        </>
      )}
    </Box>
  );
}

export default AdminLayout;
