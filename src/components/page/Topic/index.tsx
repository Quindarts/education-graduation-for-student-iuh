import CustomTextField from '@/components/ui/CustomTextField';
import SekeletonUI from '@/components/ui/Sekeleton';
import useTopic from '@/hook/api/useTopic';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import { GridExpandMoreIcon } from '@mui/x-data-grid';
import React from 'react';

function TopicOfGroupSection({ topicId }: any) {
  const { HandleGetMyTopic } = useTopic();

  const { data, isFetching, isLoading } = HandleGetMyTopic(topicId);
  
  return (
    <Accordion sx={{ px: 10, borderTop: '5px solid #0052b1' }} defaultExpanded>
      <AccordionSummary
        expandIcon={<GridExpandMoreIcon color='primary' />}
        aria-controls='panel-topic-content'
        id='panel-topic-header'
      >
        <Typography variant='h6' fontWeight={600}>
          Thông tin đề tài
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
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
                <Typography variant='h3' textAlign={'center'} fontWeight={600} color='primary.dark'>
                  Tên đề tài: {'  '} {data?.topic?.name}
                </Typography>
                <Typography variant='h6' textAlign={'center'} fontWeight={600} color='success.main'>
                  GVHD: {'  '} {data?.topic.lecturerTerm?.lecturer.fullName}
                </Typography>
                <Typography my={4} fontWeight={500} variant='h6'>
                  Mô tả
                  <CustomTextField
                    disabled
                    multiline
                    value={data?.topic?.description}
                    maxRows={8}
                  />
                  <Typography fontWeight={400} px={2} variant='body1'></Typography>
                </Typography>
                <Typography my={4} fontWeight={500} variant='h6'>
                  Mục tiêu cần đạt được
                  <CustomTextField disabled multiline value={data?.topic?.target} maxRows={8} />
                </Typography>
                <Typography my={4} fontWeight={500} variant='h6'>
                  Yêu cầu đầu vào
                  <CustomTextField
                    disabled
                    multiline
                    value={data?.topic?.requireInput}
                    maxRows={8}
                  />
                </Typography>
                <Typography my={4} fontWeight={500} variant='h6'>
                  Chuẩn đầu ra
                  <CustomTextField
                    disabled
                    multiline
                    value={data?.topic?.standardOutput}
                    maxRows={12}
                  />
                  <Typography fontWeight={400} px={2} variant='body1'></Typography>
                </Typography>
              </Box>
            )}
          </>
        )}
      </AccordionDetails>
    </Accordion>
  );
}

export default TopicOfGroupSection;
