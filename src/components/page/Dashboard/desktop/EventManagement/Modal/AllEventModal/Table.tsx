import Table from '@/components/ui/Table/Table';
import { EnumStatusSubmit } from '@/types/enum';
import submissionStatus from '@/utils/validations/event.validation';
import { Button, Typography } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import dayjs from 'dayjs';
import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TableEventManagement(props: any) {
  const { rows, totalItems, totalPage } = props;
  const navigate = useNavigate();

  const basicColumns: GridColDef[] = useMemo(
    () => [
      {
        headerName: 'Tên sự kiện',
        field: 'name',
        flex: 1,
        align: 'left',
        headerAlign: 'left',
      },
      {
        headerName: 'Ngày bắt đầu',
        field: 'startDate',
        flex: 0.6,
        type: 'string',
        align: 'right',
        headerAlign: 'right',
        renderCell: (params) => (
          <Typography>{dayjs(params.value).format(' hh:mm A  DD-MM-YYYY ')}</Typography>
        ),
      },
      {
        headerName: 'Ngày kết thúc',
        field: 'endDate',
        flex: 0.6,
        type: 'string',
        align: 'right',
        headerAlign: 'right',
        renderCell: (params) => (
          <Typography>{dayjs(params.value).format(' hh:mm A  DD-MM-YYYY ')}</Typography>
        ),
      },
      {
        headerName: 'Tình trạng',
        field: 'link',
        flex: 0.6,
        type: 'string',
        align: 'center',
        headerAlign: 'center',
        renderCell: (params) => (
          <>
            {' '}
            <Typography
              px={10}
              py={2}
              bgcolor={
                submissionStatus(
                  params.value !== null
                    ? EnumStatusSubmit.SUBMITTED
                    : EnumStatusSubmit.NOT_SUBMITTED,
                )?.bg
              }
              sx={{ borderRadius: 2 }}
              component={'span'}
              variant='body1'
              color={
                submissionStatus(
                  params.value !== null
                    ? EnumStatusSubmit.SUBMITTED
                    : EnumStatusSubmit.NOT_SUBMITTED,
                )?.color
              }
            >
              {params.value !== null ? 'Đã nộp bài' : 'Chưa nộp bài'}
            </Typography>
          </>
        ),
      },
      {
        headerName: 'Nhận xét',
        field: 'comment',
        flex: 0.6,
        renderCell: (params) => (
          <Typography>{params.value === null ? 'Chưa có nhận xét' : params.value}</Typography>
        ),
      },
      {
        headerName: 'Chức năng',
        field: 'feature',
        flex: 0.5,
        renderCell: (params) => (
          <Button
            onClick={() =>
              navigate(
                `/events/${params.row.id}`,
              )
            }
          >
            Xem chi tiết
          </Button>
        ),
      },
    ],
    [],
  );
  return (
    <>
      <Table
        rows={rows}
        sx={{
          bgcolor: 'white',
          width: '100%',
          minHeight: 450,
        }}
        limit={300}
        rowHeight={75}
        columns={basicColumns}
        totalItems={totalItems}
        totalPages={totalPage}
        isPanigation={false}
        disableColumnFilter
      />
    </>
  );
}

export default TableEventManagement;
