import { Icon } from '@iconify/react';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import DetailGroupModal from '../Modal/DetailGroupModal';
import InviteModal from '../../Modal/InviteModal';

function CardGroupStudent({ numOfMembers, name, groupId }: any) {
  const [openDetailModal, setOpenDetailModal] = useState({
    isOpenDetailModal: false,
    groupId: '',
  });
  const [openInviteModal, setOpenInviteModal] = useState({
    isOpenInviteModal: false,
    groupId: '',
    name: '',
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
      <Box
        id={groupId}
        my={6}
        p={4}
        onClick={() => handleOpenDetailModal(groupId)}
        display={'flex'}
        gap={5}
        sx={{
          borderRadius: 4,
          border:'1px solid #eae8e8',
          '&:hover': {
            transition: '0.4s ease-in',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px;',
          },
        }}
        
      >
        <Box
          width={50}
          height={50}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          bgcolor={'grey.200'}
          borderRadius={4}
        >
          {numOfMembers === 1 && <Icon width={30} color='#aa6b22' icon='bxs:user' />}
          {numOfMembers === 0 && (
            <Icon width={30} color='#225faa' icon='icon-park-twotone:push-door' />
          )}
          {numOfMembers === 2 && <Icon width={30} color='#22aa46' icon='mingcute:group-fill' />}
          {numOfMembers === 3 && <Icon width={30} color='#22aa46' icon='typcn:group' />}
        </Box>
        <Box>
          <Typography fontSize={14} fontWeight={600} color='#14142A'>
            {name}
          </Typography>
          <Typography variant='body1' color='text.warning'>
            Số lượng thành viên :{numOfMembers} /2
          </Typography>
        </Box>
      </Box>
      <DetailGroupModal
        groupName={name}
        handleOpenInviteModal={handleOpenInviteModal}
        groupId={openDetailModal.groupId}
        open={openDetailModal.isOpenDetailModal}
        onClose={handleCloseDetailModal}
      />
      <InviteModal
        groupId={openInviteModal.groupId}
        name={openInviteModal.name}
        open={openInviteModal.isOpenInviteModal}
        onClose={handleCloseInviteModal}
      />
    </>
  );
}

export default CardGroupStudent;
