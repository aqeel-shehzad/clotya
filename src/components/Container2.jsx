import { MoveRight } from "lucide-react";
import React from "react";

function Container2() {
  return (
    <div className="mt-14 pl-4 flex flex-col lg:flex-row justify-around mb-16">
      <div>
        <img
          
          src="/public/images/image-01 girlsboy.webp"
          alt=""
        />
        <div className=" sm:8 md:pl-16 lg:pl-24">
          <p className="text-gray-500 mt-6">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br></br>
            Quis ipsum suspendisse ultrices gravida.
          </p>
          <h6 className="font-bold mt-2">Petra van der Meer</h6>
        </div>
      </div>
      <div className="">
        <p className="font-medium   sm:pl-8 md:pl-10 lg:py-2 ">NEW COLLECTIONS</p>
        <h1 className=" font-medium  text-4xl w-full  sm:pl-8 md:pl-10 lg:py-6 ">
          Best Sweatshirts and
        </h1>
        <h1 className=" font-medium  text-4xl w-full  sm:pl-8 md:pl-10  ">
        tracksuits for everyone!
        </h1>
        <p className="py-6 text-gray-400  sm:pl-8 md:pl-10 lg:py-10  ">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br></br> Quis ipsum suspendisse ultrices gravida.<br></br> Risus
          commodo viverra maecenas accumsan lacus vel facilisis.
        </p>
        <div className=" sm:pl-8 md:pl-10 lg:py-10 ">
          <button className=" border-2 px-4 flex items-center gap-2  py-2 bg-white-500 text-black rounded hover:bg-gray-600 hover:text-white">Shop Now <MoveRight /></button>
          </div>
        
        <div className=" sm:pl-2 md:pl-4 lg:py-6 mt-6">
          <img src="/public/images/image-02arms on heg.webp" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Container2;
