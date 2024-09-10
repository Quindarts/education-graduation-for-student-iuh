import Modal from '@/components/ui/Modal';
import useGroupStudent from '@/hook/api/useGroupStudent';
import { Icon } from '@iconify/react';
import { Box, Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
interface AssignAdminModalProps {
  onClose: () => void;
  open: boolean;
  groupId: string;
  studentId: string;
  studentName: string;
  refetch?: () => any;
}
function AssignAdminModal(props: AssignAdminModalProps) {
  const { onClose, open, groupId, refetch, studentId, studentName } = props;
  const { OnAssignAdminGroupStudent } = useGroupStudent();
  const { mutate: assignAdmin, isSuccess } = OnAssignAdminGroupStudent();
  const handleSubmit = () => {
    const data = { groupId, studentId };
    assignAdmin(data);
  };
  useEffect(() => {
    if (isSuccess) {
      onClose();
      refetch();
    }
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
        <Box borderRadius='50%' padding={6} sx={{ background: 'rgba(61, 113, 232, 0.2)' }}>
          <Icon color='#0F429BD4' height={70} width={70} icon='fluent-mdl2:party-leader' />
        </Box>
        <Typography textAlign={'center'} variant='h3' mt={10} mb={14}>
          Chọn {studentName} làm Trưởng nhóm ?
        </Typography>
        <Box width='100%' display='flex' gap={6} marginTop={1}>
          <Button onClick={onClose} sx={{ width: '50%' }} color='primary' variant='contained'>
            <Icon width={20} style={{ marginRight: 4 }} icon='mdi:cancel-outline' />
            Hủy
          </Button>
          <Button onClick={handleSubmit} sx={{ width: '50%' }} color='success' variant='contained'>
            <Icon width={20} style={{ marginRight: 4 }} icon='subway:tick' />
            Chấp nhận
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default AssignAdminModal;
