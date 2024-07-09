import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import bn1 from '../../../../public/images/sl01.jpg';
import bn2 from '../../../../public/images/sl02.png';
import { Box } from '@mui/material';

function BannerSection() {
  return (
    <Box px={30} py={10} bgcolor={'#02285e'}>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        style={{
          borderRadius: 10,
        }}
        modules={[Pagination, Autoplay]}
        className='mySwiper'
        autoplay={{ delay: 1000, disableOnInteraction: false }}
      >
        <SwiperSlide
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <img style={{ display: 'block', height: '500px', width: '100%' }} src={`${bn1}`} />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <img style={{ display: 'block', height: '500px', width: '100%' }} src={`${bn2}`} />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}

export default BannerSection;
