import Table from '@/components/ui/Table/Table';
import { Icon } from '@iconify/react';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { CustomToolbar } from './custom';

function TableManagamentTopic(props: any) {
  const { rows, totalItems, totalPages, page, handelChangePage, isApprovePermission, ...rest } =
    props;

  //handle
  const [openInfoModal, setOpenEditInfoModal] = useState({ topic_id: '', isOpen: false });
  const handleCloseInfoModal = () => {
    setOpenEditInfoModal({ ...openInfoModal, isOpen: false });
  };
  const handleOpenInfoModal = (topic_id: string) => {
    setOpenEditInfoModal({ topic_id, isOpen: true });
  };

  //handle
  const [openAcceptModal, setOpenEditAcceptModal] = useState({ topic_id: '', isOpen: false });
  const handleCloseAcceptModal = () => {
    setOpenEditAcceptModal({ ...openAcceptModal, isOpen: false });
  };
  const handleOpenAcceptModal = (topic_id: string) => {
    setOpenEditAcceptModal({ topic_id, isOpen: true });
  };

  //handle
  const [openRefuseModal, setOpenEditRefuseModal] = useState({ topic_id: '', isOpen: false });
  const handleCloseRefuseModal = () => {
    setOpenEditRefuseModal({ ...openRefuseModal, isOpen: false });
  };
  const handleOpenRefuseModal = (topic_id: string) => {
    setOpenEditRefuseModal({ topic_id, isOpen: true });
  };

  //handle
  const [openEditModal, setOpenEditModal] = useState({ topic_id: '', isOpen: false });

  const handleCloseEditModal = () => {
    setOpenEditModal({ ...openEditModal, isOpen: false });
  };
  const handleOpenEditModal = (topic_id: string) => {
    setOpenEditModal({ topic_id, isOpen: true });
  };
  const basicColumns: GridColDef[] = [
    {
      headerName: 'Tên Đề tài',
      field: 'name',
      flex: 1.5,
      headerAlign: 'center',
    },
    {
      headerName: 'Giảng viên HD',
      field: 'lecturername',
      headerAlign: 'center',
      align: 'center',
      flex: 0.8,
      renderCell: (params: any) => (
        <Typography variant='body1' color='initial'>
          {params.row.lecturerTerm.lecturer.fullName}
        </Typography>
      ),
    },
    {
      headerName: 'SL nhóm đã đăng ký',
      field: 'quantityGroupMax',
      flex: 0.5,
      headerAlign: 'center',
      align: 'center',
    },
    {
      headerName: 'Mục tiêu',
      field: 'target',
      flex: 1,
      headerAlign: 'center',
    },
    {
      headerName: 'Chức năng',
      field: 'none',
      headerAlign: 'center',
      align: 'center',
      renderCell: (params: any) => (
        <Box display={'flex'} gap={2}>
          <Tooltip title='Đăng ký đề tài'>
            <IconButton
              size='small'
              color='primary'
              onClick={() => handleOpenEditModal(params.row.id)}
            >
              <Icon icon='bxs:book-add' />
            </IconButton>
          </Tooltip>
          <Tooltip title='Xem thông tin đề tài'>
            <IconButton size='small' onClick={() => handleOpenInfoModal(params.row.id)}>
              <Icon icon='noto-v1:eye-in-speech-bubble' />
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
          minHeight={350}
          columns={basicColumns}
          totalItems={1}
          totalPages={1}
          page={1}
          handleChangePage={() => {}}
          disableColumnFilter
          slots={{
            toolbar: CustomToolbar,
          }}
        />
      </>
    </Box>
  );
}

export default TableManagamentTopic;
