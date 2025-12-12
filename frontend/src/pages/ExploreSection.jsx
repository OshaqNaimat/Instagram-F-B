import React from "react";

const ExploreSection = () => {
  return (
    <>
      <div class="grid grid-cols-3 grid-rows-5">
        {/* <!-- div1 (default position) --> */}
        <div class="">
          <img
            src="https://img.freepik.com/premium-photo/reels-instagram-logo-new-feature-social-media-app-3d-rendering_1379-5024.jpg"
            alt=""
          />
        </div>

        {/* <!-- div2: grid-column-start:1; grid-row-start:2 --> */}
        <div class="col-start-1 row-start-2">
          <img
            src="https://img.freepik.com/premium-photo/reels-instagram-logo-new-feature-social-media-app-3d-rendering_1379-5024.jpg"
            alt=""
          />
        </div>

        {/* <!-- div3: grid-column-start:2; grid-row-start:1 --> */}
        <div class="col-start-2 row-start-1">
          <img
            src="https://img.freepik.com/premium-photo/reels-instagram-logo-new-feature-social-media-app-3d-rendering_1379-5024.jpg"
            alt=""
          />
        </div>

        {/* <!-- div4: grid-column-start:2; grid-row-start:2 --> */}
        <div class="col-start-2 row-start-2">
          <img
            src="https://img.freepik.com/premium-photo/reels-instagram-logo-new-feature-social-media-app-3d-rendering_1379-5024.jpg"
            alt=""
          />
        </div>

        {/* <!-- div5: column 3, row 1, row span 2 --> */}
        <div class="col-start-3 row-start-1 row-span-2 ">
          <img
            className="h-full object-cover"
            src="https://img.freepik.com/premium-photo/reels-instagram-logo-new-feature-social-media-app-3d-rendering_1379-5024.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default ExploreSection;
