import { Box, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import TitleManager from '@/components/ui/Title';
import useTermStore from '@/store/termStore';
import {
  checkColorStatusPartTerm,
  ENUM_STATUS_OF_DATE_TERM,
} from '@/utils/validations/term.validation';
import useTranscript from '@/hook/api/useTranscript';
import useUserStore from '@/store/userStore';
import { checkGender } from '@/utils/validations/person.validation';
import { Icon } from '@iconify/react';
import DetailModal from './Modal/DetailModal';
export enum ENUM_SCORE {
  ADVISOR = 'ADVISOR',
  REVIEWER = 'REVIEWER',
  REPORT = 'REPORT',
  TOTAL = 'TOTAL',
}
function ScorePageDesktop() {
  const { HandleGetTranscriptSummary } = useTranscript();
  const { transcript } = HandleGetTranscriptSummary();
  const me = useUserStore((s) => s.me);
  const partOfTerm = useTermStore((state) => state.partOfTerm);
  const [openDetailModal, setOpenDetailModal] = useState({ isOpen: false, type: '' });
  const handleOpenDetailModal = (type: string) => {
    setOpenDetailModal({ isOpen: true, type });
  };
  const handleCloseDetailModal = () => {
    setOpenDetailModal((pre) => ({ ...pre, isOpen: false }));
  };
  return (
    <>
      <Paper sx={{ px: 20, py: 10, my: 20, mx: 10 }}>
        <TitleManager variant='h4' icon='ph:exam-duotone' textTransform={'uppercase'} mb={4}>
          Bảng điểm của tôi
        </TitleManager>
        {partOfTerm.PublicResult?.status === ENUM_STATUS_OF_DATE_TERM.INACTIVE ||
        partOfTerm.PublicResult?.status === ENUM_STATUS_OF_DATE_TERM.EXPIRED ? (
          <Box>
            {' '}
            <Typography
              mt={2}
              fontWeight={400}
              variant='body1'
              color={checkColorStatusPartTerm(partOfTerm?.PublicResult?.status)}
            >
              Công bố kết quả điểm khóa luận của sinh viên - {partOfTerm.PublicResult?.mess}
            </Typography>
          </Box>
        ) : (
          <Box sx={{ px: 10, my: 10, display: 'flex', gap: 10, width: '100%' }}>
            <Box sx={{ flex: 1 }}>
              <Typography color='primary' variant='h4' fontWeight={'bold'} lineHeight={2}>
                Thông tin sinh viên{' '}
              </Typography>
              <Box sx={{ mx: 10 }}>
                <Typography variant='h5' lineHeight={1.8}>
                  Họ tên: {me?.fullName}
                </Typography>
                <Typography variant='h5' lineHeight={1.8}>
                  MSSV: {me?.username}
                </Typography>
                <Typography variant='h5' lineHeight={1.8}>
                  Giới tính : {checkGender(me.gender)}
                </Typography>
                <Typography variant='h5' lineHeight={1.8}>
                  Chuyên ngành: {me?.majorName}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant='h4' color={'primary'} fontWeight={'bold'} lineHeight={2}>
                Bảng điểm
              </Typography>
              <Box sx={{ mx: 10 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box
                    onClick={() => handleOpenDetailModal(ENUM_SCORE.ADVISOR)}
                    sx={{ display: 'flex', gap: 4, alignItems: 'center', cursor: 'pointer' }}
                  >
                    <Icon icon='flat-color-icons:info' width='16' height='16' />
                    <Typography variant='h5' fontWeight={'500'} lineHeight={2}>
                      Điểm hướng dẫn
                    </Typography>
                  </Box>

                  <Typography variant='body1' fontWeight={500} lineHeight={2}>
                    {transcript?.advisorScore === 0 ? 'Chưa có điểm  ' : transcript?.advisorScore}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box
                    onClick={() => handleOpenDetailModal(ENUM_SCORE.REVIEWER)}
                    sx={{ display: 'flex', gap: 4, alignItems: 'center', cursor: 'pointer' }}
                  >
                    <Icon icon='flat-color-icons:info' width='16' height='16' />
                    <Typography variant='h5' fontWeight={'500'} lineHeight={2}>
                      Điểm phản biện
                    </Typography>
                  </Box>
                  <Typography variant='body1' fontWeight={500} lineHeight={2}>
                    {transcript?.reviewerScore === 0 ? 'Chưa có điểm ' : transcript?.reviewerScore}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box
                    onClick={() => handleOpenDetailModal(ENUM_SCORE.REPORT)}
                    sx={{ display: 'flex', gap: 4, alignItems: 'center', cursor: 'pointer' }}
                  >
                    <Icon icon='flat-color-icons:info' width='16' height='16' />
                    <Typography variant='h5' fontWeight={'500'} lineHeight={2}>
                      Điểm báo cáo
                    </Typography>
                  </Box>
                  <Typography variant='body1' fontWeight={500} lineHeight={2}>
                    {transcript?.reportScore === 0 ? 'Chưa có điểm ' : transcript?.reportScore}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', gap: 4, alignItems: 'center'}}>
                    <Icon icon='flat-color-icons:info' width='16' height='16' />
                    <Typography variant='h5' fontWeight={'500'} lineHeight={2}>
                      Điểm cộng 
                    </Typography>
                  </Box>
                  <Typography variant='body1' fontWeight={500} lineHeight={2}>
                    {transcript?.bonusScore === 0 ? 'Không ' : transcript?.bonusScore}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    mt: 10,
                    borderTop: '2px solid #0f4f9c',
                    justifyContent: 'space-between',
                    pt: 2,
                  }}
                >
                  <Typography color='error.dark' variant='h5' fontWeight={'500'} lineHeight={2}>
                    Điểm trung bình
                  </Typography>
                  <Typography color='error.dark' variant='body1' fontWeight={500} lineHeight={2}>
                    {transcript?.totalAverageScore === 0
                      ? 'Chưa có điểm '
                      : transcript?.totalAverageScore}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Paper>
      <DetailModal
        open={openDetailModal.isOpen}
        onClose={handleCloseDetailModal}
        type={openDetailModal.type}
      />
    </>
  );
}

export default ScorePageDesktop;
