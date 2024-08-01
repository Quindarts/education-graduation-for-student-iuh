import Modal from '@/components/ui/Modal';
import SekeletonUI from '@/components/ui/Sekeleton';
import TitleManager from '@/components/ui/Title';
import useGroupStudent from '@/hook/api/useGroupStudent';
import { Icon } from '@iconify/react';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';

function DetailGroupModal(props: any) {
  const { onClose, open, groupId, groupName } = props;

  const { HandleGetGroupMembers } = useGroupStudent();
  const { data, isFetching, isLoading } = HandleGetGroupMembers(groupId);
  return (
    <Modal maxWidth='md' onClose={onClose} open={open}>
      <Box my={5} display='flex' gap={10} px={10}>
        {isLoading || isFetching ? (
          <SekeletonUI />
        ) : (
          <Box sx={{ p: 4, width: '100%' }}>
            <TitleManager mb={8} textTransform={'uppercase'} icon='flat-color-icons:info'>
              Thông tin {groupName}
            </TitleManager>

            {data?.members.length === 0 ? (
              <Typography ml={4} variant='h6' color='initial'>
                Nhóm chưa có thành viên
              </Typography>
            ) : (
              <>
                <Box my={2} gap={4} display={'flex'}>
                  {data?.members?.map((std: any) => (
                    <Box width={'calc(50% - 4px)'}>
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
      <Box width='100%' display='flex' justifyContent={'end'} gap={6} marginTop={1}>
        <Button sx={{ mr: 10, mt: 6, mb: 4 }} onClick={onClose} color='primary' variant='contained'>
          <Icon width={20} style={{ marginRight: 4 }} icon='mdi:cancel-outline' />
          Thoát
        </Button>
      </Box>
    </Modal>
  );
}

export default DetailGroupModal;
