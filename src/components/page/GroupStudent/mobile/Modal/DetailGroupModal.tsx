import Modal from '@/components/ui/Modal';
import TitleManager from '@/components/ui/Title';
import useGroupStudent from '@/hook/api/useGroupStudent';
import { Icon } from '@iconify/react';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import React from 'react';

function DetailGroupModal(props: any) {
  const { onClose, open, groupId, groupName, handleOpenInviteModal } = props;

  const { HandleGetGroupMembers } = useGroupStudent();
  const { data, isLoading } = HandleGetGroupMembers(groupId);
  return (
    <Modal maxWidth='md' onClose={onClose} open={open}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '60vh',
        }}
      >
        <Box my={2} display='flex' gap={10} px={5}>
          {isLoading ? (
            <Box
              display='flex'
              alignItems={'center'}
              justifyContent={'center'}
              height={'60vh'}
              width={'100%'}
            >
              <CircularProgress />
            </Box>
          ) : (
            <Box
              sx={{
                width: '100%',
              }}
            >
              <TitleManager mb={5} textTransform={'uppercase'} icon='flat-color-icons:info'>
                Thông tin {groupName}
              </TitleManager>

              {data?.members.length === 0 ? (
                <Box
                  py={20}
                  alignItems={'center'}
                  justifyContent={'center '}
                  flexDirection={'column'}
                  display={'flex'}
                  height={'50vh'}
                >
                  <img width={200} src='/images/nodata.webp' />
                  <Typography ml={4} variant='h5' color='grey.600'>
                    Nhóm chưa có thành viên
                  </Typography>
                </Box>
              ) : (
                <>
                  <Box my={4} gap={4} ml={10} display={'flex'} flexDirection={'column'}>
                    {data?.members?.map((std: any) => (
                      <Box my={4} width={'100%'}>
                        <Typography fontWeight={'bold'} color={'grey.600'} variant='h6'>
                          Tên sinh viên: {std.student.fullName}
                        </Typography>
                        <Typography color={'text.primary'} variant='h6'>
                          Mã số sinh viên: {std.student.username}
                        </Typography>
                        <Typography color={'text.primary'} variant='h6'>
                          Lớp học phần: {std.student.clazzName}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </>
              )}
            </Box>
          )}
        </Box>
        <Box width='100%' mb={4} display='flex' justifyContent={'end'} gap={4} marginTop={'auto'}>
          <Button
            sx={{ height: 40, flex: 1, fontSize: 14, px: 10, py: 4, ml: 4 }}
            onClick={() => handleOpenInviteModal(groupId, groupName)}
            color='success'
            variant='contained'
            disabled={data?.members.length === 2}
          >
            <Icon width={24} style={{ marginRight: 4 }} icon='mdi:invite' />
            Tham gia
          </Button>
          <Button
            sx={{ height: 40, flex: 1, fontSize: 14, px: 10, py: 4, mr: 4 }}
            onClick={onClose}
            color='primary'
            variant='contained'
          >
            <Icon width={20} style={{ marginRight: 4 }} icon='mdi:cancel-outline' />
            Thoát
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default DetailGroupModal;
