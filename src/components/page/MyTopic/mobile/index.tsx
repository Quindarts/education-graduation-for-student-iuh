import SekeletonUI from '@/components/ui/Sekeleton';
import useGroupStudent from '@/hook/api/useGroupStudent';
import useTopic from '@/hook/api/useTopic';
import { Icon } from '@iconify/react';
import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CancelModal from '../../Topic/Modal/CancelModal';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ENUM_STATUS_OF_DATE_TERM } from '@/utils/validations/term.validation';
import useTermStore from '@/store/termStore';

function MyTopicMobile() {
  const { HandleGetMyGroupStudent } = useGroupStudent();
  const { data: groupFetch, isLoading: isLoadingGroup, refetch } = HandleGetMyGroupStudent();
  const [openModalCancel, setOpenModalCancel] = useState({ isOpen: false, groupId: '' });
  const handleOpenModalCancel = (groupId: string) => {
    setOpenModalCancel({ isOpen: true, groupId: groupId });
  };
  const handleCloseModalCancel = () => {
    setOpenModalCancel((pre: any) => ({ ...pre, isOpen: false }));
  };
  const { HandleGetMyTopic } = useTopic();
  const { data, isLoading: isLoadingTopic } = HandleGetMyTopic(groupFetch?.group.info?.topic_id);
  const navigate = useNavigate();
  useEffect(() => {
    refetch();
  }, []);
  const { partOfTerm } = useTermStore();

  return (
    <>
      <Box>
        {isLoadingTopic || isLoadingGroup ? (
          <SekeletonUI />
        ) : (
          <>
            {data ? (
              <Box
                sx={{
                  maxWidth: '100%',
                  mx: 'auto',
                }}
              >
                {/***Back */}
                <Box
                  justifyContent={'start'}
                  alignItems={'center'}
                  gap={2}
                  onClick={() => navigate('/topics')}
                  display={'flex'}
                  height={30}
                  bgcolor={'grey.100'}
                  px={'10px'}
                  py={10}
                  sx={{
                    '&:hover': {
                      bgcolor: 'grey.200',
                      color: 'primary.dark',
                      transition: '0.3s ease-in',
                    },
                  }}
                >
                  <Icon width={24} style={{ color: '#0D0140' }} icon='ion:chevron-back' />
                  <Typography variant='h6' fontWeight={'500'} color='primary.dark'>
                    Quay lại
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 2,
                    backgroundColor: '#B8DAFF',
                    px: '10px',
                    pb: '12px',
                    pt: '10px',
                  }}
                >
                  <Typography
                    variant='h5'
                    sx={{ fontWeight: 'bold', color: 'primary.main', mb: 1 }}
                  >
                    Đề tài của tôi : {data?.topic?.name}{' '}
                  </Typography>
                </Box>

                <Box px={'10px'}>
                  <Typography
                    variant='h6'
                    sx={{ fontWeight: 'bold', color: 'primary.main', mb: 1 }}
                  >
                    Mô tả đề tài:
                  </Typography>
                  <Typography sx={{ color: 'text.primary' }}>
                    <Typography
                      variant='body1'
                      gutterBottom
                      dangerouslySetInnerHTML={{ __html: data?.topic?.description }}
                    />{' '}
                  </Typography>

                  <Typography
                    variant='h6'
                    sx={{ fontWeight: 'bold', color: 'primary.main', mt: 2 }}
                  >
                    Số lượng nhóm đề tài tối đa: {data?.topic?.quantityGroupMax}
                  </Typography>

                  <Typography
                    variant='h6'
                    sx={{ fontWeight: 'bold', color: 'primary.main', mt: 2 }}
                  >
                    Mục tiêu đề tài:
                  </Typography>
                  <Typography sx={{ color: 'text.primary' }}>
                    <Typography
                      variant='body1'
                      dangerouslySetInnerHTML={{ __html: data?.topic?.target }}
                    />
                  </Typography>

                  <Typography
                    variant='h6'
                    sx={{ fontWeight: 'bold', color: 'primary.main', mt: 2 }}
                  >
                    Chuẩn đầu ra:
                  </Typography>
                  <Typography sx={{ color: 'text.primary' }}>
                    <Typography
                      variant='body1'
                      dangerouslySetInnerHTML={{ __html: data?.topic?.standardOutput }}
                    />{' '}
                  </Typography>

                  <Typography
                    variant='h6'
                    sx={{ fontWeight: 'bold', color: 'primary.main', mt: 2 }}
                  >
                    Yêu cầu sinh viên:
                  </Typography>
                  <Typography sx={{ color: 'text.primary' }}>
                    <Typography
                      variant='body1'
                      dangerouslySetInnerHTML={{ __html: data?.topic?.requireInput }}
                    />{' '}
                  </Typography>

                  <Typography
                    variant='h6'
                    sx={{ fontWeight: 'bold', color: 'primary.main', mt: 2 }}
                  >
                    Thông tin giảng viên hướng dẫn:
                  </Typography>
                  <Typography sx={{ color: 'grey.600' }}>
                    Họ và tên:{data?.topic?.lecturerTerm.lecturer.fullName}
                  </Typography>
                  <Typography sx={{ color: 'grey.600' }}>
                    Email: {data?.topic?.lecturerTerm.lecturer.email}
                  </Typography>
                  <Typography sx={{ color: 'grey.600' }}>
                    Sđt liên hệ: {data?.topic?.lecturerTerm.lecturer.phone}
                  </Typography>
                </Box>
                <Box my={10} px={5}>
                  <Button
                    onClick={() => handleOpenModalCancel(groupFetch?.group.info?.id)}
                    disabled={partOfTerm.ChooseTopic?.status === ENUM_STATUS_OF_DATE_TERM.EXPIRED}
                    sx={{
                      bgcolor: '#ffdbdb',
                      color: 'error.dark',
                      borderRadius: 2,
                      width: '100%',
                    }}
                  >
                    <Icon width={24} style={{ marginRight: 10 }} icon='tabler:folder-cancel' />
                    Hủy đăng ký đề tài
                  </Button>
                </Box>
              </Box>
            ) : (
              <Box px={'25px'}>
                <Typography variant='h6' fontWeight={'700'} color='#0D0140'>
                  Đề tài của tôi
                </Typography>
                <Box
                  flexDirection={'column'}
                  height={'70vh'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  display={'flex'}
                >
                  <DotLottieReact
                    style={{
                      width: '300px',
                      height: '300px',
                    }}
                    src='https://lottie.host/d5ee136a-961a-4bc7-bfa6-709dcb8e1038/WNAl4pFATV.json'
                    loop
                    autoplay
                  />
                  <Typography
                    sx={{
                      position: 'relative',
                      top: -10,
                    }}
                    variant='h6'
                    textAlign={'center'}
                    fontWeight={'500'}
                    color='grey.600'
                  >
                    Bạn chưa có đề tài
                  </Typography>
                  <Button variant='contained' onClick={() => navigate('/topics')}>
                    Đăng ký đề tài{' '}
                  </Button>
                </Box>
              </Box>
            )}
          </>
        )}
        <CancelModal
          open={openModalCancel.isOpen}
          groupId={openModalCancel.groupId}
          onClose={handleCloseModalCancel}
        />
      </Box>
    </>
  );
}

export default MyTopicMobile;
