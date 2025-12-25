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
import { addCommentData } from "../features/posts/postSlice";
import {toast} from 'react-hot-toast'

const Posts = ({ caption, image, filter, createdAt,user_id,_id,comment,likes }) => {
  const { postLoading,commentLoading,commentSuccess,commentError } = useSelector((state) => state.daak);
  const [comments,setComments] = useState('')


  const dispatch = useDispatch()

  const handleComment = ()=>{
    const commentData = {
      post_id:_id,
      user_id:user_id._id,
      comments
    }

     dispatch(addCommentData(commentData))
     toast.success("Comment Added")
     setComments('')

  }

  return (
    <>
      <div className="container rounded-md mb-10  shadow-lg w-[80%] mt-10 mx-auto relative select-none overflow-hidden">
        <div className="flex justify-between p-2 items-center">
          <div className="flex p-2 gap-2 items-center">
           
           {user_id.image ? <img
              className="w-[35px] h-[35px] cursor-pointer"
              src={user_id.image}
              alt=""
            />: <img
              className="w-[35px] h-[35px] cursor-pointer"
              src="https://cdn-icons-png.freepik.com/256/10796/10796945.png?semt=ais_white_label"
              alt=""
            /> }
           
            <div className="">
              <div className="flex gap-2 items-center justify-center">
                <h4 className="font-semibold  text-[14px] cursor-pointer">
                  {user_id.username}
                </h4>
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
        </div>
        {/* <div className="absolute bottom-3 right-3 ">
                 <IoVolumeMute  size={25} className='bg-black/50 p-1 cursor-pointer text-white rounded-full  '/> */}
        {/* <input type="range" name='volume' id='volume'  className='' /> */}
        {/* <label htmlFor="volume"> */}
        {/* <div onClick={()=>setVolume(true)} className="h-[90px] bg-black/50 py-2 rounded-full absolute right-2 bottom-9">
                   <Slider
        aria-label="Temperature"
        orientation="vertical"
        // getAriaValueText={getAriaValueText}
        valueLabelDisplay="auto"
        defaultValue={0}
      />
                </div> */}
        {/* </label> */}
        {/* </div> */}
        <div className="flex justify-between items-center w-full my-3 p-2 ">
          <div className="flex gap-3">
            <FaRegHeart
              size={25}
              className="cursor-pointer  hover:text-gray-500 duration-100 "
            />
            <FaRegComment
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
          {
            comment?.length > 1 ? `View all ${comment?.length} comments` : comment.length == 1 ? 'View Comment' : 'Koi Rae Nahi '
          }
        </p>
       <div className="flex items-center p-2 rounded-md">
  <input
    value={comments}
    onChange={(e) => setComments(e.target.value)}
    type="text"
    placeholder="Add a comment..."
    className="border border-gray-100 w-full py-2 rounded-md
               focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500
               transition"
  />

  <button
    onClick={handleComment}
    disabled={comments.trim() === "" || commentLoading}
    className={`font-semibold px-1 transition
      ${
        comments.trim() === "" || commentLoading
          ? "text-gray-400 cursor-not-allowed"
          : "text-cyan-500 hover:text-cyan-700"
      }`}
  >
    {commentLoading ? (
      <ClockLoader color="blue" size={20} />
    ) : (
      <IoSend size={30} />
    )}
  </button>
</div>

      </div>
    </>
  );
};

export default Posts;
