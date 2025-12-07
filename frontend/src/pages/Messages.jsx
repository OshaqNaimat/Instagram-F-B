import React from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoArrowDown, IoSearch } from "react-icons/io5";

const Messages = () => {
  return (
    <>
      {/* chat section */}
      <div className="grid grid-cols-10 select-none">
        <div className="col-span-3 p-8">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center justify-center cursor-pointer">
              <h1 className="font-bold text-2xl ">Username</h1>
              <IoIosArrowDown size={22} />
            </div>
            <FaPenToSquare
              className="cursor-pointer active:scale-115 transition "
              size={22}
            />
          </div>
          <div className="flex shadow-xl my-2 shadow-gray-500 rounded-full justify-center items-center">
            <IoSearch size={44} className="  p-2 rounded-e-2xl rounded-full" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search"
              className="w-full p-[0.6rem] outline-0 rounded-s-2xl rounded-full"
            />
          </div>
        </div>
        <div className="flex">
          <img
            src="https://cdn-icons-png.flaticon.com/256/12225/12225935.png"
            alt=""
          />
        </div>
        {/* messages section */}
        <div className="col-span-7">
          <h1>Lorem, ipsum.</h1>
        </div>
      </div>
    </>
  );
};

export default Messages;
