import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

const Reels = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center p-1 gap-2">
      <img
        className="rounded-md object-cover w-[30%] h-[96vh]"
        src="https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg?cs=srgb&dl=pexels-pixabay-220769.jpg&fm=jpg"
        alt=""
      />
      <div className="flex justify-center  flex-col gap-7 mt-20 p-2">
        <div className="">
          <FaRegHeart size={30} />
          <p>Likes</p>
        </div>
        <div className="">
          <FaRegComment size={30} />
          <p>Comments</p>
        </div>
        <div className="">
          <FiSend size={30} />
          <p></p>
        </div>
        <div className="">
          <FaRegBookmark size={30} />
          <p></p>
        </div>
        <div className="">
          <BsThreeDots size={30} />
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Reels;
