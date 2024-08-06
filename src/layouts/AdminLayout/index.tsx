import Navbar from '@/components/shared/Navbar';
import Sidebar from '@/components/shared/Sidebar';
import GlobalLoading from '@/components/ui/Loading/GlobalLoading';
import useAuth from '@/hook/api/useAuth';
import useTerm from '@/hook/api/useTerm';
import useSidebarStore from '@/store/ui/sidebarStore';
import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

function AdminLayout() {
  const { isOpen } = useSidebarStore();

  const { HandleGetme } = useAuth();
  const { HandleGetCurrentTerm } = useTerm();

  const { me } = HandleGetme();
  HandleGetCurrentTerm(`${me?.user?.majorId}`);
  return (
    <>
      <Box
        display='flex'
        sx={{
          height: '100%',
          overflowX: 'hidden',
        }}
      >
        <Sidebar />
        <Box
          height='100%'
          component='section'
          sx={{
            maxWidth: isOpen ? `calc(100vw - 250px)` : `calc(100vw - 76px)`,
            width: '100%',
            minHeight: '100vh',
            marginLeft: isOpen ? '250px' : '76px',
            transition: 'all 0.1s ease',
            backgroundColor: 'grey.100',
          }}
        >
          <Navbar />
          <Box
            pt={12}
            pb={6}
            mx={8}
            mt={30}
            sx={{
              height: '100%',
            }}
          >
            <React.Suspense fallback={<GlobalLoading />}>
              <Outlet />
            </React.Suspense>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default AdminLayout;
