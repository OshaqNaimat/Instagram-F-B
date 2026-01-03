import React, { useState } from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { IoIosArrowDown, IoMdInformationCircleOutline } from "react-icons/io";
import {
  IoCallOutline,
  IoImageOutline,
  IoSearch,
  IoSend,
} from "react-icons/io5";
import { BsCameraVideo } from "react-icons/bs";
import Cpeoples from "../components/Cpeoples";
import { FaRegSmile } from "react-icons/fa";
import { TiMicrophoneOutline } from "react-icons/ti";
import { PiStickerBold } from "react-icons/pi";
import { TbSend } from "react-icons/tb";
import IconSidebar from "../components/IconSidebar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../features/users/userSlice";
import { Link } from "react-router-dom";
import {
  getMessageData,
  sendMessageData,
} from "../features/messages/messageSlice";
import SingleMessage from "../components/SingleMessage";
import io from "socket.io-client";
import RetroCRTCallToast from "../components/Calling";
import NeumorphismCallToast from "../components/Calling";
import GlassmorphismCallToast from "../components/Calling";
import Calling from "../components/Calling";
// import CallingToast from "../components/Calling";

const socket = io.connect("http://localhost:5000");

/**
 * Fixed version:
 * - Independent scroll for LEFT and RIGHT sections
 * - Removed extra bottom spacing under input
 * - Right panel chat body now scrolls separately
 */

