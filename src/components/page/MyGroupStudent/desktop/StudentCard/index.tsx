import AssignAdminModal from '@/components/page/GroupStudent/Modal/AssignAdminModal';
import RemoveMemberGroupModal from '@/components/page/GroupStudent/RemoveMemberModal';
import useTermStore from '@/store/termStore';
import { checkGender } from '@/utils/validations/person.validation';
import { ENUM_STATUS_OF_DATE_TERM } from '@/utils/validations/term.validation';
import { Icon } from '@iconify/react';
import { Box, Card, CardContent, Typography, Button, CardActions } from '@mui/material';
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
          backgroundColor: '#fff',
          marginTop: 4,
          px: 10,
          py: 4,
          transition: 'transform 0.3s, box-shadow 0.3s',
          borderRadius: 3,
          border: '1px solid #cfcece',
        }}
        elevation={0}
      >
        <CardContent sx={{ px: 10, display: 'flex', gap: 10 }}>
          <img
            width={100}
            height={100}
            style={{
              filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))',
            }}
            src='/images/graduate.png'
          />

          <Box>
            {isAdmin && (
              <>
                <Typography variant='h6' fontWeight={'600'} color='#faa931'>
                  Trưởng Nhóm
                </Typography>
              </>
            )}
            <Typography
              sx={{ fontSize: 20, fontWeight: '500', color: 'primary.dark  ' }}
              gutterBottom
            >
              Thành viên {index}: {name}
            </Typography>
            <Box sx={{ display: 'flex', gap: 10, width: '100%' }}>
              <Box>
                <Typography sx={{ fontSize: 16, marginBottom: 1 }}>
                  Mã số sinh viên: {mssv}
                </Typography>
                <Typography variant='h6' component='p'>
                  Email liên hệ: {email ? email : 'Đang cập nhật'}
                </Typography>
              </Box>
              <Box>
                <Typography variant='h6' component='p'>
                  Số điện thoại: {phone ? phone : 'Đang cập nhật'}
                </Typography>
                <Typography variant='h6' component='p'>
                  Giới tính: {checkGender(gender)}
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
        {!isMe && !isAdmin && (
          <Box justifyContent={'end'} display={'flex'} height={40} gap={4}>
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
          </Box>
        )}
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
