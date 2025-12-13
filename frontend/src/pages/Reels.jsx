import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

const Reels = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center p-1 gap-2 releative">
      <img
        className="rounded-md object-cover w-[30%] h-[96vh]"
        src="https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg?cs=srgb&dl=pexels-pixabay-220769.jpg&fm=jpg"
        alt=""
      />
      <div className="flex justify-center flex-col gap-7 mt-20 p-2 absolute right-[27%] bottom-3 ">
        <div className="cursor-pointer ">
          <FaRegHeart size={30} className="hover:scale-105 transition" />
          <p className="text-sm">Likes</p>
        </div>
        <div className="cursor-pointer ">
          <FaRegComment size={30} className="hover:scale-105 transition" />
          <p className="text-sm">if Comments</p>
        </div>
        <div className="cursor-pointer ">
          <FiSend size={30} className="hover:scale-105 transition" />
          <p className="text-sm">Send</p>
        </div>
        <div className="cursor-pointer ">
          <FaRegBookmark size={30} className="hover:scale-105 transition" />
          <p className="text-sm"></p>
        </div>
        <div className="cursor-pointer ">
          <BsThreeDots size={30} className="hover:scale-105 transition" />
          <p className="text-sm"></p>
        </div>
        <img
          className="w-[30px] h-[30px] rounded-md cursor-pointer hover:scale-105 transition"
          src="https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg?cs=srgb&dl=pexels-pixabay-220769.jpg&fm=jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Reels;
