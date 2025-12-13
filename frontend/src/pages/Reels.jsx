import React from "react";
import { FaRegComment, FaRegHeart, FaRegBookmark } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

const Reels = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center gap-4">
      {/* Image Wrapper */}
      <div className="relative w-full lg:w-[30%] sm:w-[60%] md:w-[50%]   lg:h-[96vh] h-full">
        <img
          className="rounded-md object-cover w-full h-full"
          src="https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg"
          alt=""
        />

        {/* Icons (inside for sm & md) */}
        <div
          className="
            absolute bottom-8 right-3 sm:bottom-8 sm:-right-20 sm:text-black md:text-black md:bottom-8 md:-right-20
            flex flex-col gap-7 
            text-white

            lg:text-black lg:-right-20 lg:bottom-8
          "
        >
          <div className="cursor-pointer text-center">
            <FaRegHeart size={30} />
            <p className="text-xs">Likes</p>
          </div>

          <div className="cursor-pointer text-center">
            <FaRegComment size={30} />
            <p className="text-xs">Comments</p>
          </div>

          <div className="cursor-pointer text-center">
            <FiSend size={30} />
            <p className="text-xs">Send</p>
          </div>

          <div className="cursor-pointer">
            <FaRegBookmark size={30} />
          </div>

          <div className="cursor-pointer">
            <BsThreeDots size={30} />
          </div>

          <img
            className="w-[30px] h-[30px] rounded-md cursor-pointer"
            src="https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Reels;
