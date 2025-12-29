import React from "react";
import { BiMoviePlay } from "react-icons/bi";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaFacebookMessenger, FaRegHeart } from "react-icons/fa6";
import { IoIosHome, IoMdSearch } from "react-icons/io";
import { IoList, IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { Link, Links } from "react-router-dom";

const IconSidebar = () => {
  return (
    <>
      <div className="flex flex-col border-r border-gray-300 gap-4 items-center min-h-screen">
        <img
          className="cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
          alt=""
        />
        <Link to="/Home" className="">
          <IoIosHome
            size={50}
            className="cursor-pointer hover:scale-105 transition hover:bg-gray-300 rounded-md p-3"
          />
        </Link>
        <Link to="/search" className="">
          <IoMdSearch
            size={50}
            className="cursor-pointer hover:scale-105 transition hover:bg-gray-300 rounded-md p-3"
          />
        </Link>
        <Link to="/explore" className="">
          <MdOutlineExplore
            size={50}
            className="cursor-pointer hover:scale-105 transition hover:bg-gray-300 rounded-md p-3"
          />
        </Link>
        <Link to="/reels" className="">
          <BiMoviePlay
            size={50}
            className="cursor-pointer hover:scale-105 transition hover:bg-gray-300 rounded-md p-3"
          />
        </Link>
        <Link to="/message" className="">
          <FaFacebookMessenger
            size={50}
            className="cursor-pointer hover:scale-105 transition hover:bg-gray-300 rounded-md p-3"
          />
        </Link>
        <Link to="/notification" className="">
          <FaRegHeart
            size={50}
            className="cursor-pointer hover:scale-105 transition hover:bg-gray-300 rounded-md p-3"
          />
        </Link>
        {/* <Link to="/create" className="">
          <FaRegPlusSquare
            size={50}
            className="cursor-pointer hover:scale-105 transition hover:bg-gray-300 rounded-md p-3"
          />
        </Link> */}
        <Link to="/profile" className="">
          <IoPersonCircleOutline
            size={50}
            className="cursor-pointer hover:scale-105 transition hover:bg-gray-300 rounded-md p-3"
          />
        </Link>

        <IoList
          size={50}
          className="cursor-pointer hover:scale-105 transition hover:bg-gray-300 rounded-md p-3"
        />
      </div>
    </>
  );
};

export default IconSidebar;
