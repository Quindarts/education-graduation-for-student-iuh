import { Box, Grid, Typography } from '@mui/material';

function Features() {
  return (
    <Box sx={{ padding: '50px 20px', backgroundColor: '#e0f7fa' }}>
      <Typography variant='h4' align='center' gutterBottom>
        Tính năng nổi bật
      </Typography>
      <Grid container spacing={3} sx={{ marginTop: '30px' }}>
        {[
          'Tạo và cập nhật thông tin khóa luận',
          'Theo dõi tiến độ',
          'Lưu trữ và truy cập tài liệu',
        ].map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Typography variant='h6' align='center'>
              {feature}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Features;
