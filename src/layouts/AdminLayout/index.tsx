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
            maxWidth: '100vw',
            width: '100%',
            minHeight: '100vh',
          }}
        >
          <Box
            pt={12}
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
      </Box>
    </>
  );
}

export default AdminLayout;
