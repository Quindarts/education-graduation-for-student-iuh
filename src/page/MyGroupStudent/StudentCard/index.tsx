import AssignAdminModal from '@/components/page/GroupStudent/Modal/AssignAdminModal';
import RemoveMemberGroupModal from '@/components/page/GroupStudent/RemoveMemberModal';
import useTermStore from '@/store/termStore';
import { checkGender } from '@/utils/validations/person.validation';
import { ENUM_STATUS_OF_DATE_TERM } from '@/utils/validations/term.validation';
import { Icon } from '@iconify/react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import React, { useState } from 'react';

function StudentCard({
  name,
  mssv,
  email,
  studentId,
  groupId,
  phone,
  gender,
  isMe,
  isAdmin,
  index,
}: any) {
  const [openAssignAdmin, setOpenAssignAdmin] = useState(false);
  const handleCloseAssignAdmin = () => {
    setOpenAssignAdmin(false);
  };
  const handleOpenAssignAdmin = () => {
    setOpenAssignAdmin(true);
  };

  const [openRemoveMember, setOpenRemoveMember] = useState(false);
  const handleCloseRemoveMember = () => {
    setOpenRemoveMember(false);
  };
  const handleOpenRemoveMember = () => {
    setOpenRemoveMember(true);
  };
  const { partOfTerm } = useTermStore();
  return (
    <>
      <Card
        sx={{
          width: '100%',
          maxWidth: 'calc(100% - 16px)',
          backgroundColor: '#fff',
          border: '2px solid #e4f1fe',
          color: 'primary.dark',
          margin: 'auto',
          marginTop: 4,
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'scale(1.01)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
          },
        }}
      >
        <CardContent sx={{ px: 10, py: 2 }}>
          <Typography sx={{ fontSize: 20, fontWeight: 'bold', color: 'primary.dark' }} gutterBottom>
            Sinh viên {index}: {name}
            {isAdmin && (
              <>
                <Typography variant='h6' fontWeight={'bold'} color='error.main'>
                  Vai trò: Trưởng Nhóm
                </Typography>
              </>
            )}
          </Typography>
          <Box sx={{ display: 'flex', gap: 10 }}>
            <Box width={'300px'}>
              <Typography sx={{ fontSize: 16, marginBottom: 1, color: 'primary.dark' }}>
                Mã số sinh viên: {mssv}
              </Typography>
              <Typography variant='h6' component='p'>
                Email liên hệ: {email ? email : 'Đang cập nhật'}
              </Typography>
            </Box>
            <Box width={'200px'}>
              <Typography variant='h6' component='p'>
                Số điện thoại: {phone}
              </Typography>
              <Typography variant='h6' component='p'>
                Giới tính: {checkGender(gender)}
              </Typography>
            </Box>
          </Box>
          <Box justifyContent={'end'} display={'flex'} gap={4}>
            {!isMe && !isAdmin && (
              <>
                <Button
                  disabled={partOfTerm.ChooseGroup?.status !== ENUM_STATUS_OF_DATE_TERM.ACTIVE}
                  onClick={handleOpenAssignAdmin}
                  variant='contained'
                  color='success'
                >
                  <Icon icon='clarity:assign-user-solid' />
                  Chọn làm trưởng nhóm
                </Button>
                <Button
                  onClick={() => handleOpenRemoveMember()}
                  variant='contained'
                  color='error'
                  disabled={partOfTerm.ChooseGroup?.status !== ENUM_STATUS_OF_DATE_TERM.ACTIVE}
                >
                  <Icon icon='line-md:remove' />
                  Xóa khỏi nhóm
                </Button>
              </>
            )}
          </Box>
        </CardContent>
      </Card>

      <AssignAdminModal
        groupId={groupId}
        studentId={studentId}
        studentName={name}
        open={openAssignAdmin}
        onClose={handleCloseAssignAdmin}
      />
      <RemoveMemberGroupModal
        groupId={groupId}
        studentId={studentId}
        studentName={name}
        open={openRemoveMember}
        onClose={handleCloseRemoveMember}
      />
    </>
  );
}

export default StudentCard;
