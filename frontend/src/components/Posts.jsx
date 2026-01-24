import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoSend, IoVolumeMute } from "react-icons/io5";
import Slider from "@mui/material/Slider";
import { RiSendPlaneFill } from "react-icons/ri";
import { FiBookmark } from "react-icons/fi";
import moment from "moment";
import ClockLoader from "react-spinners/ClockLoader";
import { useDispatch, useSelector } from "react-redux";
import {
  addCommentData,
  addLikeData,
  getRelaventComments,
} from "../features/posts/postSlice";
import { toast } from "react-hot-toast";
import { addLikes } from "../../../backend/controller/PostController";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosSend } from "react-icons/io";
import CommentPopUp from "./CommentPopUp";
import { Link } from "react-router-dom";

const Posts = ({
  caption,
  image,
  filter,
  createdAt,
  user_id,
  _id,
  comment,
  likes,
}) => {
  const { postLoading, commentLoading, commentSuccess, commentError } =
    useSelector((state) => state.daak);
  const [comments, setComments] = useState("");
  const [liked, setLiked] = useState(false);
  const [allComments, setAllComments] = useState(false);

  const dispatch = useDispatch();

  const handleComment = () => {
    const commentData = {
      post_id: _id,
      user_id: user_id._id,
      comments,
    };

    dispatch(addCommentData(commentData));
    dispatch(getRelaventComments());
    toast.success("Comment Added");
    setComments("");
  };

  const handleLike = () => {
    const likeData = {
      post_id: _id,
      user_id: user_id._id,
    };

    dispatch(addLikeData(likeData));
    setLiked(true);

    setTimeout(() => {
      setLiked(false);
    }, 900);
  };

  const isLiked = likes.includes(user_id._id);

  // const handleOpen = () => {
  //   setAllComments(true);
  // };

  return (
    <>
      {allComments && (
        <CommentPopUp
          userid={user_id}
          comments={comments}
          setAllComments={setComments}
          sabComments={setAllComments}
        />
      )}
      <div className="container rounded-md mb-10  shadow-lg w-[80%] mt-10 mx-auto relative select-none overflow-hidden">
        <div className="flex justify-between p-2 items-center">
          <div className="flex p-2 gap-2 items-center">
            {user_id.image ? (
              <img
                className="w-[35px] h-[35px] cursor-pointer"
                src={user_id.image}
                alt=""
              />
            ) : (
              <img
                className="w-[35px] h-[35px] cursor-pointer"
                src="https://cdn-icons-png.freepik.com/256/10796/10796945.png?semt=ais_white_label"
                alt=""
              />
            )}

            <div className="">
              <div className="flex gap-2 items-center justify-center">
                <Link
                  to={`/profile/${user_id?._id}`}
                  className="font-semibold  text-[14px] cursor-pointer"
                >
                  {user_id.username}
                </Link>
                <GoDotFill size={6} />
                <p className="text-gray-500">{moment(createdAt).fromNow()}</p>
              </div>

              <p className="text-sm">Audio</p>
            </div>
          </div>
          <BsThreeDots size={25} className="cursor-pointer" />
        </div>
        <div className="relative">
          <img className="w-full object-cover" src={image} alt="" />

          <svg width="0" height="0">
            <defs>
              <linearGradient
                id="heartGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stop-color="#ffc0cb" />
                <stop offset="50%" stop-color="#d68cff" />
                <stop offset="100%" stop-color="#8a2be2" />
              </linearGradient>
            </defs>
          </svg>

          <FaHeart
            size={100}
            style={{ fill: "url(#heartGradient)" }}
            className={`transition duration-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
              liked ? "scale-100" : "scale-0"
            } `}
          />
        </div>

        <div className="flex justify-between items-center w-full my-3 p-2 ">
          <div className="flex gap-3">
            <div className="relative w-8 h-8 overflow-hidden">
              <AnimatePresence mode="wait">
                {isLiked ? (
                  <motion.div
                    key="liked"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    onClick={handleLike}
                    className="absolute cursor-pointer"
                  >
                    <FaHeart size={25} color="red" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="unliked"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    onClick={handleLike}
                    className="absolute cursor-pointer"
                  >
                    <FaRegHeart size={25} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <FaRegComment
              onClick={() => setAllComments(true)}
              size={25}
              className="cursor-pointer hover:text-gray-500 duration-100"
            />
            <RiSendPlaneFill
              size={25}
              className="cursor-pointer hover:text-gray-500 duration-100"
            />
          </div>
          <FiBookmark
            size={25}
            className="cursor-pointer hover:text-gray-500 duration-100"
          />
        </div>
        <div className="px-2 m-0 font-semibold">{likes.length} likes</div>

        <p className="text-gray p-2 ">
          <span className="font-semibold mx-1">{user_id.username}</span>
          {caption}
        </p>
        <p className="text-sm ps-3 text-gray-400 cursor-pointer">
          {comment?.length > 1 ? (
            `View all ${comment?.length} comments`
          ) : comment.length == 1 ? (
            <p onClick={() => setAllComments(true)}>View Comment</p>
          ) : (
            "Koi Rae Nahi "
          )}
        </p>
        <div className="flex items-center p-2 rounded-md">
          <input
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            type="text"
            placeholder="Add a comment..."
            className="border border-gray-100 w-full py-2 rounded-md
               focus:outline-none focus:ring-1 focus:ring-cyan-200 focus:border-cyan-200
               transition"
          />

          <button
            onClick={handleComment}
            // disabled={comments.trim() === "" || commentLoading}
            className={`font-semibold px-1 transition
        ${
          comments.trim() === "" || commentLoading
            ? "text-gray-400 cursor-not-allowed"
            : "text-cyan-500 hover:text-cyan-700"
        }
        `}
          >
            {commentLoading ? (
              <ClockLoader color="blue" size={20} />
            ) : (
              <IoIosSend size={25} />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Posts;
