import React from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FollowersSkeleton = () => {
  const { allUsers, user } = useSelector((state) => state.auth);

  return (
    <div className="w-full">
      <div className="container shadow-lg rounded-md mt-9 p-3 lg:fixed top-5 right-5 w-[20%]">
        <Link className="flex justify-between  items-center">
          <div className="flex p-2 gap-2 items-center">
            <Skeleton circle width={40} height={40} />
            <div className="">
              <div className="flex gap-2 items-center justify-center">
                <h4 className="font-semibold  text-[14px] cursor-pointer">
                  <Skeleton width={30} height={10} />
                </h4>
              </div>
            </div>
          </div>
          {/* <button className="p-2 bg-blue-500 hover:bg-blue-600 active:scale-95 text-white rounded-md duration-100 cursor-pointer">Follow</button> */}
          <p className="text-blue-700 cursor-pointer">
            <Skeleton width={15} height={10} />
          </p>
        </Link>

        <div className="flex my-2 justify-between">
          <h4 className="text-gray-500 font-semibold">
            <Skeleton width={35} height={20} />
          </h4>
          <p className="font-semibold cursor-pointer">
            <Skeleton width={15} height={10} />
          </p>
        </div>

        {Array.isArray(allUsers) &&
          allUsers
            .slice(0, 5)
            .map((item, index) => <Skeleton key={index} {...item} />)}

        {/* <Fpeoples />
        <Fpeoples />
        <Fpeoples />
        <Fpeoples /> */}
      </div>
    </div>
  );
};

export default FollowersSkeleton;
