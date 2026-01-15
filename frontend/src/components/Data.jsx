import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io";
import * as FiIcons from "react-icons/fi";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";

import { Link, Links, useNavigate } from "react-router-dom";
import { useState } from "react";
// const [showSearch,setShowSearch] = useState(false)
// import Link from "react-redux";

let user = JSON.parse(localStorage.getItem("user"));
// let LogoutUser = JSON.parse(localStorage.removeItem("UserLogout"));

export const sidebarItems = [
  {
    id: 1,
    title: "Home",
    icon: <AiIcons.AiFillHome />,
    Link: "/Home",
  },
  {
    id: 2,
    title: "Search",
    icon: <AiIcons.AiOutlineSearch />,

    // have to make the Search page
  },
  {
    id: 3,
    title: "Explore",
    icon: <MdIcons.MdOutlineExplore />,
    Link: "/Explore",
  },
  {
    id: 4,
    title: "Reels",
    icon: <BiIcons.BiMoviePlay />,
    Link: "/reels",
  },
  {
    id: 5,
    title: "Messages",
    icon: <BsIcons.BsMessenger />,
    badge: 3,
    Link: "/message",
  },
  {
    id: 6,
    title: "Notifications",
    icon: <IoIcons.IoMdHeartEmpty />,
    //  have to make the notification page
  },
  {
    id: 7,
    title: "Create",
    icon: <MdIcons.MdOutlineAddBox />,
    // already given in the sidebar
  },
  {
    id: 8,
    title: "Profile",
    icon: <FaIcons.FaRegUserCircle />,
    Link: `/profile/${user?._id} `,
  },
  {
    id: 9,
    title: "MarketPlace",
    icon: <RiShoppingCart2Line />,
    Link: "/marketplace",
  },
  {
    id: 10,
    title: "Logout",
    icon: <FiIcons.FiLogOut />,
    action: "logout",
  },
];

export default sidebarItems;
