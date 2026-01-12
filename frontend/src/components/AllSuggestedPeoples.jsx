import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import Fpeoples from "./Fpeoples";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";

const Followers = ({ allSuggestions, setAllSuggestion }) => {
  const { allUsers } = useSelector((state) => state.auth);
  return (
    <>
      <div
        className={`bg-black/50 min-h-screen w-full fixed top-0 z-100 ${
          allSuggestions ? "" : "hidden"
        }`}
      >
        <div
          className="
         container w-[50%] mx-auto shadow-lg overflow-x-hidden rounded-md pb-6 mb-8 p-3 z-100 overflow-y-scroll h-[600px] bg-white"
        >
          <div className="flex my-2 justify-center">
            <h4 className="text-gray-500 font-semibold">Suggested for you</h4>
          </div>
          {Array.isArray(allUsers) &&
            allUsers.map((item, index) => <Fpeoples key={index} {...item} />)}
        </div>
        <IoClose
          onClick={() => setAllSuggestion(false)}
          className="z-100 text-white text-4xl fixed top-10 right-10 cursor-pointer"
        />
      </div>
    </>
  );
};

export default Followers;
