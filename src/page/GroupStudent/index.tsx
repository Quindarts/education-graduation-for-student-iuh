import { Paper } from '@mui/material';
import React from 'react';
import GridGroupStudent from './Grid';
import TitleManager from '@/components/ui/Title';
import useGroupStudent from '@/hook/api/useGroupStudent';
import SekeletonUI from '@/components/ui/Sekeleton';

function GroupStudentTemplate() {
  const { HandleGroupStudentByTerm } = useGroupStudent();
  const { data, isLoading, isFetching } = HandleGroupStudentByTerm();
  return (
    <Paper sx={{ px: 20, py: 10 }} elevation={0}>
      <TitleManager textTransform={'uppercase'} mb={4}>
        Danh sách nhóm sinh viên
      </TitleManager>
      {isFetching || isLoading ? (
        <SekeletonUI />
      ) : (
        <GridGroupStudent groupStudents={data?.groupStudents} />
      )}
    </Paper>
  );
}

export default GroupStudentTemplate;
