import CustomTextField from '@/components/ui/CustomTextField';
import Modal from '@/components/ui/Modal';
import SekeletonTable from '@/components/ui/Sekeleton';
import { Icon } from '@iconify/react';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import TableEventManagement from './Table';
import TitleManager from '@/components/ui/Title';
import useEvent from '@/hook/api/useEvent';

function AllEventModal(props) {
  const { onClose, open } = props;
  const { HandleGetEvents } = useEvent();
  const { events, isLoading: loadEvent } = HandleGetEvents();
  return (
    <Modal maxWidth='xl' onClose={onClose} open={open}>
      <Box sx={{ px: 10 }}>
        <TitleManager mb={10} textTransform={'uppercase'} icon='fluent-color:calendar-clock-24'>
          Danh sách tất cả sự kiện
        </TitleManager>
        {loadEvent ? (
          <>
            <SekeletonTable />
          </>
        ) : (
          <>
            <TableEventManagement totalItems={events?.length} rows={events} />
          </>
        )}
      </Box>
    </Modal>
  );
}

export default AllEventModal;
