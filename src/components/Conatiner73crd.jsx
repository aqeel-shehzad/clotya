import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Expand, Heart, Lock, Repeat, Star } from "lucide-react";



  const slides = [
    {
      imgSrc: "/public/images/basic3-500x750.jpeg",
      title: "Lightweight zipped Bumper Jacket",
      price: "$30.99",
      discountedPrice: "$27.99",
      reviews: "1review",
    },
    {
      imgSrc: "/public/images/printedh3-500x750.webp",
      title: "Lightweight zipped Bumper Jacket",
      price: "$30.99",
      discountedPrice: "$27.99",
      reviews: "1review",
    },
    {
      imgSrc: "/public/images/slogan3-500x750.webp",
      title: "Lightweight zipped Bumper Jacket",
      price: "$30.99",
      discountedPrice: "$27.99",
      reviews: "1review",
    },
    {
      imgSrc: "/public/images/sleeve3.webp",
      title: "Lightweight zipped Bumper Jacket",
      price: "$30.99",
      discountedPrice: "$27.99",
      reviews: "1review",
    },
    {
      imgSrc: "/public/images/printedh3-500x750.webp",
      title: "Lightweight zipped Bumper Jacket",
      price: "$30.99",
      discountedPrice: "$27.99",
      reviews: "1review",
    },
    {
      imgSrc: "/public/images/overshirt3-500x750.jpg",
      title: "Lightweight zipped Bumper Jacket",
      price: "$30.99",
      discountedPrice: "$27.99",
      reviews: "1review",
    },
    {
      imgSrc: "/public/images/pants2-500x750.webp",
      title: "Lightweight zipped Bumper Jacket",
      price: "$30.99",
      discountedPrice: "$27.99",
      reviews: "1review",
    },
  ];

  export default function productSlider(){
    const dispatch = useDispatch();
    const handleadd = (slide)=>{
     dispatch(add(slide))
    }

  return (
    <div className="">
      <Swiper
        className="pl-24"
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
        <div className="flex flex-wrap ml-1 mr-12 mx-20">
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center relative">
                <div className="relative top-0 right-0 mr-2">
                  <img className="h-auto w-full" src={slide.imgSrc} alt={slide.title} />
                </div>
                <div className="absolute right-0 top-0 mr-2 mt-2">
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
                <div className="absolute -bottom-7 shadow-md w-80 bg-white p-2">
                  <div className="flex mt-2 gap-2">
                    <Star size={22} color="yellow" />
                    <p>{slide.reviews}</p>
                  </div>
                  <div className="mt-2">
                    <p>{slide.title}</p>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <p className="text-gray-400">{slide.price}</p>
                    <p>{slide.discountedPrice}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};
