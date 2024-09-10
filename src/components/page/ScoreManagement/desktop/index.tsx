import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import MyScoreTable from './StudentInGroup/Table';
import TitleManager from '@/components/ui/Title';
import useTermStore from '@/store/termStore';
import {
  checkColorStatusPartTerm,
  ENUM_STATUS_OF_DATE_TERM,
} from '@/utils/validations/term.validation';

function ScorePageDesktop() {
  const partOfTerm = useTermStore((state) => state.partOfTerm);
  return (
    <Paper sx={{ px: 10, py: 10 }}>
      <TitleManager variant='h5' icon='ph:exam-duotone' textTransform={'uppercase'} mb={4}>
        Bảng điểm của tôi
      </TitleManager>
      {partOfTerm.PublicResult?.status === ENUM_STATUS_OF_DATE_TERM.INACTIVE ? (
        <Box>
          {' '}
          <Typography
            mt={2}
            fontWeight={600}
            variant='body1'
            textTransform={'uppercase'}
            color={checkColorStatusPartTerm(partOfTerm?.PublicResult?.status)}
          >
            Công bố kết quả điểm khóa luận của sinh viên - {partOfTerm.PublicResult?.mess}
          </Typography>
        </Box>
      ) : (
        <MyScoreTable />
      )}
    </Paper>
  );
}

export default ScorePageDesktop;
