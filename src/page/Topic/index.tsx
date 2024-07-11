import SekeletonUI from '@/components/ui/Sekeleton';
import TitleManager from '@/components/ui/Title';
import { Box, Paper } from '@mui/material';
import React from 'react';
import TableManagamentTopic from './Table';
import useTopic from '@/hook/api/useTopic';

function TopicTemplate() {
  const { HandleGetAllTopic } = useTopic();
  const { data, isLoading, isFetching } = HandleGetAllTopic();

  return (
    <Paper sx={{ py: 10, px: 10 }} elevation={1}>
      <TitleManager icon='quill:list' mb={8} mt={2}>
        Danh sách đề tài
      </TitleManager>
      {isLoading || isFetching ? (
        <SekeletonUI />
      ) : (
        <Box width={'full'} my={4}>
          <TableManagamentTopic isApprovePermission={true} rows={data?.topics ? data.topics : []} />
        </Box>
      )}
    </Paper>
  );
}

export default TopicTemplate;
