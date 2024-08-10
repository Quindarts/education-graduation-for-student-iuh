import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import bn1 from '/images/sl01.webp';
import bn2 from '/images/sl02.webp';
import bn3 from '/images/sl03.webp';
import bn4 from '/images/sl04.webp';
import bn5 from '/images/sl05.webp';
import bn6 from '/images/sl06.webp';
import { Box, Typography } from '@mui/material';
import './BannerSection.css'; // Import your CSS file

function BannerSection() {
  return (
    <Box
      sx={{
        display: {
          xs: 'none',
          md: 'block',
        },
      }}
      px={20}
      py={10}
      bgcolor={'#02285e'}
    >
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        style={{
          borderRadius: 2,
          position: 'relative',
        }}
        modules={[Pagination, Autoplay]}
        className='mySwiper'
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        <SwiperSlide className='zoomSlide'>
          <img
            style={{ display: 'block', height: '540px', objectFit: 'cover', width: '100%' }}
            src={bn5}
            alt='Toàn cảnh khuôn viên Đại học Công nghiệp TP.HCM'
          />
          <Typography
            variant='h4'
            sx={{
              position: 'absolute',
              bottom: 50,
              left: 70,
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            Toàn cảnh khuôn viên Đại học Công nghiệp TP.HCM
          </Typography>
        </SwiperSlide>
        <SwiperSlide className='zoomSlide'>
          <img
            style={{ display: 'block', height: '540px', objectFit: 'cover', width: '100%' }}
            src={bn6}
            alt='Sinh viên Đại học Công nghiệp TP.HCM'
          />
          <Typography
            variant='h4'
            sx={{
              position: 'absolute',
              bottom: 50,
              left: 70,
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            Giảng viên khoa Công nghệ Thông tin Trường Đại học Công nghiệp TP.HCM
          </Typography>
        </SwiperSlide>
        <SwiperSlide className='zoomSlide'>
          <img
            style={{ display: 'block', height: '540px', objectFit: 'cover', width: '100%' }}
            src={bn1}
            alt='Sinh viên Đại học Công nghiệp TP.HCM'
          />
          <Typography
            variant='h4'
            sx={{
              position: 'absolute',
              bottom: 50,
              left: 70,
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            Sinh viên Đại học Công nghiệp TP.HCM
          </Typography>
        </SwiperSlide>
        <SwiperSlide className='zoomSlide'>
          <img
            style={{ display: 'block', height: '540px', objectFit: 'cover', width: '100%' }}
            src={bn2}
            alt='Khoa Công nghệ Thông tin tại Đại học Công nghiệp TP.HCM'
          />
          <Typography
            variant='h4'
            sx={{
              position: 'absolute',
              bottom: 50,
              left: 70,
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            Khoa Công nghệ Thông tin tại Đại học Công nghiệp TP.HCM
          </Typography>
        </SwiperSlide>
        <SwiperSlide className='zoomSlide'>
          <img
            style={{ display: 'block', height: '540px', objectFit: 'cover', width: '100%' }}
            src={bn3}
            alt='Đại học công nghiệp Tp.HCM năm học 2024-2025'
          />
          <Typography
            variant='h4'
            sx={{
              position: 'absolute',
              bottom: 50,
              left: 70,
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            Đại học Công nghiệp Tp.HCM năm học 2024-2025
          </Typography>
        </SwiperSlide>
        <SwiperSlide className='zoomSlide'>
          <img
            style={{ display: 'block', height: '540px', objectFit: 'cover', width: '100%' }}
            src={bn4}
            alt='Tòa Nhà E Đại học Công nghiệp Tp.HCM'
          />
          <Typography
            variant='h4'
            sx={{
              position: 'absolute',
              bottom: 50,
              left: 70,
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            Tòa Nhà E Đại học Công nghiệp Tp.HCM
          </Typography>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}

export default BannerSection;
