import SekeletonUI from '@/components/ui/Sekeleton';
import useTopic from '@/hook/api/useTopic';
import { Icon } from '@iconify/react';
import { Typography, Paper, Box, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';


function TopicDetailDesktop() {
  const { pathname } = useLocation();
  const current = pathname.split('/');
  const topicId = `${current[current.length - 1]}`;
  const { HandleGetTopicById } = useTopic();
  const { data, isLoading, isFetching } = HandleGetTopicById(topicId);

  return (
    <Paper>
      {isLoading || isFetching ? (
        <SekeletonUI />
      ) : (
        <>
          {data && (
            <Box>
              <Paper elevation={0} sx={{ pt: 10, pb: 20, px: 20 }}>
                <Typography
                  variant='h4'
                  color={'grey.700'}
                  fontWeight={'600'}
                  gutterBottom
                  mb={10}
                >
                  <Icon icon='grommet-icons:book' style={{ marginRight: '5px' }} />
                  {data?.topic?.name}
                </Typography>

                <Typography
                  textTransform='uppercase'
                  color='grey.700'
                  mt={6}
                  fontWeight='600'
                  variant='body1'
                  gutterBottom
                >
                  Mô tả đề tài:
                </Typography>
                <Typography
                  variant='body1'
                  gutterBottom
                  dangerouslySetInnerHTML={{ __html: data.topic.description }}
                />
                <Typography
                  textTransform='uppercase'
                  color='grey.700'
                  mt={6}
                  fontWeight='600'
                  variant='body1'
                >
                  Số lượng nhóm đề tài tối đa: {data.topic.quantityGroupMax}
                </Typography>

                <Box sx={{ marginTop: 2 }}>
                  <Typography
                    textTransform='uppercase'
                    color='grey.700'
                    mt={6}
                    fontWeight='600'
                    variant='body1'
                  >
                    Mục tiêu đề tài
                  </Typography>
                  <Typography
                    variant='body1'
                    dangerouslySetInnerHTML={{ __html: data.topic.target }}
                  />
                </Box>

                <Box sx={{ marginTop: 2 }}>
                  <Typography
                    textTransform='uppercase'
                    color='grey.700'
                    mt={6}
                    fontWeight='600'
                    variant='body1'
                  >
                    Chuẩn đầu ra{' '}
                  </Typography>
                  <Typography
                    variant='body1'
                    dangerouslySetInnerHTML={{ __html: data.topic.standardOutput }}
                  />
                </Box>

                <Box sx={{ marginTop: 2 }}>
                  <Typography
                    textTransform='uppercase'
                    color='grey.700'
                    mt={6}
                    fontWeight='600'
                    variant='body1'
                  >
                    Yêu cầu sinh viên:
                  </Typography>
                  <Typography
                    variant='body1'
                    dangerouslySetInnerHTML={{ __html: data.topic.requireInput }}
                  />
                </Box>

                <Box sx={{ marginTop: 6 }}>
                  <Typography
                    textTransform='uppercase'
                    color='grey.700'
                    mt={6}
                    fontWeight='600'
                    variant='body1'
                  >
                    Thông tin giảng viên hướng dẫn
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary={data.topic.lecturerTerm.lecturer.fullName}
                        secondary={
                          <>
                            <Typography component='span' variant='body2' color='textPrimary'>
                              {data.topic.lecturerTerm.lecturer.email}
                            </Typography>
                            {' — '}
                            {data.topic.lecturerTerm.lecturer.phone}
                          </>
                        }
                      />
                    </ListItem>
                  </List>
                </Box>
              </Paper>
            </Box>
          )}
        </>
      )}
    </Paper>
  );
}

export default TopicDetailDesktop;
