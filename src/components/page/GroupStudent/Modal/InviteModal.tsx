import Modal from '@/components/ui/Modal';
import useGroupStudent from '@/hook/api/useGroupStudent';
import { Icon } from '@iconify/react';
import { Box, Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
function InviteModal(props: any) {
  const { onClose, open, groupId, name } = props;
  const { OnInviteGroupStudent } = useGroupStudent();
  const { mutate: invite, isSuccess } = OnInviteGroupStudent(groupId);
  const handleSubmit = () => {
    invite(groupId);
  };
  useEffect(() => {
    onClose();
  }, [isSuccess]);
  return (
    <Modal onClose={onClose} open={open}>
      <Box
        width='100%'
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        px={10}
        py={12}
      >
        <Box borderRadius='50%' padding={6} sx={{ background: 'rgba(49, 255, 159, 0.2)' }}>
          <Icon color='#0F9B6CD4' height={70} width={70} icon='mdi:invite' />
        </Box>
        <Typography variant='h3' mt={10} mb={14}>
          Bạn muốn tham gia {name} ?
        </Typography>
        <Box width='100%' display='flex' gap={6} marginTop={1}>
          <Button onClick={onClose} sx={{ width: '50%' }} color='primary' variant='contained'>
            <Icon width={20} style={{ marginRight: 4 }} icon='mdi:cancel-outline' />
            Hủy
          </Button>
          <Button onClick={handleSubmit} sx={{ width: '50%' }} color='success' variant='contained'>
            <Icon width={20} style={{ marginRight: 4 }} icon='mdi:invite' />
            Tham gia ngay
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default InviteModal;
