import React from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Fpeoples from "./Fpeoples";

const PostSkeleton = () => {
  const { allUsers, user } = useSelector((state) => state.auth);

  return (
    <div className="container rounded-md shadow-lg w-[40%] mt-10 mx-auto relative select-none overflow-hidden">
      <div className="flex justify-between p-2 items-center">
        <div className="flex p-2 gap-2 items-center">
          <Skeleton circle height={50} width={50} />
          <div className="">
            <div className="flex gap-2 items-center justify-center">
              <h4 className="font-semibold  text-[14px] cursor-pointer">
                <Skeleton width={100} />
              </h4>
              {/* <GoDotFill size={6} /> */}
              <p className="text-gray-500">
                <Skeleton width={50} />
              </p>
            </div>

            <p className="text-sm">
              <Skeleton width={30} />
            </p>
          </div>
        </div>
        <Skeleton width={30} />
      </div>
      <Skeleton width={"100%"} height={450} />
      <div className="flex justify-between items-center w-full my-3 p-2 ">
        <div className="flex gap-3">
          <Skeleton width={30} height={30} />

          <Skeleton width={30} height={30} />
          <Skeleton width={30} height={30} />
        </div>
        <Skeleton width={30} height={30} />
      </div>
      <Skeleton className="ms-2" width={40} />

      <p className="ms-2 flex gap-1 ">
        <Skeleton width={60} />
        <Skeleton width={60} />
      </p>
      <div className="flex items-center justify-between p-2 rounded-md">
        <Skeleton width={350} height={20} />
        <p className="font-semibold cursor-pointer">
          <Skeleton width={30} />
        </p>
      </div>

      {/* follow page */}
    </div>
  );
};

export default PostSkeleton;
