import SekeletonUI from '@/components/ui/Sekeleton';
import { Box, Button, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import dayjs from 'dayjs';
import { Icon } from '@iconify/react';
import useNotification from '@/hook/api/useNotification';

function NotficationDetailPage() {
  const { pathname } = useLocation();
  const current = pathname.split('/');
  const notificationId = `${current[current.length - 1]}`;
  const { HandleDetailNotification, OnReadNotification } = useNotification();
  const { data, isLoading, isFetching, refetch } = HandleDetailNotification(notificationId);
  const { mutate: toggleRead, isSuccess } = OnReadNotification();
  const hanldeToggleRead = () => {
    toggleRead(notificationId);
  };
  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess]);
  return (
    <Paper elevation={1} sx={{ px: 10, py: 12 }}>
    {isLoading || isFetching ? (
      <SekeletonUI />
    ) : (
      <Box>
        {/* <TitleManager mb={6} variant='h4' textTransform={'uppercase'}>
          Chi tiết thông báo
        </TitleManager> */}
        <Typography variant='body1' color='grey.700'>
          Ngày gửi {dayjs(data?.createdAt).format('DD/MM/YYYY')}
        </Typography>

        <Typography mt={4} mb={10} variant='h3' color='grey.700' fontWeight={'bold'}>
          {data?.title}
        </Typography>
        <Box>
          <Typography
            mt={6}
            variant='h6'
            color='initial'
            fontFamily={'Arial, sans-serif'}
            dangerouslySetInnerHTML={{ __html: data?.content }}
          />
        </Box>
        <Box justifyContent={'end'} display={'flex'}>
          {data?.isRead === 1 ? (
            <Typography variant='h6' component={'i'} color='success.dark'>
              Đã xem
              <Icon width={12} style={{ marginLeft: 2 }} icon='subway:tick' />
            </Typography>
          ) : (
            <Button onClick={hanldeToggleRead} variant='contained' color='primary'>
              <Icon style={{ marginRight: 2 }} icon='subway:tick' />
              Đánh dấu là đã đọc
            </Button>
          )}
        </Box>
      </Box>
    )}
  </Paper>
  );
}

export default NotficationDetailPage;
