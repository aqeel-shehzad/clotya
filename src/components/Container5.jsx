import React from "react";
import { MoveRight } from "lucide-react";
import { Star } from "lucide-react";
function Container5() {
  return (
    <div className="flex lg:flex-row flex-col justify-center ml-4 mt-20 ">
      <div>
        <img
          className="max-w-64 lg:max-w-2xl"
          src="/public/images/image-03kmli.jpg"
          alt=""
        />
      </div>

      <div className="lg:ml-24 lg:px-8">
        <p className="font-medium py-4 lg:py-8">NEW COLLECTIONS</p>
        <h1 className=" font-medium sm:text-3xl lg:text-5xl w-full">
          Best Sweatshirts and tracksuits for everyone!
        </h1>
        <p className="lg:py-4 text-gray-400 mt-4">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br></br> Quis ipsum suspendisse ultrices gravida.<br></br> Risus
          commodo viverra maecenas accumsan lacus vel facilisis.
        </p>

        <button className=" mb-20 border-2 flex items-center gap-2 px-4 py-2 bg-white-500 text-black rounded hover:bg-gray-600 mt-5 hover:text-white">
          Shop Now <MoveRight />
        </button>

        <div className="flex ">
          <Star size={16} color="yellow" />
          <Star size={16} color="yellow" />
          <Star size={16} color="yellow" />
          <Star size={16} color="yellow" />
          <Star size={16} color="yellow" />
          <p className="ml-5 text-sm">4.5 (10.000+) Rating</p>
        </div>

        <p className="mt-5 text-gray-500">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Quis ipsum suspendisse ultrices gravida.
        </p>
        <h1 className="font-bold mt-5">Petra van der Meer</h1>
      </div>
    </div>
  );
}

export default Container5;
