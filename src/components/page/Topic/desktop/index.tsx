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

function TopicDesktop() {
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
  return (
    <>
      <Paper sx={{ py: 10, px: 10 }} elevation={1}>
        <TitleManager
          variant='h5'
          textTransform={'uppercase'}
          icon='ic:twotone-topic'
          mb={8}
          mt={2}
        >
          {' '}
          {partOfTerm.ChooseTopic?.status === ENUM_STATUS_OF_DATE_TERM.ACTIVE
            ? 'Chọn Đề tài đăng ký khóa luận tốt nghiệp'
            : 'Danh sách đề tài '}
          {' - '}
          {term.name}
          <Typography
            mt={3}
            ml={20}
            variant='body1'
            color={checkColorStatusPartTerm(partOfTerm.ChooseTopic?.status)}
          >
            Đăng kí đề tài {partOfTerm.ChooseTopic?.mess}
          </Typography>
        </TitleManager>

        {partOfTerm.ChooseTopic?.status === ENUM_STATUS_OF_DATE_TERM.ACTIVE ||
        partOfTerm.PublicTopic?.status === ENUM_STATUS_OF_DATE_TERM.ACTIVE ? (
          <HeaderTopic />
        ) : (
          <></>
        )}
        {isLoading ? (
          <SekeletonUI />
        ) : (
          <Box width={'full'} my={4}>
            {partOfTerm.PublicTopic?.status === ENUM_STATUS_OF_DATE_TERM.EXPIRED ||
            partOfTerm.PublicTopic?.status === ENUM_STATUS_OF_DATE_TERM.INACTIVE ? (
              <>
                <Typography
                  mt={3}
                  ml={20}
                  variant='body1'
                  color={checkColorStatusPartTerm(partOfTerm.PublicTopic?.status)}
                >
                  Thời gian xem và công bố Đề tài {partOfTerm.PublicTopic?.mess}
                </Typography>{' '}
                <Box
                  height={500}
                  width={'100%'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  flexDirection={'column'}
                  display={'flex'}
                >
                  <DotLottieReact
                    style={{
                      width: '350px',
                      height: '350px',
                    }}
                    src='https://lottie.host/d5ee136a-961a-4bc7-bfa6-709dcb8e1038/WNAl4pFATV.json'
                    loop
                    autoplay
                  />
                  <Typography
                    sx={{
                      position: 'relative',
                      top: 0,
                    }}
                    variant='h4'
                    fontWeight={'500'}
                    color='grey.600'
                  >
                    Đã hết hạn chọn đề tài
                  </Typography>
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
    </>
  );
}

export default TopicDesktop;
