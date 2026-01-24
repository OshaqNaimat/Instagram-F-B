import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Posts from "../components/Posts";
import Followers from "../components/Followers";
import PostModal from "../components/PostModal";
import Stories from "../components/Stories";
import Hmessages from "../components/Hmessages";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentGet, getDaak } from "../features/posts/postSlice";
import ProfilePage from "./ProfilePage";
import AllSuggestedPeoples from "../components/AllSuggestedPeoples";
import PostSkeleton from "../components/PostSkeleton";
import CommentPopUp from "../components/CommentPopUp";
import Search from "../components/Search";
import FollowersSkeleton from "../components/FollowersSkeleton";

const Home = () => {
  const [show, setShow] = useState(false);
  const [allSuggestions, setAllSuggestions] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDaak());
    dispatch(commentGet());
  }, []);

  const { posts, postLoading, postError, postSuccess, postMessage } =
    useSelector((state) => state.daak);

  if (postLoading) {
    return [...Array(5)].map((_, index) => {
      return (
        <>
          <PostSkeleton key={index} />
          <FollowersSkeleton key={index} />
        </>
      );
    });
  }

  return (
    <>
      {/* <Hmessages className="fixed right-5 bottom-5" /> */}
      {/* <div className="min-h-screen backdrop-blur-md absolute z-100 w-full"> */}
      <AllSuggestedPeoples
        allSuggestions={allSuggestions}
        setAllSuggestion={setAllSuggestions}
      />
      <Search showSearch={showSearch} setShowSearch={setShowSearch} />
      {/* all comments */}
      {/* </div> */}
      <PostModal show={show} setShow={setShow} />
      <div className="grid grid-cols-4 min-h-screen">
        {/* Sidebar */}
        <div className="hidden md:block md:col-span-1 lg:col-span-1">
          <Sidebar
            show={show}
            setShow={setShow}
            isMobile={false}
            showSearch={showSearch}
            setShowSearch={setShowSearch}
          />
        </div>

        {/* Posts */}

        <div className="col-span-4 md:col-span-3 lg:col-span-2 p-3 rounded-md">
          {/* <Stories /> */}
          {posts?.map((item, index) => {
            return <Posts {...item} key={item._id} />;
          })}
        </div>

        {/* Followers */}

        <div className="hidden lg:block lg:col-span-1 m-3">
          <Followers
            allSuggestions={allSuggestions}
            setAllSuggestion={setAllSuggestions}
          />
        </div>

        {/* Bottom Navbar for small screens */}
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-around py-3 md:hidden">
          <Sidebar isMobile={true} />
        </div>
      </div>
    </>
  );
};

export default Home;
