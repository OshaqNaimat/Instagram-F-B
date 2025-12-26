import moment from "moment";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

const CommentPopUp = ({ user_id }) => {
  return (
    <div>
      <div className="bg-black/50 min-h-screen flex justify-center items-center w-full fixed top-0 z-100">
        <div className="grid grid-cols-2 bg-white w-[60%] h-[80vh] rounded-md shadow-xl">
          {/* reels */}
          <div className="h-[469px] col-span-1 overflow-hidden object-contain">
            <img
              width="100%"
              height="100%"
              className="col-span-1 object-contain "
              src="https://images.pexels.com/photos/1157255/pexels-photo-1157255.jpeg?cs=srgb&dl=pexels-camcasey-1157255.jpg&fm=jpg"
              alt=""
            />
          </div>
          {/* comments */}
          {/* main user */}
          <div className="col-span-1  p-5">
            <div className="flex items-center justify-between border-b border-gray-200">
              <div className="flex gap-2">
                <img
                  src="https://images.pexels.com/photos/1157255/pexels-photo-1157255.jpeg?cs=srgb&dl=pexels-camcasey-1157255.jpg&fm=jpg"
                  className="h-10 w-10 rounded-full"
                  alt=""
                />

                <div className="flex flex-col justify-center ">
                  <h4 className=" font-semibold">
                    Username .{" "}
                    <span className="text-blue-500 font-semibold cursor-pointer hover:underline">
                      Follow
                    </span>
                  </h4>
                  <p className="text-sm">Audio</p>
                </div>
              </div>
              <BsThreeDots
                size={20}
                className="cursor-pointer hover:text-gray-400 hover:scale-110x transition  duration-100"
              />
            </div>
            {/* All commented comments */}
            <div className="">
              <div className="flex gap-2 pt-4">
                <div className="flex items-start justify-center gap-2">
                  <img
                    src="https://images.pexels.com/photos/1157255/pexels-photo-1157255.jpeg?cs=srgb&dl=pexels-camcasey-1157255.jpg&fm=jpg"
                    className="h-10 w-10 rounded-full"
                    alt=""
                  />

                  <div className="flex flex-col justify-center ">
                    <h4 className=" font-semibold">Username </h4>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellendus sunt tempore totam quo mollitia natus at
                      eveniet, commodi ad dolorum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentPopUp;
