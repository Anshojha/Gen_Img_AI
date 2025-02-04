import React from "react";
import { assets } from "../assets/assets";
import { useState } from "react";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setisImageLoaded] = useState(false);
  const [loading, isLoading] = useState(false);
  const [input, setInput] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    isLoading(true);
    setTimeout(() => {
      setisImageLoaded(true);
      isLoading(false);
    }, 10000);
  }

  return (
    <form
       onSubmit={onSubmitHandler}
      action=""
      className="flex flex-col items-center justify-center min-h-[90vh]"
    >
      <div>
        <div className="relative">
          <img className="max-w-sm rounded" src={image} alt="" />
          <span className={`bg-blue-500 h-1 absolute left-0 bottom-0 ${loading ?  'w-full transition-all duration-[10s]' : 'w-0'}`}></span>
        </div>
        <p className={!loading ? "hidden" : "text-gray-600"}>Loading........</p>
      </div>
      {!isImageLoaded ? (
        <div className="flex text-white w-full max-w-xl bg-neutral-500  text-sm p-0.5 mt-10 rounded-full">
          <input
            onChange={(e)=> setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe what you want to generate "
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color"
          />
          <button
            type="submit"
            className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full"
          >
            Generate
          </button>
        </div>
      ) : (
        <div className="flex gap-2 flex-wrap text-white justify-center test-sm p-0.5 mt-10 rounded-full">
          <p
            onClick={() => setisImageLoaded(false)}
            className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer"
          >
            Generate Another
          </p>
          <a
            href={image}
            download
            className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
          >
            Download
          </a>
        </div>
      )}
    </form>
  );
};

export default Result;
