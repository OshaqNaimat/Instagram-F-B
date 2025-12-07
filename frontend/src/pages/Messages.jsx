import React, { useState } from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoArrowDown, IoSearch } from "react-icons/io5";
import { CiChat2 } from "react-icons/ci";
import Cpeoples from "../components/Cpeoples";
import { LuSend } from "react-icons/lu";

const Messages = () => {
  const [chatPeoples, setChatPeoples] = useState([
    { id: 1, username: "Ali", message: "Salam" },
    { id: 2, username: "Ahmed", message: "Salam" },
    { id: 3, username: "Usman", message: "Salam" },
    { id: 5, username: "Abdullah", message: "Salam" },
    { id: 6, username: "Murad", message: "Salam" },
    { id: 7, username: "Yosuf", message: "Salam" },
    { id: 8, username: "Muzammil", message: "Salam" },
  ]);
  return (
    <>
      {/* chat section */}
      <div className="grid grid-cols-10 select-none ">
        <div className="lg:col-span-3 md:col-span-2 sm:col-span-1 p-8 ">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center justify-center cursor-pointer">
              <h2 className="font-bold text-2xl ">Username</h2>
              <IoIosArrowDown size={22} />
            </div>
            <FaPenToSquare
              className="cursor-pointer active:scale-115 transition "
              size={22}
            />
          </div>
          <div className="flex shadow-xl my-2 sm:hidden  shadow-gray-500 rounded-full justify-center items-center">
            <IoSearch size={44} className="  p-2 rounded-e-2xl rounded-full" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search"
              className="w-full p-[0.6rem] outline-0 rounded-s-2xl rounded-full"
            />
          </div>
          <div className="flex  flex-col justify-center mt-7 ">
            {/* <CiChat2 className="absolute -top-5 text-gray-500" size={40} /> */}

            <img
              className="w-[70px]  h-[70px] rounded-full cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/256/12225/12225935.png"
              alt=""
            />
            <p className="text-sm text-gray-500 m-0 ">Your Note</p>
          </div>
          <div className="flex justify-between sm:hidden my-2">
            <h3 className="font-bold text-xl">Messages</h3>
            <h5 className="font-bold  text-lg text-gray-500 cursor-pointer hover:border-b-2">
              Requests
            </h5>
          </div>
          <div className="overflow-y-scroll h-[70vh]">
            {/* <div className="overflow-y-scroll h-[70vh]"> */}
            {chatPeoples.map((item) => (
              <Cpeoples key={item.id} data={item} />
            ))}
            {/* </div> */}
          </div>
        </div>
        {/* messages section */}
        <div className="lg:col-span-7 md:col-span-8 sm:col-span-1 gap-2 flex flex-col items-center justify-center">
          <LuSend size={60} />
          <h4 className="font-semibold text-xl">Your messages</h4>
          <p className="text-gray-500">Send a message to start a chat.</p>
          <button className="p-1 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-700 transition">
            Send message
          </button>
        </div>
      </div>
    </>
  );
};

export default Messages;
