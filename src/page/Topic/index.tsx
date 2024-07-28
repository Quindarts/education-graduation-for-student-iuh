import SekeletonUI from '@/components/ui/Sekeleton';
import TitleManager from '@/components/ui/Title';
import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import TableManagamentTopic from './Table';
import useTopic from '@/hook/api/useTopic';
import useTermStore from '@/store/termStore';
import {
  checkColorStatusPartTerm,
  ENUM_STATUS_OF_DATE_TERM,
} from '@/utils/validations/term.validation';

function TopicTemplate() {
  const { HandleGetAllTopic } = useTopic();
  const { data, isLoading, isFetching } = HandleGetAllTopic();
  const { partOfTerm, term } = useTermStore();
  return (
    <Paper sx={{ py: 10, px: 10 }} elevation={1}>
      <TitleManager variant='h5' textTransform={'uppercase'} icon='quill:list' mb={8} mt={2}>
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
              isApprovePermission={true}
              rows={
                data?.topics ? data.topics.filter((topic: any) => topic.status === 'APPROVED') : []
              }
            />
          )}
        </Box>
      )}
    </Paper>
  );
}

export default TopicTemplate;
