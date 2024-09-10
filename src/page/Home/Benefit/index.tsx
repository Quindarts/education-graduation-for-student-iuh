import AnimatedSection from '@/components/ui/Animated/AnimatedSection';
import { Box, Grid, Typography } from '@mui/material';

function Benefits() {
  return (
    <Box
      sx={{
        padding: {
          xs: 10,
          md: '80px 20px',
        },
        backgroundColor: 'white',
      }}
    >
      <Typography
        variant='h1'
        fontWeight={'bold'}
        color={'#f28234'}
        align='center'
        sx={{
          fontSize: {
            xs: 20,
            md: 36,
          },
        }}
        gutterBottom
      >
        Hỗ trợ sinh viên và giảng viên quản lý khóa luận thông minh
      </Typography>
      <Grid container spacing={{ xs: 1, md: 3 }} sx={{ marginTop: '60px' }}>
        {[
          {
            text: 'Tăng cường hiệu quả quản lý và theo dõi',
            image: '/images/undraw_speed.webp',
          },
          {
            text: 'Hỗ trợ nâng cao chất lượng khóa luận',
            image: '/images/undraw_for_review_eqxk.webp',
          },
          {
            text: 'Bảo mật thông tin và dễ dàng truy cập tài liệu',
            image: '/images/undraw_Security_on_re_e491.webp',
          },
        ].map((benefit, index) => (
          <Grid item xs={12} md={4} key={index}>
            <AnimatedSection direction='right'>
              <Box
                sx={{
                  textAlign: 'center',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    cursor: 'pointer',
                    transition: 'transform 0.6s ease-in',
                  },
                  margin: {
                    xs: 10,
                    md: 0,
                  },
                }}
              >
                <img height={150} width={200} src={benefit.image} alt={benefit.text} />
                <Typography fontWeight={'400'} color={'grey.600'} variant='h5'>
                  {benefit.text}
                </Typography>
              </Box>
            </AnimatedSection>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Benefits;
