import React from "react";

const Cpeoples = () => {
  return (
    <>
      <div className="flex justify-between my-2">
        <h3 className="font-bold text-xl">Messages</h3>
        <h5 className="font-bold  text-lg text-gray-500 cursor-pointer hover:border-b-2">
          Requests
        </h5>
      </div>
      <div className="flex item-center gap-4 cursor-pointer">
        <img
          className="w-[60px]  h-[60px] rounded-full"
          src="https://cdn-icons-png.flaticon.com/256/12225/12225935.png"
          alt=""
        />
        <div className="">
          <h4>Username</h4>
          <p>User . Message . time</p>
        </div>
      </div>
    </>
  );
};

export default Cpeoples;
