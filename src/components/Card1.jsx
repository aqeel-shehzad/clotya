import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Expand, Heart, Lock, Repeat, Star } from "lucide-react";

const slidesData = [
  
  {
    id:1,
    imgSrc: "/public/images/caerd1.webp",
    review: "1review",
    description: "Lightweight zipped Bumper Jacket",
    oldPrice: "$30.99",
    newPrice: "$27.99",
  },
  {
    id:2,
    imgSrc: "/public/images/starter1-500x750.webp",
    review: "1review",
    description: "Lightweight zipped Bumper Jacket",
    oldPrice: "$30.99",
    newPrice: "$27.99",
  },
  {
    id:3,
    imgSrc: "/public/images/pocketmen1-500x750.webp",
    review: "1review",
    description: "Lightweight zipped Bumper Jacket",
    oldPrice: "$30.99",
    newPrice: "$27.99",
  },
  {
    id:4,
    imgSrc: "/public/images/nylon1.webp",
    review: "1review",
    description: "Lightweight zipped Bumper Jacket",
    oldPrice: "$30.99",
    newPrice: "$27.99",
  },
  {
    id:5,
    imgSrc: "/public/images/nylon1.webp",
    review: "1review",
    description: "Lightweight zipped Bumper Jacket",
    oldPrice: "$30.99",
    newPrice: "$27.99",
  },
];

export default function productSlider(){
  const dispatch = useDispatch();
  const handleadd = (slide)=>{
   dispatch(add(slide))

  
  
  }
 
  
  return (
    <div className="px-4 flex-wrap">
      <Swiper
        modules={[Navigation]}
        spaceBetween={46}
        slidesPerView="auto"
        navigation
        pagination={{ clickable: true }}
        loop
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 30 },
          640: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 40 },
        }}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div>
              <div className="relative">
                <img src={slide.imgSrc} alt="" />
                <div className="absolute right-0 top-0 mr-2">
                  <Expand
                    size={38}
                    className="rounded-3xl bg-white p-2 mb-2 mt-2 hover:bg-red-600"
                  />
                  <Repeat
                    size={38}
                    className="rounded-3xl bg-white p-2 mb-2 hover:bg-red-600"
                  />
                  <Heart
                    size={38}
                    className="rounded-3xl bg-white p-2 mb-2 hover:bg-red-600"
                  />

                  <Lock onClick={()=>handleadd(slide)}
                    size={38}
                    className="rounded-3xl bg-white p-2 mb-2 hover:bg-red-600"
                  />
                </div>
              </div>
              <div className="flex mt-2 gap-2 ">
                <Star size={22} color="yellow" />
                <p>{slide.review}</p>
              </div>
              <div className="mt-2">
                <p>{slide.description}</p>
              </div>
              <div className="flex gap-2 mt-2">
                <p className="text-gray-400">
                  {slide.oldPrice}</p>
                <p>{slide.newPrice}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
