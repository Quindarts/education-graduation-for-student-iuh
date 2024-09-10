import SekeletonUI from '@/components/ui/Sekeleton';
import TitleManager from '@/components/ui/Title';
import { Box, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TableManagamentTopic from './Table';
import useTopic from '@/hook/api/useTopic';
import useTermStore from '@/store/termStore';
import HeaderTopic from './Header';
import {
  checkColorStatusPartTerm,
  ENUM_STATUS_OF_DATE_TERM,
} from '@/utils/validations/term.validation';
import useParams from '@/hook/ui/useParams';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

function TopicMobile() {
  const { HandleSearchTopic, totalPages } = useTopic();
  const { data, isLoading, refetch } = HandleSearchTopic();
  const { partOfTerm, term } = useTermStore();
  const [currentPage, setCurrentPage] = useState(1);
  const { setLimit, setPage, getQueryField } = useParams();

  const handleChangePage = (value: number) => {
    setCurrentPage(value);
  };
  useEffect(() => {
    setLimit(10);
    setPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    setLimit(10);
    setPage(1);
    if (getQueryField('keywords') === '') {
      refetch();
    }
  }, [getQueryField('keywords')]);
  const navigate = useNavigate();
  return (
    <Paper elevation={0}>
      {/***Back */}
      <Box
        bgcolor={'primary.dark'}
        alignItems={'center'}
        onClick={() => navigate('/')}
        display={'flex'}
        height={30}
        color={'grey.500'}
        sx={{
          '&:hover': {
            color: 'primary.dark',
            transition: '0.3s ease-in',
          },
        }}
      >
        <Icon width={24} style={{ color: '#cfcbcb' }} icon='ion:chevron-back' /> Quay lại
      </Box>
      <Box py={6} px={'10px'} borderRadius={'0 0 20px 20px'} bgcolor={'primary.dark'}>
        <TitleManager variant='h5' color={'grey.50'} mb={8}>
          {' '}
          {partOfTerm.ChooseTopic?.status === ENUM_STATUS_OF_DATE_TERM.ACTIVE
            ? 'Chọn đề tài'
            : 'Danh sách đề tài '}
          {' - '}
          {term.name}
          <Typography
            mt={3}
            variant='body1'
            color={checkColorStatusPartTerm(partOfTerm.ChooseTopic?.status)}
          >
            {partOfTerm.ChooseTopic?.mess}
          </Typography>
        </TitleManager>{' '}
        {partOfTerm.ChooseTopic?.status === ENUM_STATUS_OF_DATE_TERM.ACTIVE ||
        partOfTerm.PublicTopic?.status === ENUM_STATUS_OF_DATE_TERM.ACTIVE ? (
          <HeaderTopic />
        ) : (
          <></>
        )}
      </Box>

      {isLoading ? (
        <SekeletonUI />
      ) : (
        <Box px={'10px'} width={'full'} my={4}>
          {partOfTerm.PublicTopic?.status === ENUM_STATUS_OF_DATE_TERM.EXPIRED ||
          partOfTerm.PublicTopic?.status === ENUM_STATUS_OF_DATE_TERM.INACTIVE ? (
            <>
              <Box
                height={'50vh'}
                width={'100%'}
                alignItems={'center'}
                justifyContent={'center'}
                flexDirection={'column'}
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
                    top: -20,
                  }}
                  textAlign={'center'}
                  variant='body1'
                  color='grey.600'
                >
                  Thời gian xem và công bố đề tài {partOfTerm.PublicTopic?.mess}
                </Typography>{' '}
              </Box>
            </>
          ) : (
            <TableManagamentTopic
              handleChangePage={handleChangePage}
              isApprovePermission={true}
              rows={data?.topics ? data.topics : []}
              page={currentPage}
              totalPages={totalPages}
            />
          )}
        </Box>
      )}
    </Paper>
  );
}

export default TopicMobile;
