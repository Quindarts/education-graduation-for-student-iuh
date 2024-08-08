import { Icon } from '@iconify/react';
import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import useUserStore from '@/store/userStore';
import { checkGender } from '@/utils/validations/person.validation';
import ProfilePage from '../Auth/Profile';
function DashboardTemplate() {
  const { me } = useUserStore();

  return (
    <Box mx={40} my={10}>
      <Box display={'flex'} gap={10}>
        <Paper elevation={1} sx={{ width: "100%", display: 'flex', gap: 10 }}>
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
              <Typography
                variant='h5'
                fontWeight={600}
                textTransform={'uppercase'}
                mb={6}
                color='dark'
              >
                Thông tin Cá nhân
              </Typography>
              <Box display={'flex'} gap={3}>
                <Typography variant='h5' fontWeight={600} my={1} color='dark'>
                  Họ và tên:
                </Typography>
                <Typography variant='h5' my={1} color='dark'>
                  {me?.fullName}
                </Typography>
              </Box>{' '}
              <Box display={'flex'} gap={3}>
                <Typography variant='h5' fontWeight={600} my={1} color='dark'>
                  Lớp học phần:{' '}
                </Typography>
                <Typography variant='h5' my={1} color='dark'>
                  {me?.clazzName}
                </Typography>
              </Box>{' '}
              <Box display={'flex'} gap={3}>
                <Typography variant='h5' fontWeight={600} my={1} color='dark'>
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
              <Typography
                variant='h5'
                fontWeight={600}
                textTransform={'uppercase'}
                mb={6}
                color='dark'
              >
                Thông tin Nhóm Đề tài
              </Typography>
              <Box display={'flex'} gap={3}>
                <Typography variant='h5' fontWeight={600} my={1} color='dark'>
                  Tên đề tài:{' '}
                </Typography>
                <Typography variant='body1' my={1} component={'i'} color='primary'>
                  Đang cập nhật
                </Typography>
              </Box>{' '}
              <Box display={'flex'} gap={3}>
                <Typography variant='h5' fontWeight={600} my={1} color='dark'>
                  Giảng viên hướng dẫn:
                </Typography>
                <Typography variant='body1' my={1} component={'i'} color='primary'>
                  Đang cập nhật
                </Typography>
              </Box>{' '}
              <Box display={'flex'} gap={3}>
                <Typography variant='h5' fontWeight={600} my={1} color='dark'>
                  Số lượng thành viên
                </Typography>
                <Typography variant='body1' my={1} component={'i'} color='primary'>
                  Đang cập nhật
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
      <Paper sx={{ mt: 10 }} elevation={1}>
        <ProfilePage />
        {/* <TitleManager icon='material-symbols:edit-note'>Thông báo mới</TitleManager>
        <Box
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          display={'flex'}
          py={10}
        >
          <Box>
            <img style={{ opacity: 0.7 }} width={200} height={200} src={nodataImg} alt='nodata' />
          </Box>
          <Typography variant='h3' sx={{ mt: 2 }}>
            chưa có thông báo mới
          </Typography>
        </Box> */}
      </Paper>
    </Box>
  );
}

export default DashboardTemplate;
