import { Box } from '@mui/material';
import React, { useState } from 'react';
import CardGroupStudent from './Card';

function GridGroupStudent({ groupStudents }: any) {
  return (
    <Box display={'flex'} gap={4} flexWrap='wrap' width={'100%'}>
      {groupStudents?.map((gr: any) => (
        <CardGroupStudent numOfMembers={gr.numOfMembers} name={gr.name} groupId={gr.id} />
      ))}
    </Box>
  );
}

export default GridGroupStudent;
