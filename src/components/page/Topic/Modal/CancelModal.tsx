import Modal from '@/components/ui/Modal';
import useTopic from '@/hook/api/useTopic';
import { Icon } from '@iconify/react';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';

function CancelModal(props: any) {
  const { onClose, open, groupId } = props;
  const { OnCancelTopic } = useTopic();
  const { mutate: cancel } = OnCancelTopic();
  const handleSubmit = () => {
    cancel(groupId);
    onClose();
  };
  return (
    <Modal onClose={onClose} open={open}>
      <Box
        width='100%'
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        px={'10px'}
        py={12}
      >
        <Box borderRadius='50%' padding={6} sx={{ background: 'rgba(255, 49, 49, 0.2)' }}>
          <Icon color='#9B0F0FD4' height={70} width={70} icon='healthicons:refused' />
        </Box>
        <Typography variant='h3' mt={10} mb={14}>
          Hủy đăng ký đề tài này ?
        </Typography>
        <Box width='100%' display='flex' gap={6} marginTop={1}>
          <Button onClick={onClose} sx={{ width: '50%' }} color='primary' variant='contained'>
            <Icon width={20} style={{ marginRight: 4 }} icon='mdi:cancel-outline' />
            Thoát
          </Button>
          <Button onClick={handleSubmit} sx={{ width: '50%' }} color='error' variant='contained'>
            <Icon width={20} style={{ marginRight: 4 }} icon='healthicons:refused' />
            Hủy
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default CancelModal;
