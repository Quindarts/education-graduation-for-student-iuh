import Table from '@/components/ui/Table/Table';
import { Box, Typography } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomToolbar } from './custom';

function TableManagamentTopic(props: any) {
  const { rows, page, totalPages, handleChangePage, ...rest } = props;
  const navigate = useNavigate();

  const basicColumns: GridColDef[] = [
    {
      headerName: 'Danh sách đề tài',
      field: 'info',
      flex: 2,
      headerAlign: 'center',
      renderCell: (params: any) => (
        <Box
          py={10}
          px={4}
          height={'100%'}
          sx={{
            '&:hover': {
              bgcolor: 'grey.200',
              boxShadow: ' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
            },
          }}
          onClick={() => navigate(`/topics/${params.row.id}`)}
        >
          <Typography
            variant='body1'
            fontSize={13}
            lineHeight={1.3}
            fontWeight={'700'}
            color='primary.dark'
          >
            Mã đề tài: {params.row.key}
          </Typography>
          <Typography
            variant='h6'
            fontSize={14}
            lineHeight={1.3}
            fontWeight={'600'}
            color='grey.700'
            pb={2}
            sx={{
              borderBottom: '1px solid #d2e6ff',
            }}
          >
            Tên đề tài: {params.row.name}
          </Typography>
          <Typography variant='body1' color='initial'>
            GV hướng dẫn: {params.row.fullName}
          </Typography>
          <Typography variant='body1' color='initial'>
            Số lượng: {params.row.quantityGroup} / {params.row.quantityGroupMax}
          </Typography>
        </Box>
      ),
    },
  ];
  return (
    <Box width={'100%'} {...rest}>
      <>
        <Table
          rows={rows}
          columns={basicColumns}
          totalItems={rows.length}
          totalPages={totalPages}
          page={page}
          handleChangePage={handleChangePage}
          disableColumnFilter
          sx={{
            minHeight: 800,
            '&  .MuiDataGrid-withBorderColor': {
              borderColor: 'grey.600',
              borderRadius: 2,
            },
            '& .MuiDataGrid-cell': {
              padding: '0 0',
            },
          }}
          rowHeight={180}
          slots={{
            toolbar: CustomToolbar,
          }}
          disableColumnMenu
          disableRowSelectionOnClick
          disableColumnSelector
          disableDensitySelector
        />
      </>
    </Box>
  );
}

export default TableManagamentTopic;