const Messages = () => {
  // const [chatPeoples] = useState([
  //   { id: 1, username: "Ali", message: "Salam" },
  //   { id: 2, username: "Ahmed", message: "Salam" },
  //   { id: 3, username: "Usman", message: "Salam" },
  //   { id: 5, username: "Abdullah", message: "Salam" },
  //   { id: 6, username: "Murad", message: "Salam" },
  //   { id: 7, username: "Yosuf", message: "Salam" },
  //   { id: 8, username: "Muzammil", message: "Salam" },
  // ]);

  const [showChat, setShowChat] = useState(false);
  const [search, setSearch] = useState("");
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [ClickedUser, setClickUsers] = useState({});
  const [message, setMessage] = useState("");
  const { allUsers, userLoading, userSuccess, userError, user } = useSelector(
    (state) => state.auth
  );
  const { messages, messageLoading, messageSuccess, messageError } =
    useSelector((state) => state.chats);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  useEffect(() => {
    let foundData = allUsers.filter((item, index) => {
      return item.username.toLowerCase().startsWith(search.toLowerCase());
    });

    if (search) {
      setSearchedUsers(foundData);
    } else {
      setSearchedUsers([]);
    }
  }, [search]);

  const handleMessageSend = () => {
    // const messageData = {
    //   message,
    //   sender_id: user?._id,
    //   receiver_id: ClickedUser?._id,
    // };
    // dispatch(sendMessageData(messageData));

    socket.emit("sent_message", {
      message,
      sender_id: user?._id,
      receiver_id: ClickedUser?._id,
      time: Date.now(),
      sent: true,
    });
  };

  const [call, setCall] = useState(false);
  const [callLink, setCallLink] = useState(null);
  const [callReceived, setCallReceived] = useState(false);
  const [callDeclined, setCallDeclined] = useState(false);

  useEffect(() => {
    socket.on("received_message", (data) => {
      alert(data.message);
    });

    socket.on("call_arahi_hai", (data) => {
      if (user?._id == data?.receiver_id) {
        setCall(true);
      }
    });

    // declined

    socket.on("nahi_uthai", (data) => {
      alert("Call Declined");
    });

    //answered

    socket.on("utha_li_ha", (data) => {
      setCallLink(data.shareableLink);
    });
  });

  const handleVideoCall = () => {
    window.open(
      `http://localhost:5173/video-call/${user?._id}/${ClickedUser?._id}`,
      "_blank"
    );
    socket.emit("calling", {
      caller_id: user?._id,
      receiver_id: ClickedUser?._id,
    });
  };

  return (
    <>
      {call && (
        <Calling
          callDeclined={callDeclined}
          setCallDeclined={setCallDeclined}
          callReceived={callReceived}
          setCallReceived={setCallReceived}
        />
      )}
      <div className="grid grid-cols-13  h-screen select-none overflow-hidden">
        {/* sidebar */}
        <div className="col-span-1 icon-sidebar">
          <IconSidebar />
        </div>

        {/* LEFT PANEL */}
        <div className="col-span-4  border-r hidden sm:flex flex-col p-4 overflow-hidden">
          {/* Top Username Row */}
          <div className="flex justify-between items-center mb-3">
            <div className="flex gap-1 items-center cursor-pointer">
              <h2 className="font-bold text-xl">{user?.username}</h2>
              <IoIosArrowDown size={20} />
            </div>
            <FaPenToSquare className="cursor-pointer w-6 h-6 active:scale-110 transition" />
          </div>

          {/* Search Bar */}
          <div className="flex shadow-sm shadow-gray-300 rounded-full mb-5">
            <IoSearch size={40} className="p-2 rounded-full text-gray-500" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search"
              className="w-full p-2 outline-none rounded-full text-sm"
            />
          </div>

          {/* Notes */}
          <div className="flex flex-col justify-center items-center mb-5">
            <img
              className="w-[60px] h-[60px] rounded-full"
              src="https://cdn-icons-png.flaticon.com/256/12225/12225935.png"
              alt=""
            />
            <p className="text-xs text-gray-500 mt-1">Your Note</p>
          </div>

          {/* Messages Header */}
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-lg">Messages</h3>
            <h5 className="font-semibold text-gray-500 cursor-pointer hover:border-b">
              Requests
            </h5>
          </div>
          {/* Chat List — Independent Scroll */}
          <div
            onClick={() => setShowChat(true)}
            className="overflow-y-auto flex-1 pr-1 "
          >
            {searchedUsers.map((item) => (
              <div
                onClick={() => {
                  setClickUsers(item),
                    dispatch(
                      getMessageData({
                        sender_id: user?._id,
                        receiver_id: item?._id,
                      })
                    );
                }}
                key={item.id}
                className="flex  items-center gap-2 cursor-pointer hover:bg-gray-200 rounded-md p-2"
              >
                <img
                  className="w-10 h-10 rounded-md"
                  src="https://cdn-icons-png.flaticon.com/256/12225/12225935.png"
                  alt=""
                />

                <div>
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
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL */}

        {showChat ? (
          <div className="col-span-14  sm:col-span-8 flex flex-col  h-full overflow-hidden">
            {/* Chat Header */}
            <div className="flex p-2 justify-between items-center border-b gap-3 sticky top-0 bg-white z-10">
              <Link
                to={`/profile/${ClickedUser?._id}`}
                className="flex items-center gap-2 cursor-pointer"
              >
                <img
                  className="w-[60px] h-[60px] rounded-full object-cover"
                  src="https://cdn-icons-png.flaticon.com/256/12225/12225935.png"
                  alt=""
                />
                <div>
                  <h4 className="font-semibold">{ClickedUser?.username}</h4>
                  <p className="text-gray-500 text-[11px]">Active 2hr ago</p>
                </div>
              </Link>
              <div className="flex items-center gap-4 ">
                {/* <IoCallOutline
                  onClick={handleVideoCall}
                  size={25}
                  className="cursor-pointer hover:scale-105 transition"
                /> */}
                <BsCameraVideo
                  onClick={handleVideoCall}
                  size={25}
                  className="cursor-pointer hover:scale-105 transition"
                />
                <IoMdInformationCircleOutline
                  size={25}
                  className="cursor-pointer hover:scale-105 transition"
                />
              </div>
            </div>

            {/* Chat Body — Independent Scroll */}
            <div className="overflow-y-scroll h-[90vh]">
              <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center text-center p-4">
                <img
                  className="rounded-full w-[120px] h-[120px] object-contain"
                  src="https://cdn-icons-png.flaticon.com/256/12225/12225935.png"
                  alt=""
                />
                <div>
                  <h2 className="font-bold text-xl">{ClickedUser?.username}</h2>
                  <p className="text-gray-500 text-[11px]">
                    {ClickedUser?.fullName} · Instagram
                  </p>
                </div>
                <button className="p-2 rounded-md bg-gray-100 mt-2 cursor-pointer hover:bg-gray-200">
                  View Profile
                </button>
              </div>

              {/* show messages */}
              <div className=" px-2">
                {messages?.map((item, index) => {
                  return <SingleMessage {...item} key={index} />;
                })}
              </div>
            </div>
            {/* Input Section — No extra margin */}
            <div className="p-3 flex items-end bg-white">
              <FaRegSmile
                size={49}
                className="border border-e-0 border-gray-300 p-2 rounded-full rounded-e-none hover:scale-105 cursor-pointer"
              />

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message..."
                rows={1}
                className="p-3 w-full border  border-s-0 border-e-0 border-gray-300 rounded-s-none outline-none resize-none max-h-40 overflow-y-auto"
              ></textarea>

              {message.length == 0 && (
                <>
                  <TiMicrophoneOutline
                    size={49}
                    className="border border-gray-300 p-2 border-s-0 border-e-0 hover:scale-105 cursor-pointer"
                  />

                  <IoImageOutline
                    size={49}
                    className="border border-gray-300 p-2 border-s-0 border-e-0 hover:scale-105 cursor-pointer"
                  />

                  <PiStickerBold
                    size={49}
                    className="border border-gray-300 p-2 border-s-0 rounded-full rounded-s-none border-e-0 hover:scale-105 cursor-pointer"
                  />
                </>
              )}

              {message.length != 0 && (
                <IoSend
                  disabled={message.length == 0}
                  onClick={handleMessageSend}
                  size={49}
                  className="border border-gray-300 p-2 border-s-0 rounded-full rounded-s-none hover:scale-105 cursor-pointer"
                />
              )}
            </div>
          </div>
        ) : (
          <div className="col-span-12 sm:col-span-8 flex flex-col gap-2 justify-center items-center h-full overflow-hidden">
            <TbSend size={75} />
            <h2 className="font-bold">Your Message</h2>
            <p className="text-gray-400 text-sm">
              Send a message to start a chat.
            </p>
            <button
              // onClick={() => setShowChat(true)}
              className="p-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 cursor-pointer"
            >
              Send message
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Messages;
