import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import { FaRegComment } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";

const ExploreSection = () => {
  const [show, setShow] = useState(false);
  const { posts, likes } = useSelector((state) => state.daak);
  const postsArray = Object.values(posts || []);

  return (
    <div className="grid grid-cols-4 min-h-screen">
      {/* Sidebar */}
      <div className="hidden md:block md:col-span-1">
        <Sidebar show={show} setShow={setShow} />
      </div>

      {/* Explore Feed */}
      <div className="col-span-4 md:col-span-3 grid grid-cols-3 gap-1 p-1">
        {postsArray.length === 0 && (
          <p className="col-span-3 text-center text-gray-500">No posts found</p>
        )}

        {postsArray.map((post, index) => (
          <div
            key={index}
            className={`relative overflow-hidden cursor-pointer ${
              index % 7 === 0 ? "row-span-2" : "aspect-square"
            }`}
          >
            {/* Image */}
            <img
              src={post?.image}
              alt={`Post by ${post?.user || "unknown"}`}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-200 flex items-center justify-center gap-4">
              {/* Icons centered */}
              <div className="flex items-center gap-2 text-white text-lg font-bold">
                <IoHeartOutline />
                <span>{likes}</span>
              </div>
              <div className="flex items-center gap-2 text-white text-lg font-bold">
                <FaRegComment />
                <span>{post?.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;
