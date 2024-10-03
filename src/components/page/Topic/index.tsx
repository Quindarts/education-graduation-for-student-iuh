import CustomTextField from '@/components/ui/CustomTextField';
import SekeletonUI from '@/components/ui/Sekeleton';
import TitleManager from '@/components/ui/Title';
import useTopic from '@/hook/api/useTopic';
import { stripHtmlTags } from '@/utils/convertHtmlText';
import { Icon } from '@iconify/react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from '@mui/material';
import { GridExpandMoreIcon } from '@mui/x-data-grid';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function TopicOfGroupSection({ topicId }: any) {
  const { HandleGetMyTopic } = useTopic();

  const { data, isFetching, isLoading } = HandleGetMyTopic(topicId);
  const navigate = useNavigate();
  return (
    <>
      {/**  LECTURER SUPPORT */}
      <Accordion disableGutters sx={{ px: 10 }}>
        <AccordionSummary
          expandIcon={<GridExpandMoreIcon color='primary' />}
          aria-controls='panel-topic-content'
          id='panel-topic-header'
        >
          <TitleManager color={'grey.900'} fontWeight={500} variant='h5'>
            Giảng viên hướng dẫn
          </TitleManager>
        </AccordionSummary>
        <AccordionDetails>
          {isLoading || isFetching ? (
            <SekeletonUI />
          ) : (
            <>
              {!data?.topic ? (
                <Box
                  mx={'auto'}
                  display={'flex'}
                  flexDirection={'column'}
                  alignContent={'center'}
                  justifyContent={'center'}
                  textAlign={'center'}
                  py={20}
                  width={'100%'}
                >
                  <Box>
                    <img
                      style={{ opacity: 0.7 }}
                      width={150}
                      height={150}
                      src='/images/nodata.webp'
                      alt='nodata'
                    />
                  </Box>
                  <Typography variant='h3' sx={{ mt: 2 }}>
                    Chưa có giảng viên hướng dẫn
                  </Typography>
                  <Box mt={4}>
                    <Button variant='contained' onClick={() => navigate('/topics')}>
                      <Icon style={{ marginRight: 4 }} icon='fluent-mdl2:leave' />
                      Đăng ký đề tài ngay
                    </Button>
                  </Box>
                </Box>
              ) : (
                <Box sx={{ lineHeight: '2em' }} px={10} py={4}>
                  <Typography variant='h5' fontWeight={400} color='grey.700'>
                    Họ và tên giảng viên: {'  '} {data?.topic?.lecturerTerm?.lecturer.fullName}
                  </Typography>
                  <Typography variant='h6' fontWeight={400} color='grey.700'>
                    Email liên hệ: {'  '} {data?.topic.lecturerTerm?.lecturer.email}
                  </Typography>
                  <Typography variant='h6' fontWeight={400} color='grey.700'>
                    Số điện thoại: {'  '} {data?.topic.lecturerTerm?.lecturer.phone}
                  </Typography>
                </Box>
              )}
            </>
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters sx={{ px: 10, borderTop: '1px solid #4a97f0' }}>
        <AccordionSummary
          expandIcon={<GridExpandMoreIcon color='primary' />}
          aria-controls='panel-topic-content'
          id='panel-topic-header'
        >
          <TitleManager variant='h5' fontWeight={'500'} color={'primary.dark'}>
            Đề tài: {'  '} {data?.topic?.name}
          </TitleManager>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: 'white', borderRadius: 3, px: 10 }}>
          {isLoading || isFetching ? (
            <SekeletonUI />
          ) : (
            <>
              {' '}
              {!data?.topic ? (
                <Box
                  mx={'auto'}
                  display={'flex'}
                  flexDirection={'column'}
                  alignContent={'center'}
                  justifyContent={'center'}
                  textAlign={'center'}
                  py={20}
                  width={'100%'}
                >
                  <Box>
                    <img
                      style={{ opacity: 0.7 }}
                      width={200}
                      height={200}
                      src='/images/nodata.webp'
                      alt='nodata'
                    />
                  </Box>
                  <Typography variant='h3' sx={{ mt: 2 }}>
                    Nhóm chưa có Đề tài
                  </Typography>
                </Box>
              ) : (
                <Box pb={8}>
                  <Typography my={4} fontWeight={500} variant='h6'>
                    Mô tả
                    <CustomTextField
                      disabled
                      multiline
                      value={stripHtmlTags(data?.topic?.description)}
                      maxRows={8}
                    />
                  </Typography>
                  <Typography my={4} fontWeight={500} variant='h6'>
                    Dự kiến sản phẩm nghiên cứu của Đề tài và khả năng ứng dụng
                    <CustomTextField
                      disabled
                      multiline
                      value={stripHtmlTags(data?.topic?.expectedResult)}
                      maxRows={8}
                    />
                    <Typography fontWeight={400} px={2} variant='body1'></Typography>
                  </Typography>
                  <Typography my={4} fontWeight={500} variant='h6'>
                    Mục tiêu cần đạt được
                    <CustomTextField disabled multiline value={stripHtmlTags(data?.topic?.target)} maxRows={8} />
                  </Typography>
                  <Typography my={4} fontWeight={500} variant='h6'>
                    Yêu cầu đầu vào
                    <CustomTextField
                      disabled
                      multiline
                      value={stripHtmlTags(data?.topic?.requireInput)}
                      maxRows={8}
                    />
                  </Typography>
                  <Typography my={4} fontWeight={500} variant='h6'>
                    Chuẩn đầu ra
                    <CustomTextField
                      disabled
                      multiline
                      value={stripHtmlTags(data?.topic?.standardOutput)}
                      maxRows={12}
                    />
                    <Typography fontWeight={400} px={2} variant='body1'></Typography>
                  </Typography>
                </Box>
              )}
            </>
          )}
        </AccordionDetails>
      </Accordion>{' '}
    </>
  );
}

export default TopicOfGroupSection;
