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

function TopicTemplate() {
  const { HandleSearchTopic,totalPages } = useTopic();
  const { data, isLoading, isFetching, refetch } = HandleSearchTopic();
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
    <Paper sx={{ py: 10, px: 10 }} elevation={1}>
      <TitleManager variant='h5' textTransform={'uppercase'} icon='ic:twotone-topic' mb={8} mt={2}>
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
      {isLoading || isFetching ? (
        <SekeletonUI />
      ) : (
        <Box width={'full'} my={4}>
          {partOfTerm.PublicTopic?.status === ENUM_STATUS_OF_DATE_TERM.EXPIRED ||
          partOfTerm.PublicTopic?.status === ENUM_STATUS_OF_DATE_TERM.INACTIVE ? (
            <Typography
              mt={3}
              ml={20}
              variant='body1'
              color={checkColorStatusPartTerm(partOfTerm.PublicTopic?.status)}
            >
              Thời gian xem và công bố Đề tài {partOfTerm.PublicTopic?.mess}
            </Typography>
          ) : (
            <TableManagamentTopic
              handleChangePage={handleChangePage}
              isApprovePermission={true}
              rows={
                data?.topics
                  ? data.topics
                      .filter((topic: any) => topic.status === 'APPROVED')
                      .map((t: any, index: number) => ({ ...t, stt: index + 1 }))
                  : []
              }
              page={currentPage}
              totalPages={totalPages}
            />
          )}
        </Box>
      )}
    </Paper>
  );
}

export default TopicTemplate;
