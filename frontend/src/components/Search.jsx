import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link, Links, Navigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchedUsers, setSearchUsers] = useState([]);
  const [ClickedUser, setClickUsers] = useState({});

  const { allUsers, user } = useSelector((state) => state.auth);

  useEffect(() => {
    let foundData = allUsers.filter((item, index) => {
      return item.username.toLowerCase().startsWith(search.toLowerCase());
    });

    if (search) {
      setSearchUsers(foundData);
    } else {
      setSearchUsers([]);
    }
  }, [search]);

  return (
    <div className="bg-white h-screen p-5 rounded-md w-[30%] fixed left-13 z-100 shadow-xl shadow-gray-300">
      <div className="">
        <h3 className="font-bold text-3xl mb-5">Search</h3>

        <div className="relative">
          <input
            type="text"
            //   name="password"
            placeholder="Search"
            // value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 pr-12 bg-gray-50 shadow-lg shadow-gray-300 rounded text-sm outline-none"
          />

          <span
            //   onClick={() => setShow(!show)}
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
          >
            <IoClose />
            {/* {show ? <BsEyeSlash /> : <BsEye />} */}
          </span>
          <div className="overflow-y-auto flex-1 pr-1 ">
            {searchedUsers.map((item) => (
              <div
                // to={`/profile/${ClickedUser?._id}`}
                onClick={() => setClickUsers(item)}
                key={item.id}
                className="flex  items-center gap-2 cursor-pointer hover:bg-gray-200 rounded-md p-2"
              >
                <img
                  className="w-10 h-10 rounded-md"
                  src="https://cdn-icons-png.flaticon.com/256/12225/12225935.png"
                  alt=""
                />

                <Link to={`/profile/${item?._id}`}>
                  {item.username
                    ?.split(new RegExp(`(${search})`, "gi"))
                    .map((part, index) =>
                      part.toLowerCase() === search.toLowerCase() ? (
                        <span
                          key={index}
                          className="bg-green-500 text-white font-semibold px-1 rounded"
                        >
                          {part}
                        </span>
                      ) : (
                        <span key={index}>{part}</span>
                      )
                    )}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
