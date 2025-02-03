import React from "react";
import { assets } from "../assets/assets";

const Result = () => {
  return (
    <form action="" className="flex flex-col items-center justify-center min-h-[90vh]">
      <div>
        <div className="relative">
          <img className="max-w-sm rounded" src={assets.sample_img_1} alt="" />
          <span className="bg-blue-500 h-1 w-full absolute left-0 bottom-0 transition-all duration-[10s]"></span>
        </div>
        <p className="text-gray-400">Loading........</p>
      </div>
      <div className="flex text-white w-full max-w-xl bg-neutral-500  text-sm p-0.5 mt-10 rounded-full">
        <input type="text" placeholder="Describe what you want to generate " className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color"/>
        <button type="submit" className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full" >Generate</button>
      </div>
    </form>
  );
};

export default Result;
