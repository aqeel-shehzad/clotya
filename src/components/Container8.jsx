import React from "react";
import { MoveRight } from "lucide-react";
function Container8() {
  return (
    <div className="flex justify-center mt-10 max-w-full pb-36 ml-4 lg:ml-10 lg:mr-10">
      <div className="relative">
        <img
          className="w-full lg:h-full "
          src="/public/images/banner-box2raseeli.webp"
          alt=""
        />
        <div className="mr-2 lg:mt-12 lg:pl-16 px-4 absolute top-0 sm:text-sm ">
          <p className="font-normal sm:xl sm:px-0 sm:mt-3 sm:py-0 lg:pl-4 lg:py-2 ">
            NEW COLLECTIONS
          </p>
          <h1 className=" font-medium py:2 sm:text-sm text-xl md:text-2xl  lg:text-4xl w-full lg:pl-4 pl-4 md:pl-10 lg:py-2 ">
            Best Sweatshirts and
          </h1>
          <h1 className=" font-medium sm:text-sm  text-xl w-full lg:pl-4 sm:pl-8 md:pl-10 lg:py-2 ">
            tracksuits for everyone!
          </h1>
          <div className="sm:text-sm sm:mt-3 sm:px-0 sm:ml-0">
          <p className=" text-gray-400 sm:text-sm sm:mt-3 sm:8 sm:2 lg:pl-4 sm:pl-4 md:pl-10 lg:py-10 mb-6 ">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br></br> Quis ipsum suspendisse ultrices gravida.<br></br> Risus
            commodo viverra maecenas accumsan lacus vel facilisis.
          </p></div>

          <button className="border-2 flex items-center gap-2 px-4 py-2 bg-white-500 text-black rounded ">
            Shop Now <MoveRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Container8;
