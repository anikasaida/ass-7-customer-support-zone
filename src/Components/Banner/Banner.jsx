import React from "react";


const Banner = ({ progressCount, resolvedCount }) => {
  return (
    <div className=" flex flex-col md:flex-row gap-5 mt-5 max-w-[1200px] mx-auto px-4">
      <div className="hero-content text-center flex-1 bg-base-200 flex bg-linear-to-br from-[#422AD5] to-fuchsia-500 text-white rounded-lg">
        <img className="bg-no-repeat flex-1"
         src="https://i.ibb.co.com/nsR5T4YG/vector1.png" alt="" />
        <div className="flex-1">
<h1 className="text-l font-semibold whitespace-nowrap">In-Progress</h1>
          <p className="py-3 text-4xl font-bold">{progressCount}</p>
        </div>
        <img
          className="rotate-y-180 bg-no-repeat flex-1"
          src="https://i.ibb.co.com/nsR5T4YG/vector1.png"
          alt=""
        />
      </div>

      <div className="hero-content text-center flex-1 bg-base-200 overflow-hidden bg-linear-to-br from-green-400 to-teal-500 text-white rounded-lg flex">
        <img className="bg-no-repeat flex-1  "
         src="https://i.ibb.co.com/nsR5T4YG/vector1.png" alt="" />
        <div className="max-w-md flex-1">
          <h1 className="text-l font-semibold">Resolved</h1>
          <p className="py-3 text-4xl font-bold">{resolvedCount}</p>
        </div>
        <img
          className="rotate-y-180 bg-no-repeat flex-1"
          src="https://i.ibb.co.com/nsR5T4YG/vector1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
