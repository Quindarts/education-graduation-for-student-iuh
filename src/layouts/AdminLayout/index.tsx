import Navbar from '@/components/shared/Navbar';
import Sidebar from '@/components/shared/Sidebar';
import { Box } from '@mui/material';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

function AdminLayout() {
  const [isOpenSideBar, setIsOpenSideBar] = useState(true);
  const handleOpenSideBar = () => {
    setIsOpenSideBar(!isOpenSideBar);
  };
  return (
    <>
      {/* {isLoading ? (
        <Loading />
      ) : ( */}
      <Box
        display='flex'
        sx={{
          height: '100%',
          overflowX: 'hidden',
        }}
      >
        <Sidebar isOpenSideBar={isOpenSideBar} handleOpenSideBar={handleOpenSideBar} />
        <Box
          height='100%'
          component='section'
          sx={{
            maxWidth: isOpenSideBar ? `calc(100vw - 250px)` : `calc(100vw - 76px)`,
            width: '100%',
            minHeight: '100vh',
            marginLeft: isOpenSideBar ? '250px' : '76px',
            transition: 'all 0.1s ease',
            backgroundColor: 'grey.100',
          }}
        >
          <Navbar isOpenSideBar={isOpenSideBar} handleOpenSideBar={handleOpenSideBar} />
          <Box
            pt={12}
            pb={6}
            mx={8}
            mt={30}
            sx={{
              height: '100%',
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
      {/* )} */}
    </>
  );
}

export default React.memo(AdminLayout);
