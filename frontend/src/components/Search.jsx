import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";

const [search, setSearch] = useState("");
const [searchedUsers, setSearchUsers] = useState([]);
const { allUsers } = useSelector((state) => state.auth);

const Search = () => {
  return (
    <div className="bg-white h-screen p-5 rounded-md w-[30%] fixed left-13 z-100 shadow-xl shadow-gray-300">
      <div className="">
        <h3 className="font-bold text-3xl mb-5">Search</h3>

        <div className="relative">
          <input
            type="text"
            //   name="password"
            placeholder="Search"
            //   value={formData.password}
            //   onChange={handleChange}
            className="w-full px-3 py-2 pr-12 bg-gray-50 shadow-lg shadow-gray-300 rounded text-sm outline-none"
          />

          <span
            //   onClick={() => setShow(!show)}
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
          >
            <IoClose />
            {/* {show ? <BsEyeSlash /> : <BsEye />} */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Search;
