import Modal from '@/components/ui/Modal';
import useGroupStudent from '@/hook/api/useGroupStudent';
import useTopic from '@/hook/api/useTopic';
import { Icon } from '@iconify/react';
import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

function ChooseModal(props: any) {
  const { onClose, open, topicId } = props;
  const { OnChooseTopic } = useTopic();
  const { HandleGetMyGroupStudent } = useGroupStudent();
  const { data, isFetching, isLoading } = HandleGetMyGroupStudent();
  const { mutate: choose } = OnChooseTopic();
  const [currentGr, setCurrentGr] = useState('');
  useEffect(() => {
    if (data !== null) {
      setCurrentGr(data?.group?.info?.id);
    }
  }, [data, isFetching, isLoading]);
  const handleSubmit = () => {
    choose({ groupStudentId: `${currentGr}`, topicId: `${topicId}` });
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
        <Box borderRadius='50%' padding={6} sx={{ background: 'rgba(49, 255, 159, 0.2)' }}>
          <Icon color='#0F9B6CD4' height={70} width={70} icon='fluent:book-add-20-filled' />
        </Box>
        <Typography variant='h3' textAlign={'center'} mt={10} mb={14}>
          Bạn có chắc chắn muốn đăng ký đề tài này?
        </Typography>
        <Box width='100%' display='flex' gap={6} marginTop={1}>
          <Button onClick={onClose} sx={{ width: '50%' }} color='primary' variant='contained'>
            <Icon width={20} style={{ marginRight: 4 }} icon='mdi:cancel-outline' />
            Hủy
          </Button>
          <Button
            onClick={() => handleSubmit()}
            sx={{ width: '50%' }}
            color='success'
            variant='contained'
          >
            <Icon width={20} style={{ marginRight: 4 }} icon='fluent:book-add-20-filled' />
            Đăng ký ngay
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default ChooseModal;
