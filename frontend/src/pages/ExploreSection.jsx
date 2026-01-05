import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const img =
  "https://img.freepik.com/premium-photo/reels-instagram-logo-new-feature-social-media-app-3d-rendering_1379-5024.jpg";

const ExploreSection = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 min-h-screen">
      {/* Sidebar */}
      <div className="hidden md:block md:col-span-1">
        <Sidebar show={show} setShow={setShow} />
      </div>

      {/* Explore Section */}
      <div className="md:col-span-3 p-1">
        <div
          className="
            grid 
            grid-cols-3 
            auto-rows-fr 
            gap-1
          "
        >
          {/* 1 */}
          <div className="aspect-square">
            <img src={img} className="w-full h-full object-cover" />
          </div>

          {/* 2 */}
          <div className="aspect-square">
            <img src={img} className="w-full h-full object-cover" />
          </div>

          {/* 3 */}
          <div className="row-span-2">
            <img src={img} className="w-full h-full object-cover" />
          </div>

          {/* 4 */}
          <div className="aspect-square">
            <img src={img} className="w-full h-full object-cover" />
          </div>

          {/* 5 */}
          <div className="aspect-square">
            <img src={img} className="w-full h-full object-cover" />
          </div>

          {/* 6 */}
          <div className="row-span-2">
            <img src={img} className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square">
            <img src={img} className="w-full h-full object-cover" />
          </div>

          {/* 7 */}

          {/* 8 */}
          <div className="aspect-square">
            <img src={img} className="w-full h-full object-cover" />
          </div>

          {/* 9 */}
          <div className="aspect-square">
            <img src={img} className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square">
            <img src={img} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
