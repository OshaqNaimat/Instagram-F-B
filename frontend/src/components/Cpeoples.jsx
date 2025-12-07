import React from "react";

const Cpeoples = () => {
  return (
    <>
      <div className="flex item-center gap-4 cursor-pointer my-3">
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
