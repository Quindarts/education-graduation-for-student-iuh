import TopicOfGroupSection from '@/components/page/Topic';
import CancelModal from '@/components/page/Topic/Modal/CancelModal';
import SekeletonUI from '@/components/ui/Sekeleton';
import useGroupStudent from '@/hook/api/useGroupStudent';
import { Icon } from '@iconify/react';
import { Box, Button, Paper } from '@mui/material';
import React, { useState } from 'react';

function MyTopicPage() {
  const { HandleGetMyGroupStudent } = useGroupStudent();
  const { data, isLoading, isFetching } = HandleGetMyGroupStudent();
  const [openModalCancel, setOpenModalCancel] = useState({ isOpen: false, groupId: '' });
  const handleOpenModalCancel = (groupId: string) => {
    setOpenModalCancel({ isOpen: true, groupId: groupId });
  };
  const handleCloseModalCancel = () => {
    setOpenModalCancel((pre: any) => ({ ...pre, isOpen: false }));
  };
  return (
    <Paper elevation={1}>
      {isLoading || isFetching ? (
        <SekeletonUI />
      ) : (
        <>
          <TopicOfGroupSection topicId={data?.group.info?.topic_id} />
          {data?.group.info?.topic_id && (
            <Box p={10} display={'flex'} justifyContent={'end'}>
              <Button
                onClick={() => handleOpenModalCancel(data?.group.info?.id)}
                size='large'
                sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}
                color='error'
                variant='contained'
              >
                <Icon width={24} style={{ marginRight: 10 }} icon='tabler:folder-cancel' />
                Hủy Đăng ký đề tài
              </Button>
            </Box>
          )}
        </>
      )}

      <CancelModal
        open={openModalCancel.isOpen}
        groupId={openModalCancel.groupId}
        onClose={handleCloseModalCancel}
      />
    </Paper>
  );
}

export default MyTopicPage;
