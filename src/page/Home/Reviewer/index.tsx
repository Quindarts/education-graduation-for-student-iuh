import { Box, Grid, Typography } from '@mui/material';

function ReviewSection() {
  return (
    <Box sx={{ padding: '50px 20px', backgroundColor: '#fafafa' }}>
      <Typography variant='h4' align='center' gutterBottom>
        Đánh giá từ người dùng
      </Typography>
      <Grid container spacing={3} sx={{ marginTop: '30px' }}>
        {[
          {
            text: 'Phần mềm đã giúp tôi theo dõi và hỗ trợ sinh viên một cách hiệu quả hơn.',
            author: 'Tên Giảng viên',
          },
          {
            text: 'Quản lý khóa luận trở nên dễ dàng và tiết kiệm thời gian với phần mềm này.',
            author: 'Tên Sinh viên',
          },
        ].map((testimonial, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Typography variant='h6' align='center'>
              "{testimonial.text}"
            </Typography>
            <Typography variant='subtitle1' align='center' sx={{ marginTop: '10px' }}>
              - {testimonial.author}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ReviewSection;
