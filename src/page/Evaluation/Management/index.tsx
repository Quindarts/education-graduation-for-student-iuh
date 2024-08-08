import TitleManager from '@/components/ui/Title';
import { Box, Paper } from '@mui/material';
import React, { useState } from 'react';
import TableEvaluation from './Table';
import DropDown from '@/components/ui/Dropdown';
import SekeletonUI from '@/components/ui/Sekeleton';
import useEvaluation from '@/hook/api/useEvaluation';
export enum TypeEvaluation {
  SESSION_HOST = 'SESSION_HOST',
  ADVISOR = 'ADVISOR',
  REVIEWER = 'REVIEWER',
}
export const convertEvalutationTable = (evalutation: any[]) => {
  if (evalutation === undefined) return [];
  else {
    const newEvalutations: any[] = [];
    evalutation.map((Evalutation: any, index: number) => {
      newEvalutations.push({
        stt: index + 1,
        id: index,
        EvalutationId: Evalutation.id,
        ...Evalutation,
      });
    });
    return newEvalutations;
  }
};
function EvaluationManagementPage() {
  const [currentTypeReview, setCurrentTypeReview] = useState(TypeEvaluation.ADVISOR);
  const { HandleGetAllEvaluationByType } = useEvaluation();
  const { evaluations, isFetching, isLoading } = HandleGetAllEvaluationByType(currentTypeReview);
  return (
    <Paper sx={{ py: 10, px: 10 }} elevation={1}>
      <Box my={4} display={'flex'} justifyContent={'space-between'} gap={2}>
        <TitleManager textTransform={'uppercase'} icon='pajamas:review-checkmark'>
          Tiêu chí Đánh giá
        </TitleManager>

        <Box display={'flex'} gap={2}>
          <DropDown
            value={currentTypeReview}
            onChange={(e: any) => {
              setCurrentTypeReview(e.target.value);
            }}
            options={[
              {
                name: 'Tiêu chí Đánh giá Hướng dẫn',
                _id: 'ADVISOR',
              },
              {
                name: 'Tiêu chí Đánh giá Phản biện',
                _id: 'REVIEWER',
              },
              {
                name: 'Tiêu chí Đánh giá Báo cáo',
                _id: 'REPORT',
              },
            ]}
          />
        </Box>
      </Box>

      <Box mt={4}>
        {isLoading || isFetching ? (
          <SekeletonUI />
        ) : (
          <>
            <TableEvaluation type={currentTypeReview} rows={convertEvalutationTable(evaluations)} />
          </>
        )}
      </Box>
    </Paper>
  );
}

export default EvaluationManagementPage;
