import React from "react";

function Container11E() {
  return (
    <div className=" mt-20 py-20 flex flex-col lg:flex-row justify-around text-white bg-black">
      <div>
        <h1 className="ml-4 sm:text-sm lg:text-3xl font-semibold">
          Get our emails for info on,
        </h1>
        <h1 className="ml-4 sm:text-sm lg:text-3xl font-semibold">
          {" "}
          new items, sales and more.
        </h1>
        <p className="ml-4 text-gray-400 mt-3">
          We'll email you a voucher worth £10 off your first order over £50.
        </p>
        <div className="flex w-5xl mt-8">
          <input
            className="sm:text-sm ml-4"
            type="text"
            placeholder="Enter your  Email address"
          ></input>
          <button
            className="sm:text-sm border-2 flex items-center gap-2 px-4 py-2 bg-white-500 text-white
              hover:text-gray-400"
          >
            Subscribe
          </button>
        </div>
        <div>
          <p className="text-gray-400 mt-2 text-2 text-sm ml-4">
            By subscribing you agree to our Terms & Conditions and Privacy &
            Cookies Policy.
          </p>
        </div>
      </div>

      <div>
        <div className="">
          <h1 className="ml-4 mt-4 sm:grid sm:text-sm lg:text-3xl font-normal">
            Need help?
          </h1>
          <p className="ml-4 mt- sm:text-sm lg:text-3xl font-normal">
            (+800) 1234 5678 90
          </p>
          <h2 className="text-gray-400 mt-3 ml-4">
            We are available 8:00am – 7:00pm
          </h2>
        </div>
        <div className="flex gap-2 mt-5">
          <img
            className="h-12 w-26"
            src="/public/images/app-store.webp"
            alt=""
          />

          <img
            className="h-10 w-26"
            src="/public/images/google-play.webp"
            alt=""
          />
        </div>
        <div className="flex text-gray-400 text-sm mt-3 ml-4">
          <p>Shopping App:</p>
          <h1 className="text-gray-400 ml-4">
            {" "}
            Try our View in Your Room feature, manage registries and save
            payment info.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Container11E;
