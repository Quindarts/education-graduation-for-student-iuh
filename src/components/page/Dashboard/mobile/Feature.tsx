import { APP_ROUTES } from '@/utils/app-config';
import { Icon } from '@iconify/react';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ICON_FEATURE = [
  {
    name: 'Chọn nhóm',
    icon: 'mdi:invite',
    link: APP_ROUTES.GROUP_STUDENT.MANAGEMENT,
    bg: '#316D86',
  },
  {
    name: 'Chọn đề tài',
    icon: 'mdi:folder-add',
    link: APP_ROUTES.TOPIC.MANAGEMENT,
    bg: '#08387F',
  },
  {
    name: 'Điểm số',
    icon: 'material-symbols:script',
    link: APP_ROUTES.SCORE_STUDENT.MANAGEMENT,
    bg: '#f49e0b',
  },
  {
    name: 'Xem tất cả',
    icon: 'material-symbols-light:border-all',
    link: '/',
    bg: '#33c85c',
  },
];
function Feature() {
  const navigate = useNavigate();
  return (
    <>
      {' '}
      <Typography
        paddingX={'25px'}
        fontWeight={'bold'}
        variant='h6'
        mt={'20px'}
        color='primary.dark'
      >
        Chức năng
      </Typography>
      <Box paddingX={'25px'} mt={'10px'} display={'flex'} gap={'22px'}>
        {ICON_FEATURE.map((item: any, key: number) => (
          <Box
            onClick={() => navigate(item.link)}
            key={key}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            flex={1}
          >
            <Box
              padding='12px'
              width={'48px'}
              height={'48px'}
              bgcolor={item.bg}
              borderRadius={'50%'}
            >
              <Icon width={24} style={{ color: 'white' }} icon={item.icon} />
            </Box>
            <Typography mt={2} variant='body2' color={'#64748B'}>
              {' '}
              {item.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default Feature;
