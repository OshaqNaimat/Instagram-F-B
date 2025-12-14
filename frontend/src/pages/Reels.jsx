import React, { useState } from "react";
import {
  FaRegComment,
  FaRegHeart,
  FaRegBookmark,
  FaArrowDown,
  FaArrowUp,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { BiRepost } from "react-icons/bi";

const Reels = () => {
  return (
    <div className="w-screen h-100vh  flex flex-col items-center justify-center ">
      {/* Image Wrapper */}
      <div className="relative mb-3 w-full lg:w-[30%] sm:w-[60%] md:w-[50%] lg:h-[96vh] h-full">
        <img
          className="rounded-md object-cover w-full h-full"
          src="https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg"
          alt=""
        />

        {/* Icons (inside for sm & md) */}
        <div
          className="
            absolute bottom-8 right-5 sm:bottom-8 sm:-right-15 sm:text-black md:text-black md:bottom-8 md:-right-15
            flex flex-col gap-5
            text-white
            lg:text-black lg:-right-15 lg:bottom-8
          "
        >
          <div className="cursor-pointer flex flex-col  ">
            <FaRegHeart size={30} className="hover:scale-105 transition" />
          </div>

          <div className="cursor-pointer text-center flex flex-col items-center ">
            <FaRegComment size={30} className="hover:scale-105 transition" />
          </div>

          <div className="cursor-pointer text-center flex flex-col items-center ">
            <FiSend size={30} className="hover:scale-105 transition" />
          </div>

          <div className="cursor-pointer flex flex-col items-center ">
            <BiRepost size={30} className="hover:scale-105 transition" />
          </div>
          <div className="cursor-pointer flex flex-col items-center ">
            <FaRegBookmark size={30} className="hover:scale-105 transition" />
          </div>

          <div className="cursor-pointer flex flex-col items-center ">
            <BsThreeDots size={30} className="hover:scale-105 transition" />
          </div>

          <img
            className="w-[30px] h-[30px] rounded-md cursor-pointer transition hover:outline-blue-500 outline-2"
            src="https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg"
            alt=""
          />
        </div>
      </div>
      <div className="relative mb-3 w-full lg:w-[30%] sm:w-[60%] md:w-[50%] lg:h-[96vh] h-full">
        <img
          className="rounded-md object-cover w-full h-full"
          src="https://i.pinimg.com/736x/2d/95/e5/2d95e5886fc4c65a6778b5fee94a7d59.jpg"
          alt=""
        />

        {/* Icons (inside for sm & md) */}
        <div
          className="
            absolute bottom-8 right-5 sm:bottom-8 sm:-right-15 sm:text-black md:text-black md:bottom-8 md:-right-15
            flex flex-col gap-5
            text-white
            lg:text-black lg:-right-15 lg:bottom-8
          "
        >
          <div className="cursor-pointer flex flex-col  ">
            <FaRegHeart size={30} className="hover:scale-105 transition" />
          </div>

          <div className="cursor-pointer text-center flex flex-col items-center ">
            <FaRegComment size={30} className="hover:scale-105 transition" />
          </div>

          <div className="cursor-pointer text-center flex flex-col items-center ">
            <FiSend size={30} className="hover:scale-105 transition" />
          </div>

          <div className="cursor-pointer flex flex-col items-center ">
            <BiRepost size={30} className="hover:scale-105 transition" />
          </div>
          <div className="cursor-pointer flex flex-col items-center ">
            <FaRegBookmark size={30} className="hover:scale-105 transition" />
          </div>

          <div className="cursor-pointer flex flex-col items-center ">
            <BsThreeDots size={30} className="hover:scale-105 transition" />
          </div>

          <img
            className="w-[30px] h-[30px] rounded-md cursor-pointer transition hover:outline-blue-500 outline-2"
            src="https://i.pinimg.com/736x/2d/95/e5/2d95e5886fc4c65a6778b5fee94a7d59.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 fixed right-5 top-1/2 transform -translate-y-1/2">
        <FaArrowUp
          onClick={() => setPrereel(true)}
          size={15}
          className="p-4  bottom-50 bg-gray-200 hover:bg-gray-300 cursor-pointer transition rounded-full w-12 h-12"
        />
        <FaArrowDown
          onClick={() => setNextreel(true)}
          size={15}
          className="p-4  bottom-50 bg-gray-200 hover:bg-gray-300 cursor-pointer transition rounded-full w-12 h-12"
        />
      </div>
    </div>
  );
};

export default Reels;
