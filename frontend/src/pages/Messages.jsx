import React, { useState } from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { IoIosArrowDown, IoMdInformationCircleOutline } from "react-icons/io";
import { IoCallOutline, IoImageOutline, IoSearch } from "react-icons/io5";
import { BsCameraVideo } from "react-icons/bs";
import Cpeoples from "../components/Cpeoples";
import { FaRegSmile } from "react-icons/fa";
import { TiMicrophoneOutline } from "react-icons/ti";
import { PiStickerBold } from "react-icons/pi";

/**
 * Fixed version:
 * - Independent scroll for LEFT and RIGHT sections
 * - Removed extra bottom spacing under input
 * - Right panel chat body now scrolls separately
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
    <div className="grid grid-cols-12 h-screen select-none overflow-hidden">
      {/* LEFT PANEL */}
      <div className="col-span-4 border-r hidden sm:flex flex-col p-4 overflow-hidden">
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

        {/* Chat List — Independent Scroll */}
        <div className="overflow-y-auto flex-1 pr-1">
          {chatPeoples.map((item) => (
            <Cpeoples key={item.id} data={item} />
          ))}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="col-span-12 sm:col-span-8 flex flex-col h-full overflow-hidden">
        {/* Chat Header */}
        <div className="flex p-2 justify-between items-center border-b gap-3 sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              className="w-[60px] h-[60px] rounded-full object-cover"
              src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80"
              alt=""
            />
            <div>
              <h4 className="font-semibold">Username</h4>
              <p className="text-gray-500 text-[11px]">Active 2hr ago</p>
            </div>
          </div>
          <div className="flex items-center gap-4 ">
            <IoCallOutline
              size={25}
              className="cursor-pointer hover:scale-105 transition"
            />
            <BsCameraVideo
              size={25}
              className="cursor-pointer hover:scale-105 transition"
            />
            <IoMdInformationCircleOutline
              size={25}
              className="cursor-pointer hover:scale-105 transition"
            />
          </div>
        </div>

        {/* Chat Body — Independent Scroll */}
        <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center text-center p-4">
          <img
            className="rounded-full w-[120px] h-[120px] object-contain"
            src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80"
            alt=""
          />
          <div>
            <h2 className="font-bold text-xl">Username</h2>
            <p className="text-gray-500 text-[11px]">Fullname · Instagram</p>
          </div>
          <button className="">View Profile</button>
        </div>

        {/* Input Section — No extra margin */}
        <div className="p-3 flex items-center  bg-white">
          <FaRegSmile
            size={49}
            className="border border-e-0 border-gray-300 p-2 rounded-full rounded-e-none hover:scale-105 cursor-pointer"
          />
          <input
            type="text"
            placeholder="Message..."
            className="p-3 w-full border border-s-0 border-e-0 border-gray-300 rounded-s-none  outline-none"
          />
          <TiMicrophoneOutline
            size={49}
            className="border  border-gray-300 p-2 border-s-0 border-e-0  hover:scale-105 cursor-pointer"
          />
          <IoImageOutline
            size={49}
            className="border  border-gray-300 p-2 border-s-0 border-e-0  hover:scale-105 cursor-pointer"
          />
          <PiStickerBold
            size={49}
            className="border  border-gray-300 p-2 border-s-0  rounded-full rounded-s-none hover:scale-105 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Messages;
