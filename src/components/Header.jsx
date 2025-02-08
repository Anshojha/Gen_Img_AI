import React from "react";
import { assets } from "../assets/assets";
import { delay, motion } from "framer-motion"

const Header = () => {
  return (
    <motion.div className="flex flex-col justify-center items-center gap-1 text-center my-20"
        initial={{opacity: 0.2, y: 100}}
        transition = {{duration: 1}}
        whileInView = {{opacity: 1, y: 0}}
        viewport={{once : true}}
    >
      <motion.div className="text-stone-500 inline-flex gap-2 text-center border border-neutral-500 rounded-full px-4 py-1 bg-white"
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}  
        transition={ {duration: 1, delay: 0.8}}
      >
        <p>Best text to image gerenerator</p>
        <img src={assets.star_icon} alt="" srcset="" />
      </motion.div>
      <motion.h1 className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center"
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        transition={{delay: 0.5, duration: 2}}
      >
        Turn text to <span className="text-blue-600">image</span>, in seconds.
      </motion.h1>
      <motion.p className="text-stone-500 mt-5 mx-auto max-w-xl"
        initial={{opacity: 0 , y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 1, duration: 1}}
      >
        Unleash your creativity with AI. Turn your imagination into visual art
        in seconds – just type, and watch the magic happen.
      </motion.p>
      <motion.button className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full "
        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.8}}
        initial={{opacity: 0}}
        animate = {{opacity: 1}}
        transition={{default : {duration: 0.5 }, opacity : {delay : 0.8, duration : 1}}}
      >Generate Images <img className="h-6" src={assets.star_group} alt="" srcset="" /></motion.button>
      <div className="flex flex-wrap gap-2 mt-10 justify-center">
        {Array(6).fill('').map((item, index) => (
            <img className="rounded hover:scale-105 trasition-all duration-300 cursor-pointer max-sm:w-10" src={index % 2== 0 ? assets.sample_img_2 : assets.sample_img_1} alt="" srcset="" key={index} width={70} />
        ))}
      </div>
      <p className="text-neutral-600 text-center mt-3">Generated images from imagify</p>
      
    </motion.div>
  );
};

export default Header;
