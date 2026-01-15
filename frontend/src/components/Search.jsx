import React from "react";

const Search = () => {
  return (
    <div className="">
      <h3 className="font-bold text-3xl">Search</h3>

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
          {/* {show ? <BsEyeSlash /> : <BsEye />} */}
        </span>
      </div>
    </div>
  );
};

export default Search;
