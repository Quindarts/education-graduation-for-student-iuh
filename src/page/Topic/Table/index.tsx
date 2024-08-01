import Table from '@/components/ui/Table/Table';
import { Icon } from '@iconify/react';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { CustomToolbar } from './custom';
import ChooseModal from '@/components/page/Topic/Modal/ChooseModal';
import { useNavigate } from 'react-router-dom';
import useTermStore from '@/store/termStore';
import { ENUM_STATUS_OF_DATE_TERM } from '@/utils/validations/term.validation';

function TableManagamentTopic(props: any) {
  const { rows, ...rest } = props;
  const partOfTerm = useTermStore((s) => s.partOfTerm);
  const navigate = useNavigate();
  const [openChooseModal, setOpenChooseModal] = useState({ topicId: '', isOpen: false });
  const handleCloseChooseModal = () => {
    setOpenChooseModal({ ...openChooseModal, isOpen: false });
  };
  const handleOpenChooseModal = (topicId: string) => {
    setOpenChooseModal({ topicId, isOpen: true });
  };

  const basicColumns: GridColDef[] = [
    {
      headerName: 'STT',
      field: 'stt',
      flex: 0.2,
      headerAlign: 'center',
      align: 'center',
    },
    {
      headerName: 'Tên Đề tài',
      field: 'name',
      flex: 2,
      headerAlign: 'center',
    },
    {
      headerName: 'Giảng viên HD',
      field: 'lecturername',
      headerAlign: 'center',
      align: 'left',
      flex: 0.8,
      renderCell: (params: any) => (
        <Typography variant='body1' color='initial'>
          {params.row.fullName}
        </Typography>
      ),
    },
    {
      headerName: 'SL nhóm đã đăng ký',
      field: 'quantity_group_max',
      flex: 0.5,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params: any) => (
        <Typography variant='body1' color='initial'>
          {params.row.quantityGroup} / {params.row.quantityGroupMax}
        </Typography>
      ),
    },
    {
      headerName: 'Chức năng',
      field: 'none',
      headerAlign: 'center',
      align: 'center',
      renderCell: (params: any) => (
        <Box display={'flex'} gap={2}>
          {partOfTerm.ChooseTopic?.status === ENUM_STATUS_OF_DATE_TERM.ACTIVE && (
            <Tooltip title={'Đăng ký đề tài'}>
              <IconButton color='primary' onClick={() => handleOpenChooseModal(params.row.id)}>
                <Icon icon='bxs:book-add' />
              </IconButton>
            </Tooltip>
          )}
          <Tooltip title='Xem thông tin đề tài'>
            <IconButton onClick={() => navigate(`/dashboard/topics/${params.row.id}`)}>
              <Icon icon='bx:detail' />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];
  return (
    <Box {...rest}>
      {' '}
      <>
        <Table
          rows={rows}
          sx={{
            bgcolor: 'white',
          }}
          minHeight={500}
          columns={basicColumns}
          totalItems={rows.length}
          totalPages={1}
          page={1}
          handleChangePage={() => {}}
          disableColumnFilter
          slots={{
            toolbar: CustomToolbar,
          }}
        />
      </>
      <ChooseModal
        open={openChooseModal.isOpen}
        onClose={handleCloseChooseModal}
        topicId={openChooseModal.topicId}
      />
    </Box>
  );
}

export default TableManagamentTopic;
