import React, { useEffect, useState } from "react";
import sidebarItems from "./Data";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Signout, userReset } from "../features/users/userSlice";
import toast from "react-hot-toast";

const Sidebar = ({
  isMobile,
  setShow,
  setPpage,
  showSearch,
  setShowSearch,
}) => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user")) || {};
    setUser(storedUser);
  }, []);

  const mobileVisibleTitles = [
    "Home",
    "Explore",
    "Reels",
    "Create",
    "Messages",
    user.fullName,
  ];

  const updatedSidebarItems = sidebarItems.map((item) =>
    item.title === "Profile"
      ? { ...item, title: user.fullName || "Profile" }
      : item
  );

  const filteredItems = isMobile
    ? updatedSidebarItems.filter((item) =>
        mobileVisibleTitles.includes(item.title)
      )
    : updatedSidebarItems;

  const handleItemClick = (item) => {
    if (item.action === "logout") {
      dispatch(Signout());
      navigate("/");
      toast.success("Logout successfully");
    }
    if (item.title === "Search") {
      setShowSearch((prev) => !prev);

      return;
    }

    if (item.title === "Create") setShow(true);
    if (item.title === user.fullName) setPpage(true);
  };

  return (
    <div
      className={`flex flex-col p-4 overflow-y-scroll h-[80vh] bg-white select-none xl:fixed left-0 md:fixed bottom-0 font-semibold
      ${
        isMobile
          ? "flex-row justify-around w-full p-2"
          : "min-h-screen w-max border-r border-gray-500"
      }`}
    >
      <ul
        className={`my-2 ${
          isMobile ? "flex flex-row w-full justify-between items-center" : ""
        }`}
      >
        {filteredItems.map((item) =>
          item.Link ? (
            <Link
              to={item.Link}
              key={item.id}
              onClick={() => handleItemClick(item)}
              className={`flex items-center md:justify-center lg:justify-start gap-3 py-3 px-2 my-1 text-[20px] cursor-pointer
                rounded-md hover:bg-gray-200 duration-100 active:scale-95
                ${isMobile && "my-!"}`}
            >
              {item.icon}
              <span className="hidden lg:block">{item.title}</span>
            </Link>
          ) : (
            <div
              key={item.id}
              onClick={() => handleItemClick(item)}
              className={`flex items-center md:justify-center lg:justify-start gap-3 py-3 px-2 my-2 text-[20px] cursor-pointer
                rounded-md hover:bg-gray-200 duration-100 active:scale-95
                ${isMobile && "my-!"}`}
            >
              {item.icon}
              <span className="hidden lg:block">{item.title}</span>
            </div>
          )
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
