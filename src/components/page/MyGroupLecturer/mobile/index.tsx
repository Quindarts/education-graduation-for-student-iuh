import useGroupStudent from '@/hook/api/useGroupStudent';
import useUserStore from '@/store/userStore';
import { Icon } from '@iconify/react';
import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AssignAdminModal from '../../GroupStudent/Modal/AssignAdminModal';
import RemoveMemberGroupModal from '../../GroupStudent/RemoveMemberModal';
import ExitGroupModal from '../../GroupStudent/Modal/ExitGroupModal';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import useTermStore from '@/store/termStore';
import { ENUM_STATUS_OF_DATE_TERM } from '@/utils/validations/term.validation';

function MyGroupLecturerMobile() {
  const { HandleGetMyGroupStudent } = useGroupStudent();
  const { data, refetch } = HandleGetMyGroupStudent();
  const [openLeaveModal, setOpenEditLeaveModal] = useState({ groupId: '', isOpen: false });
  const handleCloseLeaveModal = () => {
    setOpenEditLeaveModal({ ...openLeaveModal, isOpen: false });
  };
  const handleOpenLeaveModal = (groupId: string) => {
    setOpenEditLeaveModal({ groupId, isOpen: true });
  };
  const [openAssignAdmin, setOpenAssignAdmin] = useState({
    studentId: '',
    fullName: '',
    isOpen: false,
  });
  const handleOpenAssignAdmin = (studentId: string, fullName: string) => {
    setOpenAssignAdmin((pre) => ({ ...pre, studentId, fullName, isOpen: true }));
  };
  const handleCloseAssignAdmin = () => {
    setOpenAssignAdmin((pre) => ({ ...pre, isOpen: false }));
  };

  const [openRemoveMember, setOpenRemoveMember] = useState({
    studentId: '',
    fullName: '',
    isOpen: false,
  });
  const handleCloseRemoveMember = () => {
    setOpenRemoveMember((pre) => ({ ...pre, isOpen: false }));
  };
  const handleOpenRemoveMember = (studentId: string, fullName: string) => {
    setOpenRemoveMember({ isOpen: true, studentId, fullName });
  };
  const { me } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    refetch();
  }, []);

  const { partOfTerm } = useTermStore();

  return (
    <>
      {!data ? (
        <Box>
          <Box px={'25px'}>
            <Typography mt={10} variant='h6' fontWeight={'700'} color='#0D0140'>
              Nhóm của tôi
            </Typography>
            <Box
              flexDirection={'column'}
              height={'70vh'}
              alignItems={'center'}
              justifyContent={'center'}
              display={'flex'}
            >
              <DotLottieReact
                style={{
                  width: '300px',
                  height: '300px',
                }}
                src='https://lottie.host/d5ee136a-961a-4bc7-bfa6-709dcb8e1038/WNAl4pFATV.json'
                loop
                autoplay
              />
              <Typography
                sx={{
                  position: 'relative',
                  top: -10,
                }}
                variant='h6'
                textAlign={'center'}
                fontWeight={'500'}
                color='grey.600'
              >
                Bạn chưa thuộc nhóm sinh viên nào
              </Typography>
              <Button variant='contained' onClick={() => navigate('/group-students')}>
                Đăng ký nhóm{' '}
              </Button>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box>
          {/***Back */}
          <Box
            justifyContent={'start'}
            alignItems={'center'}
            gap={2}
            onClick={() => navigate('/group-students')}
            display={'flex'}
            height={30}
            bgcolor={'grey.100'}
            px={'10px'}
            py={6}
            mb={10}
            sx={{
              '&:hover': {
                bgcolor: 'grey.200',
                color: 'primary.dark',
                transition: '0.3s ease-in',
              },
            }}
          >
            <Icon width={24} style={{ color: '#0D0140' }} icon='ion:chevron-back' />
            <Typography variant='h6' fontWeight={'500'} color='primary.dark'>
              Quay lại
            </Typography>
          </Box>
          <Box px={'25px'}>
            <Box position={'relative'} display={'flex'} height={100}>
              <Box
                zIndex={2}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                bgcolor={'#C4C4C4'}
                borderRadius={'10px'}
                height={80}
                width={90}
              >
                <Icon
                  style={{ color: '#ffff' }}
                  width={60}
                  height={60}
                  icon={'streamline:user-multiple-group-solid'}
                />
              </Box>
              <Box>
                <Typography variant='h6' ml={5} fontWeight={'700'} color='#0D0140'>
                  Nhóm của tôi - {data?.group.info.name}
                </Typography>
                <Box
                  position={'fixed'}
                  left={0}
                  right={0}
                  bgcolor={'#F2F2F2'}
                  height={70.7}
                  width={'100vw'}
                >
                  <Box py={4} ml={63}>
                    <Typography variant='body1' fontWeight={500} color='#323232'>
                      Số thành viên: {data?.group.members?.length}
                    </Typography>
                    <Typography variant='body1' fontWeight={500} color='#323232'>
                      Trạng thái: {data?.group.members?.length === 2 ? 'đã đủ' : 'còn slot'}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box px={'25px'} display={'flex'} gap={10} width={'100%'} mt={5}>
            <Button
              onClick={() => handleOpenLeaveModal(data.groupId)}
              sx={{
                bgcolor: '#ffe6e6',
                color: '#FC4646',
                height: 40,
                flex: 1,
                fontSize: 12,
                borderRadius: '10px',
              }}
              disabled={partOfTerm.ChooseGroup?.status !== ENUM_STATUS_OF_DATE_TERM.ACTIVE}
            >
              {' '}
              Rời nhóm
            </Button>
            <Button
              onClick={() => navigate('/topics/my-topic')}
              sx={{
                bgcolor: '#d0d9e8',
                color: 'primary.dark',
                height: 40,
                fontSize: 12,
                flex: 1,
                borderRadius: '10px',
              }}
            >
              Xem đề tài
            </Button>
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            gap={10}
            px={'25px'}
            py={'12px'}
            borderRadius={10}
            mt={5}
            bgcolor={'white'}
          >
            {/**Card */}
            {data?.group?.members.map((mem: any, index: number) => (
              <Box
                key={index}
                sx={{
                  border: mem.student_id === me.id ? '1px solid #f4ead9' : '1px solid #e7e7e7',
                  borderRadius: 4,
                  bgcolor: mem.student_id === me.id ? '#faf7f4' : '',
                  px: 2,
                  py: 4,
                }}
                display={'flex'}
                gap={4}
              >
                <Box>
                  <Icon height={60} width={60} icon='fluent-emoji:student-light' />
                </Box>
                <Box>
                  <Typography
                    variant='body1'
                    fontWeight={'bold'}
                    color={mem.student_id === me.id ? 'orange' : '#150B3D'}
                  >
                    Thành viên : {mem.student.fullName} {mem.student_id === me.id && '(Tôi)'}
                  </Typography>
                  {mem.isAdmin && (
                    <Typography ml={2} variant='body2' fontWeight={'bold'} color='#0C50B5'>
                      Vai trò: Trưởng nhóm (Admin)
                    </Typography>
                  )}
                  <Typography ml={2} variant='body2' color='#150B3D'>
                    Mã số sinh viên: {mem.student.username}
                  </Typography>
                  {!mem.isAdmin && me.id !== mem.student_id ? (
                    <Box mt={2} width={'100%'} display={'flex'} flexDirection={'column'} gap={1}>
                      <Button
                        sx={{
                          height: 30,
                          bgcolor: '#f5fff6',
                          color: '#2ecc5e',
                          borderRadius: 8,
                          width: '100%',
                        }}
                        onClick={() => handleOpenAssignAdmin(mem.student_id, mem.student.fullName)}
                      >
                        Phân làm trưởng nhóm
                      </Button>
                      <Button
                        onClick={() => handleOpenRemoveMember(mem.student_id, mem.student.fullName)}
                        sx={{
                          height: 30,
                          bgcolor: '#fff8f5',
                          color: '#cc602e',
                          borderRadius: 8,
                          width: '100%',
                        }}
                      >
                        Xóa khỏi nhóm
                      </Button>
                    </Box>
                  ) : (
                    <></>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}
      <AssignAdminModal
        groupId={data?.group.info.id}
        studentId={openAssignAdmin.studentId}
        studentName={openAssignAdmin.fullName}
        open={openAssignAdmin.isOpen}
        onClose={handleCloseAssignAdmin}
        refetch={refetch}
      />
      <RemoveMemberGroupModal
        groupId={data?.group.info.id}
        studentId={openRemoveMember.studentId}
        studentName={openRemoveMember.fullName}
        open={openRemoveMember.isOpen}
        onClose={handleCloseRemoveMember}
        refetch={refetch}
      />
      <ExitGroupModal
        open={openLeaveModal.isOpen}
        groupId={data?.group.info.id}
        onClose={handleCloseLeaveModal}
        refetch={refetch}
      />
    </>
  );
}

export default MyGroupLecturerMobile;
