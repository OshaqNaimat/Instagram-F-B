import React, { useState } from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import Cpeoples from "../components/Cpeoples";

/**
 * Instagram‑style responsive layout:
 * - Left section collapses on mobile
 * - Chat list becomes a drawer on small screens
 * - Clean, minimal UI similar to Instagram
 */

const Messages = () => {
  const [chatPeoples] = useState([
    { id: 1, username: "Ali", message: "Salam" },
    { id: 2, username: "Ahmed", message: "Salam" },
    { id: 3, username: "Usman", message: "Salam" },
    { id: 5, username: "Abdullah", message: "Salam" },
    { id: 6, username: "Murad", message: "Salam" },
    { id: 7, username: "Yosuf", message: "Salam" },
    { id: 8, username: "Muzammil", message: "Salam" },
  ]);

  return (
    <div className="grid grid-cols-12 h-screen select-none">
      {/* LEFT PANEL */}
      <div className="col-span-4 border-r hidden sm:flex flex-col p-4">
        {/* Top Username Row */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex gap-1 items-center cursor-pointer">
            <h2 className="font-bold text-xl">Username</h2>
            <IoIosArrowDown size={20} />
          </div>
          <FaPenToSquare className="cursor-pointer w-6 h-6 active:scale-110 transition" />
        </div>

        {/* Search Bar */}
        <div className="flex shadow-sm shadow-gray-300 rounded-full mb-5">
          <IoSearch size={40} className="p-2 rounded-full text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 outline-none rounded-full text-sm"
          />
        </div>

        {/* Notes */}
        <div className="flex flex-col justify-center items-center mb-5">
          <img
            className="w-[60px] h-[60px] rounded-full"
            src="https://cdn-icons-png.flaticon.com/256/12225/12225935.png"
            alt=""
          />
          <p className="text-xs text-gray-500 mt-1">Your Note</p>
        </div>

        {/* Messages Header */}
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-lg">Messages</h3>
          <h5 className="font-semibold text-gray-500 cursor-pointer hover:border-b">
            Requests
          </h5>
        </div>

        {/* Chat List */}
        <div className="overflow-y-auto h-full pr-1">
          {chatPeoples.map((item) => (
            <Cpeoples key={item.id} data={item} />
          ))}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="col-span-12 sm:col-span-8 flex flex-col items-center justify-center text-center px-4">
        <LuSend size={60} className="text-gray-600" />
        <h4 className="font-semibold text-xl mt-4">Your messages</h4>
        <p className="text-gray-500 text-sm">Send a message to start a chat.</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          Send message
        </button>
      </div>
    </div>
  );
};

export default Messages;
