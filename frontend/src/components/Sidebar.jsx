import React from "react";
import sidebarItems from "./Data";

const user = JSON.parse(localStorage.getItem("user")) || {};

const Sidebar = ({ isMobile, setShow, setPpage }) => {
  // Titles allowed on mobile
  const mobileVisibleTitles = [
    "Home",
    "Explore",
    "Reels",
    "Create",
    "Messages",
    user.fullName,
  ];

  // Replace "Profile" title with user's full name
  const updatedSidebarItems = sidebarItems.map((item) =>
    item.title === "Profile"
      ? { ...item, title: user.fullName || "Profile" }
      : item
  );

  // Filter for mobile view
  const filteredItems = isMobile
    ? updatedSidebarItems.filter((item) =>
        mobileVisibleTitles.includes(item.title)
      )
    : updatedSidebarItems;

  return (
    <div
      className={`flex flex-col p-5 select-none xl:fixed left-0 md:fixed bottom-0 font-semibold
      ${
        isMobile
          ? "flex-row justify-around w-full p-2"
          : "min-h-screen w-max border-r border-gray-500"
      }`}
    >
      {/* Instagram logo hidden on mobile */}
      {!isMobile && (
        <img
          className="hidden sm:block w-[70px] h-[70px]"
          src="https://images.vexels.com/media/users/3/137198/isolated/lists/07f0d7b69ef071571e4ada2f4d6a053a-instagram-icon-colorful.png"
          alt="Instagram"
        />
      )}

      <ul
        className={`my-4 ${
          isMobile ? "flex flex-row w-full justify-between items-center" : ""
        }`}
      >
        {filteredItems.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              if (item.title === "Create") setShow(true);
              if (item.title === user.fullName) setPpage(true);
            }}
            className={`flex items-center md:justify-center lg:justify-start gap-3 py-3 px-2 my-2 text-[20px] cursor-pointer
              rounded-md hover:bg-gray-200 duration-100 active:scale-95
              ${isMobile && "!my-0"}`}
          >
            {item.icon}
            {/* Text only on large screens */}
            <span className="hidden lg:block">{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
