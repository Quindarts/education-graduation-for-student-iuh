import TitleManager from '@/components/ui/Title';
import { Box, Button, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useGroupStudent from '@/hook/api/useGroupStudent';
import SekeletonUI from '@/components/ui/Sekeleton';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import CustomTextField from '@/components/ui/CustomTextField';
import CardGroupLecturer from '@/components/ui/CardGroupLecturer';

function MyGroupLecturerDesktop() {
  const { HandleGetMyGroupStudent, OnSubmitReviewDocument } = useGroupStudent();
  const { data, isLoading, refetch } = HandleGetMyGroupStudent();
  const { mutate: submitLink } = OnSubmitReviewDocument();
  const [link, setLink] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    refetch();
  }, []);
  useEffect(() => {
    if (data?.group?.info?.link) {
      setLink(data.group?.info?.link);
    }
  }, [data]);

  const handleSubmitLink = (groupId) => {
    submitLink({ groupId, link });
  };
  return (
    <Paper sx={{ my: 2, px: 10, py: 6, borderRadius: 2 }} elevation={0}>
      <TitleManager
        textTransform={'uppercase'}
        fontWeight={'bold'}
        variant='h6'
        icon='material-symbols:groups-2'
      >
        Danh sách Nhóm giảng viên chấm điểm đề tài của tôi
      </TitleManager>

      <Box width={'100%'} minHeight={500}>
        {' '}
        {isLoading ? (
          <SekeletonUI />
        ) : (
          <>
            {!data ? (
              <Box
                mx={'auto'}
                display={'flex'}
                flexDirection={'column'}
                alignContent={'center'}
                justifyContent={'center'}
                textAlign={'center'}
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
                  Bạn Chưa có Nhóm
                </Typography>
                <Box>
                  <Button variant='contained' onClick={() => navigate('/group-students')}>
                    <Icon icon='fluent-mdl2:leave' />
                    Đăng ký nhóm ngay
                  </Button>
                </Box>
              </Box>
            ) : (
              <>
                <Box minHeight={400} flex={1} px={4} py={2}>
                  <Box mt={4} display={'flex'} flexDirection={'column'}>
                    <Box sx={{ display: 'flex', gap: 10, py: 10, flexWrap: 'wrap' }}>
                      {data?.group?.groupLecturers?.map((group) => (
                        <CardGroupLecturer group={group} />
                      ))}
                    </Box>
                    <Box
                      mr={2}
                      alignSelf={'flex-end'}
                      display={'flex'}
                      width={'100%'}
                      justifyContent={'space-between'}
                    >
                      <Box sx={{ display: 'flex', gap: 6, width: '100%' }}>
                        <Box sx={{ flex: 1 }}>
                          <CustomTextField
                            size='medium'
                            label='Nộp link báo cáo phản biện'
                            value={link}
                            defaultValue={data.group?.info?.link}
                            onChange={(e) => setLink(e.target.value)}
                            placeholder='Nhập link báo cáo phản biện'
                          />
                          <Typography variant='body1' color='error.dark'>
                            Lưu ý*: Link google drive phải được bật chế độ{' '}
                            <span style={{ color: 'red', fontWeight: 'bold' }}>
                              "chia sẻ công khai"
                            </span>{' '}
                            Mỗi nhóm nộp link google drive báo cáo phản biện. Nội dung file bao gồm:
                            <i>
                              file txt chứa source code, video clip giới thiệu hệ thống (5 -10
                              phút), file báo cáo word, powerpoint giới thiệu hệ thống, thời gian
                              nộp được thông báo khi giảng viên quản lý khóa luận thông báo.
                            </i>
                            <span style={{ color: 'red', fontWeight: 'bold' }}>
                              {' '}
                              Hội đồng phản biện sử dụng các nội dung trong link này để đánh giá và
                              chấm điểm.
                            </span>
                          </Typography>
                        </Box>
                        <Button
                          onClick={() => handleSubmitLink(data.group.info.id)}
                          size='large'
                          sx={{ width: 120, height: 48, mt: 15 }}
                          color='success'
                          variant='contained'
                        >
                          Nộp bài
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </>
            )}
          </>
        )}
      </Box>
    </Paper>
  );
}

export default MyGroupLecturerDesktop;
