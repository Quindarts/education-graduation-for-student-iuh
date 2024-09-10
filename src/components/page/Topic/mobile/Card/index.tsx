import { Icon } from '@iconify/react';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';

function CardTopic({ lecturerName, name, topicId }: any) {
  return (
    <>
      <Box
        id={topicId}
        my={6}
        p={4}
        display={'flex'}
        gap={5}
        sx={{
          borderRadius: 4,
          border: '1px solid #eae8e8',
          '&:hover': {
            transition: '0.4s ease-in',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px;',
          },
        }}
      >
        <Box
          width={50}
          height={50}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          bgcolor={'grey.200'}
          borderRadius={4}
        >
          <Icon width={30} icon='emojione:books' />
        </Box>
        <Box>
          <Typography fontSize={14} fontWeight={600} color='#14142A'>
            {name}
          </Typography>
          <Typography variant='body1' color='text.warning'>
            GV hướng dẫn :{lecturerName} /2
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default CardTopic;
