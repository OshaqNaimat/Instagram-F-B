import React from "react";

const Speoples = () => {
  return (
    <div className="flex flex-col items-center shrink-0">
      <div
        className="p-1 rounded-full"
        style={{
          background:
            "linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)",
        }}
      >
        <div className="bg-white p-1 rounded-full">
          <img
            className="w-20 h-20 rounded-full"
            src="https://cdn-icons-png.flaticon.com/256/219/219988.png"
            alt=""
          />
        </div>
      </div>

      <p className="m-0 text-center">Username</p>
    </div>
  );
};

export default Speoples;
