import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const ExploreSection = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="grid grid-cols-4 min-h-screen">
        {/* Sidebar */}
        <div className="hidden md:block bg md:col-span-1">
          <Sidebar show={show} setShow={setShow} />
        </div>

        {/* Explore Section */}
        <div className="col-span-3 grid grid-cols-3">
          {/* div 1 */}
          <div>
            <img
              src="https://img.freepik.com/premium-photo/reels-instagram-logo-new-feature-social-media-app-3d-rendering_1379-5024.jpg"
              alt=""
            />
          </div>

          {/* div 2 */}
          <div className="col-start-1 row-start-2">
            <img
              src="https://img.freepik.com/premium-photo/reels-instagram-logo-new-feature-social-media-app-3d-rendering_1379-5024.jpg"
              alt=""
            />
          </div>

          {/* div 3 */}
          <div className="col-start-2 row-start-1">
            <img
              src="https://img.freepik.com/premium-photo/reels-instagram-logo-new-feature-social-media-app-3d-rendering_1379-5024.jpg"
              alt=""
            />
          </div>

          {/* div 4 */}
          <div className="col-start-2 row-start-2">
            <img
              src="https://img.freepik.com/premium-photo/reels-instagram-logo-new-feature-social-media-app-3d-rendering_1379-5024.jpg"
              alt=""
            />
          </div>

          {/* div 5 */}
          <div className="col-start-3 row-start-1 row-span-2">
            <img
              className="h-full object-cover"
              src="https://img.freepik.com/premium-photo/reels-instagram-logo-new-feature-social-media-app-3d-rendering_1379-5024.jpg"
              alt=""
            />
          </div>

          {/* div 6 */}
          <div className="row-start-3 row-span-2">
            <img
              className="h-full object-cover"
              src="https://img.freepik.com/premium-photo/reels-instagram-logo-new-feature-social-media-app-3d-rendering_1379-5024.jpg"
              alt=""
            />
          </div>

          {/* div 7 */}
          <div className="row-start-3">
            <img
              src="https://img.freepik.com/premium-photo/reels-instagram-logo-new-feature-social-media-app-3d-rendering_1379-5024.jpg"
              alt=""
            />
          </div>

          {/* div 8 */}
          <div className="col-start-2 row-start-4">
            <img
              src="https://img.freepik.com/premium-photo/reels-instagram-logo-new-feature-social-media-app-3d-rendering_1379-5024.jpg"
              alt=""
            />
          </div>

          {/* div 9 */}
          <div className="col-start-3 row-start-3">
            <img
              src="https://img.freepik.com/premium-photo/reels-instagram-logo-new-feature-social-media-app-3d-rendering_1379-5024.jpg"
              alt=""
            />
          </div>

          {/* div 10 */}
          <div className="col-start-3 row-start-4">
            <img
              src="https://img.freepik.com/premium-photo/reels-instagram-logo-new-feature-social-media-app-3d-rendering_1379-5024.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreSection;
