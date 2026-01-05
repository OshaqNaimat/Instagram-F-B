import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";

const ExploreSection = () => {
  const [show, setShow] = useState(false);

  const posts = useSelector((state) => state.daak.posts);

  // Convert object to array for mapping
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
            className={`overflow-hidden ${
              index % 7 === 0 ? "row-span-2" : "aspect-square"
            }`}
          >
            <img
              src={post?.image}
              alt={`Post by ${post?.user || "unknown"}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;
