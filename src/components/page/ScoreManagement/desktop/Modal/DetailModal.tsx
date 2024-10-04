import Modal from '@/components/ui/Modal';
import TitleManager from '@/components/ui/Title';
import useTranscript from '@/hook/api/useTranscript';
import { Box, DialogContent, Typography } from '@mui/material';
import React from 'react';

const getTitle = (type: string) => {
  if (type === 'ADVISOR') {
    return 'Chi tiết điểm hướng dẫn';
  }
  if (type === 'REVIEWER') {
    return 'Chi tiết điểm phản biện';
  }
  if (type === 'REPORT') {
    return 'Chi tiết điểm báo cáo';
  }
};
function DetailModal({ open, onClose, type }) {
  const { HandleGetTranscriptByPart } = useTranscript();
  const { transcript } = HandleGetTranscriptByPart(type);
  return (
    <Modal open={open} onClose={onClose}>
      <DialogContent sx={{ margin: 'auto', borderRadius: 2 }}>
        <Typography
          color={'primary'}
          fontWeight={'bold'}
          textTransform={'uppercase'}
          variant='h6'
          gutterBottom
        >
          {getTitle(type)}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 2 }}>
          {transcript?.transcripts?.map((item: any, index: number) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'grey.50',
                px: 20,
                py: 10,
                borderRadius: 2,
                boxShadow: 1,
                gap: 1,
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='h6' color='grey.700'>
                  Điểm thành phần {index + 1}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='h6' color='grey.700'>
                  Giảng viên:
                </Typography>
                <Typography color='primary' variant='h6'>
                  {item.lecturerName}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='h6' color='grey.700'>
                  Điểm:
                </Typography>
                <Typography color='error' variant='h6'>
                  {item.avgScore}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            px: 2,
            py: 4,
            backgroundColor: '#E2F5FFFF',
            borderRadius: 2,
            mt: 10,
          }}
        >
          <Typography color='primary.dark' variant='h4'>
            Tổng điểm: {transcript?.totalAvgScore.toFixed(2)}
          </Typography>
        </Box>
      </DialogContent>
    </Modal>
  );
}

export default DetailModal;
