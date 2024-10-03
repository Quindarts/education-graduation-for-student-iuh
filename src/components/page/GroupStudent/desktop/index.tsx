import { Paper, Typography } from '@mui/material';
import React from 'react';
import GridGroupStudent from './Grid';
import TitleManager from '@/components/ui/Title';
import useGroupStudent from '@/hook/api/useGroupStudent';
import SekeletonUI from '@/components/ui/Sekeleton';
import useTermStore from '@/store/termStore';
import { checkColorStatusPartTerm } from '@/utils/validations/term.validation';

function GroupStudentDesktop() {
  const { HandleGroupStudentByTerm } = useGroupStudent();
  const { data, isLoading, isFetching } = HandleGroupStudentByTerm();
  const { partOfTerm, term } = useTermStore();
  return (
    <Paper sx={{ px: 20, py: 10, mt: 10 }} elevation={0}>
      <TitleManager textTransform={'uppercase'} mb={4}>
        Tham gia Đăng ký Nhóm đề tài - {term.name}
        <Typography
          mt={2}
          fontWeight={600}
          variant='body2'
          color={checkColorStatusPartTerm(partOfTerm?.ChooseGroup?.status)}
        >
          {partOfTerm.ChooseGroup?.mess}
        </Typography>
      </TitleManager>
      {isFetching || isLoading ? (
        <SekeletonUI />
      ) : (
        <GridGroupStudent groupStudents={data?.groupStudents} />
      )}
    </Paper>
  );
}

export default GroupStudentDesktop;
