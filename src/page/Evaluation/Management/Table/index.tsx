import Table from '@/components/ui/Table/Table';
import { Box } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import React from 'react';

function TableEvaluation(props: any) {
  const { rows } = props;

  const basicColumns: GridColDef[] = [
    {
      headerName: 'CLO',
      field: 'key',
      flex: 0.5,
      align: 'center',
      headerAlign: 'center',
    },
    {
      headerName: 'Tên tiêu chí',
      field: 'name',
      flex: 2,
    },
    {
      headerName: 'Điểm tối đa',
      field: 'scoreMax',
      flex: 0.8,
      headerAlign: 'center',
      align: 'center',
    },
    {
      headerName: 'Mô tả',
      field: 'description',
      flex: 5,
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
        }}
        columns={basicColumns}
        rowHeight={200}
        totalItems={rows.length}
        handleChangePage={() => {}}
        isPanigation={false}
        disableColumnMenu
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
      />
    </Box>
  );
}

export default TableEvaluation;
