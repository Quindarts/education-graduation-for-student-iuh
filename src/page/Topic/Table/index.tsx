import Table from '@/components/ui/Table/Table';
import { Icon } from '@iconify/react';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import React, { useState } from 'react';
import ChooseModal from '@/components/page/Topic/Modal/ChooseModal';
import { useNavigate } from 'react-router-dom';
import useTermStore from '@/store/termStore';
import { ENUM_STATUS_OF_DATE_TERM } from '@/utils/validations/term.validation';

function TableManagamentTopic(props: any) {
  const { rows, page, totalPages, handleChangePage, ...rest } = props;
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
      flex: 1,
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
      flex: 0.7,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params: any) => (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={2}>
          <Box>
            <Tooltip
              onClick={() => navigate(`/topics/${params.row.id}`)}
              title='Xem thông tin đề tài'
            >
              <IconButton>
                <Icon icon='bx:detail' width={30} style={{ color: '#2f69ac' }} />
              </IconButton>
            </Tooltip>
          </Box>

          {partOfTerm.ChooseTopic?.status === ENUM_STATUS_OF_DATE_TERM.ACTIVE && (
            <>
              {params.row.quantityGroup >= params.row.quantityGroupMax ? (
                <Tooltip title={'Đã đủ số lượng'}>
                  <IconButton color='primary'>
                    <Icon width={30} icon='bxs:book-add' style={{ color: '#AC2F2F' }} />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip
                  onClick={() => handleOpenChooseModal(params.row.id)}
                  title={'Đăng ký đề tài'}
                >
                  <IconButton color='primary'>
                    <Icon width={30} icon='bxs:book-add' style={{ color: '#2fac82' }} />
                  </IconButton>
                </Tooltip>
              )}{' '}
            </>
          )}
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
            height: 600,
          }}
          minHeight={600}
          columns={basicColumns}
          totalItems={rows.length}
          totalPages={totalPages}
          page={page}
          handleChangePage={handleChangePage}
          disableColumnFilter
      
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
