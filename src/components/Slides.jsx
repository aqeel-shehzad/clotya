import { A11y, Navigation, Scrollbar } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { MoveRight } from 'lucide-react';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[ Scrollbar,A11y]}
      spaceBetween={50}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
    
    loop
    >
      <SwiperSlide>
        <img className='relative sm:w-full h-80 object-cover sm:h-auto' src="/public/images/slider-04.webp" alt="" />
      <div className='absolute top-0  sm:top-5 md:top-10 lg:top-20 left-8 '>
        <h1 className='text-sm  font-medium m-4 pl-4'>WINTER 2022 COLLECTION</h1>
        <h1 className=' text-xl sm:text-2xl md:font-bold md:text-3xl lg:font-normal lg:text-7xl m-4'>Valentin Paul <br></br> Essential Collection</h1>
        <p className='pl-6'>Lorem ipsum dolor sit amet.</p>
        <div className='items-center flex'>
        <p className='font-medium m-5'>Shop Collection</p>
        <MoveRight />
        </div>
      </div>
      </SwiperSlide>


      <SwiperSlide><img className='relative sm:w-full h-80 object-cover sm:h-auto' src="/public/images/slider-05.webp" alt="" />
      <div className='absolute top-20 left-8'>
        <h1 className='text-sm font-medium m-4'>WINTER 2022 COLLECTION</h1>
        <h1 className='lg:text-7xl m-4'>Valentin Paul <br></br> Essential Collection</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <div className='items-center flex'>
        <p className='font-medium m-5'>Shop Collection</p>
        <MoveRight />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide><img className='relative sm:w-full h-80 object-cover sm:h-auto' src="/public/images/slider-06.webp" alt="" />
      <div className='absolute top-20 left-8'>
        <h1 className='text-sm font-medium m-4'>WINTER 2022 COLLECTION</h1>
        <h1 className='lg:text-7xl m-4'>Making someone <br></br> feel prety is an art</h1>
        <p className=''>Lorem ipsum dolor sit amet.</p>
        <div className='items-center flex'>
        <p className='font-medium m-5'>Shop Collection</p>
        <MoveRight />
        </div>
      </div></SwiperSlide>
    </Swiper>
  );
};