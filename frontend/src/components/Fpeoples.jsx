import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Fpeoples = ({ username, fullName, _id }) => {
  const { allUsers } = useSelector((state) => state.auth);
  console.log(allUsers);
  return (
    <>
      <Link
        to={`/profile/${_id}`}
        className="flex justify-between  items-center"
      >
        <div className="flex p-2 gap-2 items-center">
          <img
            className="w-[35px] h-[35px] cursor-pointer"
            src="https://cdn-icons-png.freepik.com/256/10796/10796945.png?semt=ais_white_label"
            alt=""
          />
          <div className="">
            <div className="flex gap-2 items-center justify-center">
              <h4 className="font-semibold  text-[14px] cursor-pointer">
                {username}
              </h4>
            </div>
            <p className="text-sm">{fullName}</p>
          </div>
        </div>
        <button className="p-2 bg-blue-500 hover:bg-blue-600 active:scale-95 text-white rounded-md duration-100 cursor-pointer">
          Follow
        </button>
      </Link>
    </>
  );
};

export default Fpeoples;
