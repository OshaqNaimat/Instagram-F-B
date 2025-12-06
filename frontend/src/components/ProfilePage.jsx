import React, { useState } from "react";
import { TbSettingsFilled } from "react-icons/tb";
import { IoAddCircle, IoAddCircleOutline } from "react-icons/io5";
import { FaCamera, FaRegBookmark, FaTable } from "react-icons/fa6";
import { BsPersonSquare } from "react-icons/bs";

const ProfilePage = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="w-full p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row w-full sm:w-[80%] lg:w-[60%] mx-auto items-center sm:items-start gap-4">
          <img
            className="w-[130px] h-[130px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] rounded-full object-cover"
            src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"
            alt=""
          />

          <div className="flex flex-col text-center sm:text-left w-full">
            <div className="flex items-center justify-center sm:justify-start">
              <h2 className="font-semibold text-xl sm:text-2xl me-3">
                Username
              </h2>
              <TbSettingsFilled
                size={26}
                className="cursor-pointer hover:scale-105 transition"
              />
            </div>

            <h5 className="my-2 text-sm sm:text-base">FullName</h5>

            <div className="flex justify-center sm:justify-start gap-3 mb-3">
              <p className="text-sm">0 Posts</p>
              <p className="text-sm">0 Followers</p>
              <p className="text-sm">0 Following</p>
            </div>

            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio et
              illum, unde fugit magnam, provident similique est repudiandae
              tenetur voluptatum ex ad architecto expedita asperiores nihil
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
          <button className="bg-gray-200 font-semibold text-black p-3 outline-0 w-full sm:w-[220px] lg:w-[300px] cursor-pointer rounded-2xl hover:bg-gray-400 transition">
            Edit Profile
          </button>

          <button className="bg-gray-200 font-semibold text-black p-3 outline-0 w-full sm:w-[220px] lg:w-[300px] cursor-pointer rounded-2xl hover:bg-gray-400 transition">
            View Archive
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center mb-8">
        <div className="flex-col items-center justify-center cursor-pointer">
          <IoAddCircleOutline size={100} />
          <h5 className="text-center">New</h5>
        </div>
      </div>
      <div className="flex w-[90%] justify-around mx-auto   ">
        <div className="border-0 w-[50px] flex justify-center border-t-0 border-l-0 border-r-0 border-b-3">
          <FaTable size={30} />
        </div>
        <div className="border-2 w-[50px] flex justify-center border-t-0 border-l-0 border-r-0 border-b-3">
          <FaRegBookmark size={30} />
        </div>
        <div className="border-2 w-[50px] flex justify-center border-t-0 border-l-0 border-r-0 border-b-3">
          <BsPersonSquare size={30} />
        </div>
      </div>
      <hr className="w-[90%] mx-auto" />
      <div className="flex-col flex gap-4 p-10 items-center justify-center ">
        <FaCamera size={50} className="cursor-pointer" />
        <h2 className="text-5xl font-bold">Share Photos</h2>
        <p className="text-gray-700">
          When you share photos, they will appear on your profile.
        </p>
        <h3 className="cursor-pointer text-blue-600 font-semibold border-0  border-t-0 border-e-0 border-l-0 hover:text-blue-500 hover:border-b-3 duration-75">
          Share your first photo
        </h3>
      </div>
    </>
  );
};

export default ProfilePage;
