import DetailGroupModal from '@/components/page/GroupStudent/Modal/DetailGroupModal';
import InviteModal from '@/components/page/GroupStudent/Modal/InviteModal';
import { Icon } from '@iconify/react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Chip,
  Box,
  Tooltip,
  IconButton,
} from '@mui/material';
import { useState } from 'react';

function CardGroupStudent({ numOfMembers, name, groupId }: any) {
  const [openInviteModal, setOpenInviteModal] = useState({
    isOpenInviteModal: false,
    groupId: '',
    name: '',
  });
  const [openDetailModal, setOpenDetailModal] = useState({
    isOpenDetailModal: false,
    groupId: '',
  });
  const handleOpenInviteModal = (groupId: string, name: string) => {
    setOpenInviteModal({ isOpenInviteModal: true, groupId, name });
  };
  const handleCloseInviteModal = () => {
    setOpenInviteModal((pre) => ({ ...pre, isOpenInviteModal: false }));
  };
  const handleOpenDetailModal = (groupId: string) => {
    setOpenDetailModal({ isOpenDetailModal: true, groupId });
  };
  const handleCloseDetailModal = () => {
    setOpenDetailModal((pre) => ({ ...pre, isOpenDetailModal: false }));
  };
  return (
    <>
        <Card
          id={groupId}
          sx={{
            width: {
              md: 'calc(50%  - 10px)',
              lg: 'calc(20% - 10px)',
              xl: 'calc(20%  -10px)',
            },
            cursor: 'pointer',
            border: '2px solid #fff',
            '&:hover': {
              bgcolor: '#fff5ec',
              boxShadow:
                'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;',
              border: '1px solid #f3ad5e',
            },
          }}
        >
          <Box alignItems={'center'} height={40} mt={5} justifyContent={'center'} display={'flex'}>
            {numOfMembers === 1 && <Icon width={40} color='#aa6b22' icon='bxs:user' />}
            {numOfMembers === 0 && (
              <Icon width={40} color='#225faa' icon='icon-park-twotone:push-door' />
            )}
            {numOfMembers === 2 && <Icon width={40} color='#22aa46' icon='mingcute:group-fill' />}
          </Box>
          <CardContent onClick={() => handleOpenInviteModal(groupId, name)} sx={{ my: 0 }}>
            <Tooltip title={numOfMembers !== 2 ? 'Tham gia nhóm' : 'Nhóm đã đủ thành viên'}>
              <>
                <Typography
                  gutterBottom
                  variant='h4'
                  color='warning.dark'
                  fontWeight={'bold'}
                  component='div'
                >
                  {name}
                </Typography>
                <Typography variant='body1' color='text.warning'>
                  Số lượng thành viên :{numOfMembers} /2
                </Typography>
              </>
            </Tooltip>
          </CardContent>
          <CardActions sx={{ justifyContent: 'space-between' }}>
            {numOfMembers === 2 && (
              <Chip color='success' sx={{ fontWeight: 'bold' }} label='Đã đủ' variant='outlined' />
            )}
            <Box>
              <Tooltip onClick={() => handleOpenDetailModal(groupId)} title='Thông tin chi tiết'>
                <IconButton color='warning'>
                  <Icon icon='bx:detail' />
                </IconButton>
              </Tooltip>
            </Box>
          </CardActions>
        </Card>
      <InviteModal
        groupId={openInviteModal.groupId}
        name={openInviteModal.name}
        open={openInviteModal.isOpenInviteModal}
        onClose={handleCloseInviteModal}
      />
      <DetailGroupModal
        groupName={name}
        groupId={openDetailModal.groupId}
        open={openDetailModal.isOpenDetailModal}
        onClose={handleCloseDetailModal}
      />
    </>
  );
}

export default CardGroupStudent;
