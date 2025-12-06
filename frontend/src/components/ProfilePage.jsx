import React from "react";
import { TbSettingsFilled } from "react-icons/tb";

const ProfilePage = () => {
  return (
    <div className="w-full p-5 ">
      <div className="flex w-[60%] mx-auto">
        <img
          className="w-[200px] h-[200px] rounded-full"
          src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"
          alt=""
        />
        <div className="flex-col justify-start">
          <div className="flex items-center justify-start">
            <h2 className="font-semibold text-2xl me-3">Username</h2>
            <TbSettingsFilled
              size={30}
              className="cursor-pointer hover:scale-105 transition"
            />
          </div>
          <h5 className="my-2">FullName</h5>
          <div className="flex gap-2 mb-3">
            <p className="text-sm">0 Posts</p>
            <p className="text-sm">0 Followers</p>
            <p className="text-sm">0 Following</p>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio et
            illum, unde fugit magnam, provident similique est repudiandae
            tenetur voluptatum ex ad architecto expedita asperiores nihil
          </p>
        </div>
      </div>
      <button className="bg-gray-400 text-white p-3 w-[200px] cursor-pointer rounded-md hover:bg-gray-500">
        Edit Profile
      </button>

      <button className="bg-gray-400 text-white p-3 w-[200px] cursor-pointer rounded-md hover:bg-gray-500">
        Edit Profile
      </button>
    </div>
  );
};

export default ProfilePage;
