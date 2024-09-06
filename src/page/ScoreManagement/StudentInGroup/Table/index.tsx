import Table from '@/components/ui/Table/Table';
import { getStatusGroup } from '@/utils/validations/groupStudent.validation';
import { Avatar, Box, Typography } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

export const convertGroupMembersTable = (groupMember: any[]) => {
  const newArr: any[] = [];

  if (groupMember === undefined) return [];
  else {
    groupMember.map((mem: any) => {
      newArr.push({
        id: mem.student.id,
        studentId: mem.student.id,
        isAdmin: mem.isAdmin,
        status: mem.status,
        transcripts: mem.transcripts,
        ...mem.student,
      });
    });
  }
  return newArr;

};

function MyScoreTable() {
  const basicColumns: GridColDef[] = [
    {
      headerName: 'Thông tin chung',
      field: 'name',
      flex: 1.7,
      headerAlign: 'center',
      renderCell: (params: any) => {
        return (
          <Box gap={4} display={'flex'} alignItems={'center'}>
            <Avatar sizes='small' src={params.row.avatar} />
            <Box>
              <Typography component={'span'} color='primary'>
                {params.row.isAdmin ? 'Trưởng Nhóm' : ''}
              </Typography>
              <Typography fontWeight={600} variant='body1'>
                {params.row.fullName}
              </Typography>

              <Typography>
                Mã SV: {'  '}
                <Typography component={'span'}>{params.row.username}</Typography>
              </Typography>
            </Box>
          </Box>
        );
      },
    },
    {
      headerName: 'Lớp chuyên ngành',
      field: 'clazzName',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
    },
    {
      headerName: 'Điểm Hướng dẫn',
      field: 'hd',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params: any) => {
        return (
          <Typography variant='body1'>
            {params.row.transcripts.length > 0 && params.row.transcripts[0]
              ? `${parseFloat(params.row.transcripts[0]?.avgScore.toFixed(2))}`
              : 'Chưa có'}
          </Typography>
        );
      },
    },
    {
      headerName: 'Điểm Phản biện',
      field: 'pb',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params: any) => {
        return (
          <Typography variant='body1'>
            {params.row.transcripts.length > 0 && params.row.transcripts[1]
              ? `${parseFloat(params.row.transcripts[1]?.avgScore.toFixed(2))}`
              : 'Chưa có'}
          </Typography>
        );
      },
    },
    {
      headerName: 'Điểm Báo cáo',
      field: 'bc',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params: any) => {
        return (
          <Typography variant='body1'>
            {params.row.transcripts.length > 0 && params.row.transcripts[2]
              ? `${parseFloat(params.row.transcripts[2]?.avgScore.toFixed(2))}`
              : 'Chưa có'}
          </Typography>
        );
      },
    },
    {
      headerName: 'Điểm Trung bình',
      field: 'tb',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params: any) => {
        return (
          <Typography variant='body1'>
            {params.row.transcripts.length > 0 && params.row.transcripts[3]
              ? `${parseFloat(params.row.transcripts[3]?.avgScore.toFixed(2))}`
              : 'Chưa có'}
          </Typography>
        );
      },
    },

    {
      headerName: 'Tình trạng',
      field: 'abc',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params: any) => {
        return (
          <Box display={'flex'}>
            <Typography variant='body1'>{getStatusGroup(params.row.status)}</Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <>
      <Box>
        <Box>
          <Table
            rows={[]}
            sx={{
              bgcolor: 'white',
              height: 500,
            }}
            minHeight={350}
            rowHeight={100}
            columns={basicColumns}
            totalItems={1}
            totalPages={1}
            page={1}
            handleChangePage={() => {}}
            disableColumnFilter
          />
        </Box>
      </Box>
    </>
  );
}

export default MyScoreTable;
