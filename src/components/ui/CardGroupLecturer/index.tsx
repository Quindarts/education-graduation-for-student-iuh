import { checktTypeGroupLecturer } from '@/utils/validations/groupLecturer.validation';
import { Card, CardContent, CardMedia, Typography, CardActions, Box } from '@mui/material';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

function CardGroupLecturer(props: any) {
  const { group } = props;
  return (
    <Card
      sx={{
        border: '1px solid #e7e5e5',
        minHeight: 200,
        flex: 1,
      }}
      elevation={0}
    >
      <CardMedia
        component='img'
        alt='green iguana'
        height={75}
        sx={{
          objectFit: 'contain',
        }}
        image='/images/performance.png'
      />
      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          textTransform={'uppercase'}
          color='primary.main'
          mb={4}
          fontWeight={600}
          component='div'
        >
          {checktTypeGroupLecturer(group.type.toLowerCase())}
        </Typography>
        <Typography variant='h6' fontWeight={'bold'} color=''>
          Giảng viên chấm điểm
        </Typography>
        {group?.members.map((mem: any, index) => (
          <Box mx={2} mb={2}>
            <Typography variant='h6' color='grey.600'>
              {mem.fullName}
            </Typography>
          </Box>
        ))}

        <Box sx={{ mb: 4 }}>
          <Typography variant='h6' fontWeight={'bold'} color=''>
            Thông tin chi tiết
          </Typography>
          <Box mx={4}>
            <Typography mb={2} display={'block'} fontWeight={'500'} color='primary.main'>
              Địa điểm {group.location}
            </Typography>
            <Typography mb={2} display={'block'} fontWeight={'500'} color='primary.main'>
              Bắt đầu {dayjs(group?.startDate).format('DD/MM/YYYY hh:mm:ss A')}
            </Typography>
            <Typography
              mb={2}
              display={'block'}
              fontWeight={'500'}
              color='primary.main'
            >
              Kết thúc {dayjs(group?.endDate).format('DD/MM/YYYY hh:mm:ss A')}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CardGroupLecturer;
