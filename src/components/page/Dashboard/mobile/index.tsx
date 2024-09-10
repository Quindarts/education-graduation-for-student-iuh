import useTermStore from '@/store/termStore';
import useUserStore from '@/store/userStore';
import { Box, Typography } from '@mui/material';

import React from 'react';
import Feature from './Feature';
import Schedule from './Schedule';

function DashBoardMobile() {
  const me = useUserStore((s) => s.me);
  const term = useTermStore((t) => t.term);
  return (
    <Box>
      <Box
        sx={{
          height: 108,
          padding: '25px',
          bgcolor: '#F3F5F8',
          position: 'relative',
          width: '100%',
        }}
      >
        <Box position={'absolute'} right={0} top={0} bottom={10}>
          <img height={'100%'} width={'100%'} src='/images/cut_logo.webp' />
        </Box>
        <Typography variant='h3' fontWeight={'800'} color='primary.dark'>
          Hi, {me.fullName}
        </Typography>
        <Typography variant='body1' mt={3} color='grey.600'>
          <Typography component={'span'} variant='body1' fontWeight={'bold'} color='grey.600'>
            Khóa luận
          </Typography>
          : {term.name}
        </Typography>
      </Box>
      <Feature />
      <Schedule />
    </Box>
  );
}

export default DashBoardMobile;
