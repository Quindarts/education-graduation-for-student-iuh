import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';
import { Icon } from '@iconify/react';
import dayjs from 'dayjs';
import CardFile from '@/components/ui/CardFile';
import useUploadFile from '@/hook/ui/useUpload';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { env } from '@/utils/env';
import useEvent from '@/hook/api/useEvent';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: '100%',
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: '100%',
});

function EventDetailDesktop() {
  const { HandleGetEvents } = useEvent();
  const { events, isLoading, isFetching } = HandleGetEvents();
  const [event, setEvent] = useState<any>();
  const { event_id } = useParams();

  useEffect(() => {
    events?.find((e) => e.id === event_id) && setEvent(events?.find((e) => e.id === event_id));
  }, [isLoading, event_id, isFetching, events]);
  const {
    importFileToForm,
    setCurrentFile,
    submitEvent,
    currentFile,
    fileName,
    valueLoading,
    totalSize,
  } = useUploadFile();

  const onClearFormFile = () => {
    setCurrentFile(undefined);
  };
  const onPreviewSubmit = () => {
    const fullUrl = `${env.API_URL}${event?.link}`;
    window.open(fullUrl, '_blank');
  };
  return (
    <Paper
      sx={{
        padding: '20px 30px',
        minHeight: '70vh',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box mb={20}>
        <Typography variant='h3' fontWeight='bold' color='primary.main'>
          <Box
            px={6}
            mr={6}
            borderRadius={2}
            py={4}
            component={'span'}
            bgcolor={'grey.200'}
            display='inline-flex'
          >
            <Icon icon='noto:books' width={24} />
          </Box>{' '}
          {event?.name}
        </Typography>
      </Box>

      <Table
        sx={{
          '& .MuiTableCell-root': {
            fontSize: '16px',
            padding: '12px',
          },
          marginBottom: '20px',
        }}
      >
        <TableBody>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Định dạng file đính kèm</TableCell>
            <TableCell>Zip hoặc pdf </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Ngày bắt đầu</TableCell>
            <TableCell>{dayjs(event?.startDate).format('DD/MM/YYYY HH:mm A')}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Ngày kết thúc</TableCell>
            <TableCell>{dayjs(event?.endDate).format('DD/MM/YYYY HH:mm A')}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Phản hồi từ giảng viên</TableCell>
            <TableCell>
              <Button
                sx={{
                  padding: '2px 8px',
                  textTransform: 'none',
                  color: 'grey.600',
                }}
                variant='text'
                startIcon={<Icon icon='mdi:comment-outline' />}
              >
                {event?.comment ? event?.comment : 'Chưa có phản hồi'}
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Trạng thái</TableCell>
            <TableCell>
              {event?.link !== null ? (
                <Button
                  sx={{
                    padding: '2px 8px',
                    textTransform: 'none',
                    fontWeight: 'bold',
                  }}
                  onClick={() => onPreviewSubmit()}
                  color='success'
                  variant='text'
                  startIcon={<Icon icon='carbon:data-view-alt' />}
                >
                  Đã nộp. Xem chi tiết
                </Button>
              ) : (
                <Button
                  sx={{
                    padding: '2px 8px',
                    textTransform: 'none',
                  }}
                  variant='text'
                  color='error'
                  startIcon={<Icon icon='hugeicons:file-not-found' />}
                >
                  Chưa nộp
                </Button>
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>
              File tải lên
              {currentFile && (
                <Button color='error' onClick={onClearFormFile}>
                  Xóa file ?
                </Button>
              )}
            </TableCell>
            <TableCell>
              {!currentFile ? (
                <Typography>
                  <Button
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      py: 10,
                    }}
                    disabled={dayjs() > dayjs(event?.endDate)}
                    component='label'
                  >
                    Cập nhật file mới
                    <VisuallyHiddenInput type='file' onChange={(e) => importFileToForm(e)} />
                  </Button>
                </Typography>
              ) : (
                <CardFile fileName={fileName} totalSize={totalSize} valueLoading={valueLoading} />
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mt: 3,
        }}
      >
        <Button
          sx={{
            padding: '10px 20px',
            textTransform: 'none',
            borderRadius: 2,
            fontSize: '16px',
          }}
          size='large'
          color={event?.link ? 'warning' : 'primary'}
          variant='contained'
          disabled={currentFile === undefined}
          onClick={() => submitEvent(currentFile, event_id)}
          startIcon={<Icon icon='fluent-mdl2:switch' />}
        >
          {event?.link !== null ? 'Cập nhật' : 'Nộp bài'}
        </Button>
      </Box>
    </Paper>
  );
}

export default EventDetailDesktop;
