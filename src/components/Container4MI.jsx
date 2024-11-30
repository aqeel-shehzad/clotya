import { Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[ Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={5}
    
      pagination={{ clickable: true }}
   
      loop
    >
      <SwiperSlide><img src="/public/images/AVAKEN.webp" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/public/images/FRAME.webp" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/public/images/GENITH.webp" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/public/images/HYDEN.webp" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/public/images/MARNI.webp" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/public/images/PHILPIN.webp.webp" alt="" /></SwiperSlide>
   
    </Swiper>
  );
};