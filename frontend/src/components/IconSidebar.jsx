import React from "react";
import { BiMoviePlay } from "react-icons/bi";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaFacebookMessenger, FaRegHeart } from "react-icons/fa6";
import { IoIosHome, IoMdSearch } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";

const IconSidebar = () => {
  return (
    <>
      <div className="flex flex-col bg-blue-500">
        <IoIosHome />
        <IoMdSearch />
        <MdOutlineExplore />
        <BiMoviePlay />
        <FaFacebookMessenger />
        <FaRegHeart />
        <FaRegPlusSquare />
      </div>
    </>
  );
};

export default IconSidebar;
