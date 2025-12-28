import React, { useState, useRef, useEffect } from "react";
import { X, Heart, Send, MoreVertical, Verified } from "lucide-react";
import { useSelector } from "react-redux";

// Mock data
const currentUser = {
  id: "user1",
  username: "current_user",
  avatar: "https://i.pravatar.cc/150?img=1",
};

const initialComments = [
  {
    id: "1",
    userId: "user2",
    username: "sarah_jones",
    avatar: "https://i.pravatar.cc/150?img=2",
    comment: "This is amazing! Love the colors 😍",
    timestamp: "2h ago",
    likes: 24,
    isLiked: false,
  },
  {
    id: "2",
    userId: "user3",
    username: "alex_wanderer",
    avatar: "https://i.pravatar.cc/150?img=3",
    comment: "Beautiful composition! Where was this taken?",
    timestamp: "3h ago",
    likes: 18,
    isLiked: true,
  },
];

const CommentPopUp = ({ users, comment }) => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(1500);
  const commentsEndRef = useRef(null);

  const { image } = useSelector((state) => state.daak);

  useEffect(() => {
    commentsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [comments]);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now().toString(),
      userId: currentUser.id,
      username: currentUser.username,
      avatar: currentUser.avatar,
      comment: newComment,
      timestamp: "Just now",
      likes: 0,
      isLiked: false,
    };

    setComments([...comments, comment]);
    setNewComment("");
  };

  const handleLikeComment = (commentId) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
              isLiked: !comment.isLiked,
            }
          : comment
      )
    );
  };

  const handleLikePost = () => {
    setIsLiked(!isLiked);
    setLikesCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const formatLikes = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  // const handleClose = () => {
  //   setAllComments(false);
  // };
  return (
    <div>
      <div className={`bg-black/50 min-h-screen w-full fixed top-0 z-100}`}>
        <div className="flex bg-white w-[60%] h-[500px] mt-10 m-auto rounded-md shadow-xl">
          {/* Left side - Video/Image */}
          <div className="w-[35%] border-r">
            <div className="relative h-full">
              {/* Post header */}
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-3">
                  <img
                    src="https://i.pravatar.cc/150?img=8"
                    alt="User"
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold">photography_world</span>
                      <Verified className="w-4 h-4 text-blue-500 fill-blue-500" />
                    </div>
                    <span className="text-sm text-gray-500">Paris, France</span>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <MoreVertical className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Video/Image placeholder */}
              <div className="h-[calc(100%-120px)] flex items-center justify-center bg-black">
                <div className="text-center">
                  <img src={image} className="h-full w-[200px]" alt="" />
                  <p className="text-white text-lg">Reel playing...</p>
                </div>
              </div>

              {/* Action buttons below video */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/20 to-transparent">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleLikePost}
                      className={`flex items-center gap-2 ${
                        isLiked ? "text-red-500" : "text-white"
                      }`}
                    >
                      <Heart
                        className={`w-6 h-6 ${isLiked ? "fill-red-500" : ""}`}
                      />
                      <span className="font-semibold">
                        {formatLikes(likesCount)}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Comments */}
          <div className="w-[65%] flex flex-col">
            {/* Comments header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-semibold">All comments</h2>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <X
                  // onClick={handleClose}
                  className="w-5 h-5 text-gray-600 cursor-pointer hover:scale-110 transition duration-100"
                />
              </button>
            </div>

            {/* Comments list */}
            <div className="flex-1 overflow-y-auto p-4">
              {comments.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                  <MessageCircle className="w-12 h-12 mb-4" />
                  <p>No comments yet</p>
                  <p className="text-sm">Be the first to comment!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex gap-3">
                      <img
                        src={comment.avatar}
                        alt={comment.username}
                        className="w-8 h-8 rounded-full flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-sm">
                            {comment.username}
                          </span>
                          <span className="text-xs text-gray-500">
                            {comment.timestamp}
                          </span>
                        </div>
                        <p className="text-sm mb-2">{comment.comment}</p>
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => handleLikeComment(comment.id)}
                            className={`flex items-center gap-1 text-xs ${
                              comment.isLiked ? "text-red-500" : "text-gray-500"
                            }`}
                          >
                            <Heart
                              className={`w-3 h-3 ${
                                comment.isLiked ? "fill-red-500" : ""
                              }`}
                            />
                            {comment.likes > 0 && comment.likes}
                          </button>
                          <button className="text-xs text-gray-500">
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div ref={commentsEndRef} />
                </div>
              )}
            </div>

            {/* Comment input */}
            <div className="border-t p-4">
              <form
                onSubmit={handleSubmitComment}
                className="flex items-center gap-3"
              >
                <img
                  src={currentUser.avatar}
                  alt={currentUser.username}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!newComment.trim()}
                  className={`font-semibold text-sm ${
                    newComment.trim()
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-blue-300 cursor-not-allowed"
                  }`}
                >
                  Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentPopUp;
