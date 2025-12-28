import React from "react";
import { BiMoviePlay } from "react-icons/bi";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaFacebookMessenger, FaRegHeart } from "react-icons/fa6";
import { IoIosHome, IoMdSearch } from "react-icons/io";
import { IoList, IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";

const IconSidebar = () => {
  return (
    <>
      <div className="flex flex-col bg-blue-500 gap-4 items-center min-h-screen">
        <img src="" alt="" />
        <IoIosHome
          size={50}
          className="cursor-pointer hover:scale-105 transition hover:bg-gray-500 rounded-md p-3"
        />
        <IoMdSearch
          size={50}
          className="cursor-pointer hover:scale-105 transition hover:bg-gray-500 rounded-md p-3"
        />
        <MdOutlineExplore
          size={50}
          className="cursor-pointer hover:scale-105 transition hover:bg-gray-500 rounded-md p-3"
        />
        <BiMoviePlay
          size={50}
          className="cursor-pointer hover:scale-105 transition hover:bg-gray-500 rounded-md p-3"
        />
        <FaFacebookMessenger
          size={50}
          className="cursor-pointer hover:scale-105 transition hover:bg-gray-500 rounded-md p-3"
        />
        <FaRegHeart
          size={50}
          className="cursor-pointer hover:scale-105 transition hover:bg-gray-500 rounded-md p-3"
        />
        <FaRegPlusSquare
          size={50}
          className="cursor-pointer hover:scale-105 transition hover:bg-gray-500 rounded-md p-3"
        />
        <IoPersonCircleOutline
          size={50}
          className="cursor-pointer hover:scale-105 transition hover:bg-gray-500 rounded-md p-3"
        />
        <IoList
          size={50}
          className="cursor-pointer hover:scale-105 transition hover:bg-gray-500 rounded-md p-3"
        />
      </div>
    </>
  );
};

export default IconSidebar;
