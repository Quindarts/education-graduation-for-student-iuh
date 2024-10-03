import { Icon } from '@iconify/react';
import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import useUserStore from '@/store/userStore';
import { checkGender } from '@/utils/validations/person.validation';
import useGroupStudentStore from '@/store/groupStudentStore';
import useGroupStudent from '@/hook/api/useGroupStudent';
import { Link } from 'react-router-dom';
import ProfilePage from '@/page/Auth/Profile';

function DashBoardDesktop() {
  const  me = useUserStore(s => s.me);
  const { HandleGetMyGroupStudent } = useGroupStudent();
  HandleGetMyGroupStudent();

  const myGroupStudent = useGroupStudentStore((s) => s.groupDetails);
  return (
    <Box mx={40} my={10}>
      <Box display={'flex'} gap={10}>
        <Paper elevation={1} sx={{ width: '100%', display: 'flex', gap: 10 }}>
          <Box px={10} py={10} width={'100% '} display={'flex'} borderRadius={1} gap={10}>
            <Box
              border={'10px solid #E7F5FF'}
              borderRadius={'50%'}
              width={100}
              height={100}
              bgcolor={'primary.dark'}
              p={10}
            >
              <Icon color='#fff' width={'100%'} icon='mdi:account-student' />
            </Box>
            <Box>
              <Typography variant='h4' fontWeight={'600'} mb={6} color='primary.main'>
                Thông tin sinh viên
              </Typography>
              <Box display={'flex'} gap={3}>
                <Typography variant='h5' fontWeight={400} my={1} color='dark'>
                  Họ và tên:
                </Typography>
                <Typography variant='h5' my={1} color='dark'>
                  {me?.fullName}
                </Typography>
              </Box>{' '}
              <Box display={'flex'} gap={3}>
                <Typography variant='h5' fontWeight={400} my={1} color='dark'>
                  Lớp danh nghĩa:{' '}
                </Typography>
                <Typography variant='h5' my={1} color='dark'>
                  {me?.clazzName}
                </Typography>
              </Box>{' '}
              <Box display={'flex'} gap={3}>
                <Typography variant='h5' fontWeight={400} my={1} color='dark'>
                  Giới tính:{' '}
                </Typography>
                <Typography variant='h5' my={1} color='dark'>
                  {checkGender(me?.gender)}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>

        <Paper elevation={1} sx={{ width: '100%', display: 'flex', gap: 10 }}>
          <Box px={10} py={10} width={'100% '} display={'flex'} borderRadius={1} gap={10}>
            <Box
              border={'10px solid #E7F5FF'}
              borderRadius={'50%'}
              width={100}
              height={100}
              bgcolor={'primary.dark'}
              p={10}
            >
              <Icon color='#fff' width={'100%'} icon='mingcute:group-2-fill' />
            </Box>
            <Box>
              <Typography variant='h4' fontWeight={'600'} mb={6} color='primary.main'>
                Nhóm sinh viên
              </Typography>
              <Box display={'flex'} gap={3}>
                <Typography variant='h5' fontWeight={400} my={1} color='dark'>
                  Mã nhóm:{' '}
                </Typography>
                <Typography variant='body1' my={1} component={'i'} color='primary'>
                  {myGroupStudent?.name ? myGroupStudent.name : 'Đang cập nhật'}
                </Typography>
              </Box>{' '}
              <Box display={'flex'} gap={3}>
                <Typography variant='h5' fontWeight={400} my={1} color='dark'>
                  Trạng thái đề tài:
                </Typography>
                <Typography variant='body1' my={1} component={'i'} color='primary'>
                  {myGroupStudent?.topic_id ? 'Đã có đề tài' : 'Chưa có đề tài'}
                </Typography>
              </Box>{' '}
              <Box display={'flex'} gap={3}>
                <Link style={{ color: '#0C4B93' }} to={`/group-students/detail`}>
                  Xem chi tiết
                </Link>
              </Box>{' '}
            </Box>
          </Box>
        </Paper>
      </Box>
      <Paper sx={{ mt: 10 }} elevation={1}>
        <ProfilePage />
      </Paper>
    </Box>
  );
}

export default DashBoardDesktop;
