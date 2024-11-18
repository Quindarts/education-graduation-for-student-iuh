import { Box, Button, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import TitleManager from '@/components/ui/Title';
import { Icon } from '@iconify/react';

function Header() {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <TitleManager
          variant='h5'
          icon='fluent-color:calendar-clock-24'
          fontWeight={'bold'}
          textTransform={'uppercase'}
          mb={4}
        >
          Quản lý sự kiện
        </TitleManager>
      </Box>
    </>
  );
}

export default Header;
