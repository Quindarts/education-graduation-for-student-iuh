import CustomTextField from '@/components/ui/CustomTextField';
import Modal from '@/components/ui/Modal';
import { Icon } from '@iconify/react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Paper,
  Typography,
} from '@mui/material';
import { GridExpandMoreIcon } from '@mui/x-data-grid';
import dayjs from 'dayjs';
import React from 'react';

function DetailGroupModal(props) {
  const { onClose, open, groupId } = props;
  const groupStudent = {
    lecturerId: null,
    created_at: null,
    topic: null,
  };
  return (
    <Modal onClose={onClose} open={open}>
      <Box my={5} display='flex' gap={10} px={10}>
        <Paper sx={{ mt: 8, p: 4, width: '100%' }}>
          <Typography fontWeight={600} color={'text.primary'} mb={2} variant='h6'>
            <Icon icon='flat-color-icons:info' style={{ margin: ' 0 4px' }} />
            Thông tin cơ bản
          </Typography>
          <Typography color={'text.primary'} variant='body1'>
            Tên sinh viên 1 : {groupStudent.lecturerId ? groupStudent.lecturerId : 'Chưa có'}
          </Typography>
          <Typography color={'text.primary'} variant='body1'>
            Tên sinh viên 2 : {groupStudent.lecturerId ? groupStudent.lecturerId : 'Chưa có'}
          </Typography>
        </Paper>
      </Box>
      {/* <Box position={'relative'} px={10} my={8}>
        <Box px={10} sx={{ position: 'absolute', top: 10, zIndex: 10, left: '-20px' }}>
          <Icon width={50} color='red' icon='game-icons:achievement' />
        </Box>
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
            {!groupStudent.topic ? (
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
                    src='/images/nodata.png'
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
                  Tên đề tài: {'  '} {groupStudent?.topic.name}
                </Typography>
                <Typography my={4} fontWeight={500} variant='h6'>
                  Mô tả
                  <CustomTextField
                    disabled
                    multiline
                    value={groupStudent?.topic.description}
                    maxRows={8}
                  />
                  <Typography fontWeight={400} px={2} variant='body1'></Typography>
                </Typography>
                <Typography my={4} fontWeight={500} variant='h6'>
                  Mục tiêu cần đạt được
                  <CustomTextField
                    disabled
                    multiline
                    value={groupStudent?.topic.target}
                    maxRows={8}
                  />
                </Typography>
                <Typography my={4} fontWeight={500} variant='h6'>
                  Yêu cầu đầu vào
                  <CustomTextField
                    disabled
                    multiline
                    value={groupStudent?.topic.require_input}
                    maxRows={8}
                  />
                </Typography>
                <Typography my={4} fontWeight={500} variant='h6'>
                  Chuẩn đầu ra
                  <CustomTextField
                    disabled
                    multiline
                    value={groupStudent?.topic.standard_output}
                    maxRows={12}
                  />
                  <Typography fontWeight={400} px={2} variant='body1'></Typography>
                </Typography>
              </Box>
            )}
          </AccordionDetails>
        </Accordion>
      </Box> */}
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
