import Table from '@/components/ui/Table/Table';
import { Box } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import React from 'react';

function TableEvaluation(props: any) {
  const { rows, type } = props;

  const basicColumns: GridColDef[] = [
    {
      headerName: 'STT',
      field: 'stt',
      flex: 0.5,
      align: 'center',
      headerAlign: 'center',
    },
    {
      headerName: 'Tên tiêu chí',
      field: 'name',
      flex: 6,
      headerAlign: 'center',
    },
    // {
    //   headerName: 'Mô tả',
    //   field: 'description',
    //   flex: 3,
    //   headerAlign: 'center',
    //   align: 'center',
    // },
    {
      headerName: 'Điểm tối đa',
      field: 'scoreMax',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
  ];
  return (
    <Box>
      <Table
        rows={rows}
        sx={{
          bgcolor: 'white',
          height: 500,
        }}
        columns={basicColumns}
        totalItems={rows.length}
        totalPages={1}
        page={1}
        handleChangePage={() => {}}
        disableColumnMenu
        disableColumnFilter
        disableColumnSelector
      />
    </Box>
  );
}

export default TableEvaluation;
