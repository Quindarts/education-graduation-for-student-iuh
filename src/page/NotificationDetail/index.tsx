import SekeletonUI from '@/components/ui/Sekeleton';
import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import dayjs from 'dayjs';
import { Icon } from '@iconify/react';
import useNotification from '@/hook/api/useNotification';

function NotficationDetailPage() {
  const { pathname } = useLocation();
  const current = pathname.split('/');
  const notificationId = `${current[current.length - 1]}`;
  const { HandleDetailNotification, OnReadNotification } = useNotification();
  const { data, isLoading, isFetching } = HandleDetailNotification(notificationId);
  const { mutate: toggleRead } = OnReadNotification();
  const hanldeToggleRead = () => {
    toggleRead(notificationId);
  };
  return (
    <Paper elevation={1} sx={{ px: 10, py: 6 }}>
      {isLoading || isFetching ? (
        <SekeletonUI />
      ) : (
        <Box>
          {/* <TitleManager mb={6} variant='h4' textTransform={'uppercase'}>
            Chi tiết thông báo
          </TitleManager> */}
          <Typography variant='body1' component={'i'} color='grey.700'>
            Ngày {dayjs(data?.created_at).format('DD/MM/YYYY hh:ss')}
          </Typography>

          <Typography
            mt={4}
            mb={5}
            variant='h3'
            color='primary.dark'
            fontFamily={'Arial, sans-serif'}
            dangerouslySetInnerHTML={{ __html: data?.message.split('<br/>')[0] }}
          />
          <Box>
            <Typography
              mt={6}
              variant='h6'
              color='initial'
              fontFamily={'Arial, sans-serif'}
              dangerouslySetInnerHTML={{ __html: data?.message.split('<br/>')[1] }}
            />
            <Typography
              mt={6}
              variant='h6'
              color='initial'
              fontFamily={'Arial, sans-serif'}
              dangerouslySetInnerHTML={{ __html: data?.message.split('<br/>')[2] }}
            />
          </Box>
          <Box justifyContent={'end'} display={'flex'}>
            {data?.isRead ? (
              <Typography variant='h6' component={'i'} color='success.dark'>
                Đã xem
                <Icon width={12} style={{ marginLeft: 2 }} icon='subway:tick' />
              </Typography>
            ) : (
              <Button onClick={hanldeToggleRead} variant='contained' color='success'>
                <Icon icon='subway:tick' />
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
