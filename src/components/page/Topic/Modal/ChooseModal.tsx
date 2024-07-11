import Modal from '@/components/ui/Modal';
import { Icon } from '@iconify/react';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';

function ChooseModal(props) {
  const { onClose, open, topicId } = props;

  const handleSubmit = () => {};
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
          <Icon color='#0F9B6CD4' height={70} width={70} icon='fluent:book-add-20-filled' />
        </Box>
        <Typography variant='h3' mt={10} mb={14}>
          Bạn có chắc chắn muốn đăng ký đề tài này?
        </Typography>
        <Box width='100%' display='flex' gap={6} marginTop={1}>
          <Button onClick={onClose} sx={{ width: '50%' }} color='primary' variant='contained'>
            <Icon width={20} style={{ marginRight: 4 }} icon='mdi:cancel-outline' />
            Hủy
          </Button>
          <Button onClick={handleSubmit} sx={{ width: '50%' }} color='success' variant='contained'>
            <Icon width={20} style={{ marginRight: 4 }} icon='fluent:book-add-20-filled' />
            Đăng ký ngay
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default ChooseModal;
