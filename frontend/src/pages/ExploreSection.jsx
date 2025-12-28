import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const ExploreSection = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="grid grid-cols-4 min-h-screen">
        {/* Sidebar */}
        <div className="hidden md:block md:col-span-1 lg:col-span-1">
          <Sidebar show={show} setShow={setShow} isMobile={false} />
        </div>
      </div>
      {/* very first row */}
      <div className="grid grid-cols-3  grid-rows-3   ">
        {/* <!-- div1 (default position) --> */}
        <div className="">
          <img
            src="https://img.freepik.com/premium-photo/reels-instagram-logo-new-feature-social-media-app-3d-rendering_1379-5024.jpg"
            alt=""
          />
        </div>

        {/* <!-- div2: grid-column-start:1; grid-row-start:2 --> */}
        <div className="col-start-1 row-start-2">
          <img
            src="https://img.freepik.com/premium-photo/reels-instagram-logo-new-feature-social-media-app-3d-rendering_1379-5024.jpg"
            alt=""
          />
        </div>

        {/* <!-- div3: grid-column-start:2; grid-row-start:1 --> */}
        <div className="col-start-2 row-start-1">
          <img
            src="https://img.freepik.com/premium-photo/reels-instagram-logo-new-feature-social-media-app-3d-rendering_1379-5024.jpg"
            alt=""
          />
        </div>

        {/* <!-- div4: grid-column-start:2; grid-row-start:2 --> */}
        <div className="col-start-2 row-start-2">
          <img
            src="https://img.freepik.com/premium-photo/reels-instagram-logo-new-feature-social-media-app-3d-rendering_1379-5024.jpg"
            alt=""
          />
        </div>

        {/* <!-- div5: column 3, row 1, row span 2 --> */}
        <div className="col-start-3 row-start-1 row-span-2 ">
          <img
            className="h-full object-cover"
            src="https://img.freepik.com/premium-photo/reels-instagram-logo-new-feature-social-media-app-3d-rendering_1379-5024.jpg"
            alt=""
          />
        </div>
        {/* Second row */}
        <div class="row-span-2 row-start-3">
          <img
            className="h-full object-cover"
            src="https://img.freepik.com/premium-photo/reels-instagram-logo-new-feature-social-media-app-3d-rendering_1379-5024.jpg"
            alt=""
          />
        </div>

        {/* <!-- div23 --> */}
        <div class="row-start-3">
          <img
            src="https://img.freepik.com/premium-photo/reels-instagram-logo-new-feature-social-media-app-3d-rendering_1379-5024.jpg"
            alt=""
          />
        </div>

        {/* <!-- div24 --> */}
        <div class="col-start-2 row-start-4">
          <img
            src="https://img.freepik.com/premium-photo/reels-instagram-logo-new-feature-social-media-app-3d-rendering_1379-5024.jpg"
            alt=""
          />
        </div>

        {/* <!-- div25 --> */}
        <div class="col-start-3 row-start-3">
          <img
            src="https://img.freepik.com/premium-photo/reels-instagram-logo-new-feature-social-media-app-3d-rendering_1379-5024.jpg"
            alt=""
          />
        </div>

        {/* <!-- div26 --> */}
        <div class="col-start-3 row-start-4">
          <img
            src="https://img.freepik.com/premium-photo/reels-instagram-logo-new-feature-social-media-app-3d-rendering_1379-5024.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default ExploreSection;
