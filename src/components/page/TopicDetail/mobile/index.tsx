import SekeletonUI from '@/components/ui/Sekeleton';
import useTopic from '@/hook/api/useTopic';
import { Icon } from '@iconify/react';
import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ChooseModal from '../../Topic/Modal/ChooseModal';
import { ENUM_STATUS_OF_DATE_TERM } from '@/utils/validations/term.validation';
import useTermStore from '@/store/termStore';

function TopicDetailMobile() {
  const { pathname } = useLocation();
  const current = pathname.split('/');
  const topicId = `${current[current.length - 1]}`;
  const { HandleGetTopicById } = useTopic();
  const { data, isLoading, isFetching } = HandleGetTopicById(topicId);
  const navigate = useNavigate();

  const [openChooseModal, setOpenChooseModal] = useState({ topicId: '', isOpen: false });
  const handleCloseChooseModal = () => {
    setOpenChooseModal({ ...openChooseModal, isOpen: false });
  };
  const handleOpenChooseModal = (topicId: string) => {
    setOpenChooseModal({ topicId, isOpen: true });
  };
  const { partOfTerm } = useTermStore();

  return (
    <>
      <Box>
        {isLoading || isFetching ? (
          <SekeletonUI />
        ) : (
          <>
            {data && (
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
                    Tên Đề tài: {data?.topic?.name}{' '}
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
                      dangerouslySetInnerHTML={{ __html: data.topic.description }}
                    />{' '}
                  </Typography>

                  <Typography
                    variant='h6'
                    sx={{ fontWeight: 'bold', color: 'primary.main', mt: 2 }}
                  >
                    Số lượng nhóm đề tài tối đa: {data.topic.quantityGroupMax}
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
                      dangerouslySetInnerHTML={{ __html: data.topic.target }}
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
                      dangerouslySetInnerHTML={{ __html: data.topic.standardOutput }}
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
                      dangerouslySetInnerHTML={{ __html: data.topic.requireInput }}
                    />{' '}
                  </Typography>

                  <Typography
                    variant='h6'
                    sx={{ fontWeight: 'bold', color: 'primary.main', mt: 2 }}
                  >
                    Thông tin giảng viên hướng dẫn:
                  </Typography>
                  <Typography sx={{ color: 'grey.600' }}>
                    Họ và tên:{data.topic.lecturerTerm.lecturer.fullName}
                  </Typography>
                  <Typography sx={{ color: 'grey.600' }}>
                    Email: {data.topic.lecturerTerm.lecturer.email}
                  </Typography>
                  <Typography sx={{ color: 'grey.600' }}>
                    Sđt liên hệ: {data.topic.lecturerTerm.lecturer.phone}
                  </Typography>
                </Box>
                <Box my={10} px={5}>
                  {partOfTerm.ChooseTopic?.status === ENUM_STATUS_OF_DATE_TERM.ACTIVE && (
                    <Button
                      onClick={() => handleOpenChooseModal(topicId)}
                      sx={{
                        bgcolor: '#dbffea',
                        color: 'success.dark',
                        borderRadius: 2,
                        width: '100%',
                      }}
                    >
                      Chọn đề tài{' '}
                    </Button>
                  )}
                </Box>
              </Box>
            )}
          </>
        )}
      </Box>
      <ChooseModal
        open={openChooseModal.isOpen}
        onClose={handleCloseChooseModal}
        topicId={openChooseModal.topicId}
      />
    </>
  );
}

export default TopicDetailMobile;
