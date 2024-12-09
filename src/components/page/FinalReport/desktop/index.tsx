import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
} from '@mui/material';
import { Icon } from '@iconify/react';
import dayjs from 'dayjs';
import CardFile from '@/components/ui/CardFile';
import useUploadFile from '@/hook/ui/useUpload';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { env } from '@/utils/env';
import useFinalReport from '@/hook/api/useFinalReport';
import { link } from 'fs';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: '100%',
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: '100%',
});

function FinalReportDesktop() {
  const { HandleGetFinalReport } = useFinalReport();
  const { finalReport, isLoading, isFetching } = HandleGetFinalReport();
  const {
    importFileToForm,
    setCurrentFile,
    submitFinalReport,
    updateFinalReport,
    currentFile,
    fileName,
    valueLoading,
    totalSize,
  } = useUploadFile();

  const onClearFormFile = () => {
    setCurrentFile(undefined);
  };

  const onPreviewSubmit = () => {
    const fullUrl = `${env.API_URL}${finalReport?.link}`;
    window.open(fullUrl, '_blank');
  };
  return (
    <Paper
      sx={{
        padding: '20px 30px',
        minHeight: '70vh',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box mb={20}>
        <Typography variant='h5' fontWeight='700' textTransform={'uppercase'} color='primary.main'>
          <Box
            px={6}
            mr={2}
            borderRadius={2}
            py={4}
            component={'span'}
            bgcolor={'grey.200'}
            display='inline-flex'
          >
            <Icon icon='noto:books' width={24} />
          </Box>{' '}
          Nộp báo cáo kết thúc khóa luậ tốt nghiệp
        </Typography>
      </Box>

      <Table
        sx={{
          '& .MuiTableCell-root': {
            fontSize: '16px',
            padding: '12px',
          },
          marginBottom: '20px',
        }}
      >
        <TableBody>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Định dạng file đính kèm</TableCell>
            <TableCell component={'i'} sx={{ color: 'error.main' }}>
              PDF (Kích thước tối đa 10MB){'. Đây là file báo cáo cuối cùng và không thể chỉnh sửa và được lưu trữ lâu dài.'} 
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Phản hồi từ giảng viên</TableCell>
            <TableCell>
              <Button
                sx={{
                  padding: '2px 8px',
                  textTransform: 'none',
                  color: 'grey.700',
                  fontSize: 14,
                }}
                variant='text'
                startIcon={<Icon icon='mdi:comment-outline' />}
              >
                {finalReport?.comment ? finalReport?.comment : 'Chưa có phản hồi'}
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Trạng thái</TableCell>
            <TableCell>
              {finalReport && finalReport?.link !== null && finalReport?.link !== '' ? (
                <Tooltip title='Xem chi tiết'>
                  <Button
                    sx={{
                      padding: '2px 8px',
                      textTransform: 'none',
                      fontWeight: 'bold',
                      border: '2px solid #b8f4cf',
                      background: '#e7fff1',
                    }}
                    onClick={() => onPreviewSubmit()}
                    color='success'
                    variant='text'
                    startIcon={<Icon icon='carbon:finalReport-view-alt' />}
                  >
                    <Typography
                      sx={{
                        textTransform: 'uppercase',
                        color: 'success.main',
                        fontWeight: 'bold',
                      }}
                      variant='h6'
                      mx={10}
                    >
                      Đã nộp bài
                    </Typography>
                    {finalReport?.link?.split('/')[2]}
                  </Button>
                </Tooltip>
              ) : (
                <Button
                  sx={{
                    padding: '2px 8px',
                    textTransform: 'none',
                  }}
                  variant='text'
                  color='error'
                  startIcon={<Icon icon='hugeicons:file-not-found' />}
                >
                  Chưa nộp
                </Button>
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>
              File tải lên
              {currentFile && (
                <Button color='error' onClick={onClearFormFile}>
                  Xóa file ?
                </Button>
              )}
            </TableCell>
            <TableCell>
              {!currentFile ? (
                <Typography>
                  <Button
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      py: 10,
                      height: 100,
                      border: '1px solid #ccc',
                    }}
                    disabled={dayjs() > dayjs(finalReport?.endDate)}
                    component='label'
                    startIcon={<Icon icon='tdesign:file-add' />}
                  >
                    Để lưu thay đổi, vui lòng thêm file mới.
                    <VisuallyHiddenInput type='file' onChange={(e) => importFileToForm(e)} />
                  </Button>
                </Typography>
              ) : (
                <CardFile fileName={fileName} totalSize={totalSize} valueLoading={valueLoading} />
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mt: 3,
        }}
      >
        <Button
          sx={{
            padding: '10px 20px',
            textTransform: 'none',
            borderRadius: 2,
            fontSize: '16px',
            width: 'fit-content',
            mx: 'auto',
          }}
          color={finalReport?.link ? 'warning' : 'primary'}
          variant='contained'
          disabled={currentFile === undefined}
          onClick={() => submitFinalReport(currentFile)}
          startIcon={<Icon icon='mingcute:save-line' />}
        >
          Submit báo cáo
        </Button>
      </Box>
    </Paper>
  );
}

export default FinalReportDesktop;
