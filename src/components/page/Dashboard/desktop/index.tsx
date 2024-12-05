import { Icon } from '@iconify/react';
import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import useUserStore from '@/store/userStore';
import { checkGender } from '@/utils/validations/person.validation';
import useGroupStudentStore from '@/store/groupStudentStore';
import useGroupStudent from '@/hook/api/useGroupStudent';
import { Link } from 'react-router-dom';
import ProfilePage from '@/page/Auth/Profile';
import EventManagement from './EventManagement';

function DashBoardDesktop() {
  const me = useUserStore((s) => s.me);
   
  const myGroupStudent = useGroupStudentStore((s) => s.groupDetails);
  return (
    <Box mx={0} my={2}>
      <Box display={'flex'} mb={10} gap={10}>
        <Paper elevation={0} sx={{ width: '70%', display: 'flex', gap: 10 }}>
          <Box
            px={10}
            py={10}
            display={'flex'}
            justifyContent={'space-between'}
            borderRadius={1}
            gap={10}
          >
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
              <Typography
                variant='h6'
                textTransform={'uppercase'}
                fontWeight={'600'}
                color='primary.main'
                mb={4}
              >
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
            <Box ml={60}>
              <Typography
                variant='h6'
                textTransform={'uppercase'}
                fontWeight={'600'}
                color='primary.main'
                mb={4}
              >
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
                  Trạng thái:
                </Typography>
                <Typography variant='body1' my={1} component={'i'} color='primary'>
                  {myGroupStudent?.topic_id ? 'Đã có đề tài' : 'Chưa có đề tài'}
                </Typography>
              </Box>{' '}
              <Box mt={2} display={'flex'} gap={3}>
                <Link style={{ color: 'red', fontSize: 12 }} to={`/group-students/detail`}>
                  Xem chi tiết
                </Link>
              </Box>{' '}
            </Box>
          </Box>
        </Paper>
        <Paper elevation={0} sx={{ width: '30%', display: 'flex', gap: 10 }}>
          <Box px={10} py={10} width={'100% '} borderRadius={1}>
            <Typography
              variant='h6'
              textTransform={'uppercase'}
              fontWeight={'600'}
              color='primary.main'
              mb={4}
            >
              Sự kiện trong tuần
            </Typography>
            <Box>
              <Box></Box>
              <Typography mt={4} variant='h6' color='grey.600' fontWeight={'500'} component='span'>
                Đang cập nhật sau.
              </Typography>
              <Typography
                sx={{ cursor: 'pointer', '&:hover': { color: 'error.dark' }, textAlign: 'end' }}
                mt={10}
                variant='body1'
                color='primary.dark'
                onClick={() => {}}
              >
                Xem chi tiết
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
      <Paper elevation={0}>
        <EventManagement />
      </Paper>
      {/* <Paper sx={{ mt: 10 }} elevation={1}>
        <ProfilePage />
      </Paper> */}
    </Box>
  );
}

export default DashBoardDesktop;
