import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BsZoomIn } from "react-icons/bs";
import Slider from "@mui/material/Slider";
import { IoCloseSharp } from "react-icons/io5";
import ImageFilter from "react-image-filter";
import { filters } from "../Data/Filters";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addDaak } from "../features/posts/postSlice";

const PostModal = ({ show, setShow }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [image, setImage] = useState(null);
  const [zoomin, setZoomIn] = useState(false);
  const [range, setRange] = useState(100);
  const [thirdScreen, setThirdScreen] = useState(false);
  const [editFilter, setEditFilter] = useState(filters.original);
  const [fourthScreen, setFourthScreen] = useState(false);
  const [caption, setCaption] = useState("");

  const uploadToCloudinary = async () => {
    let data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "instagram");
    let response = await axios.post(
      "http://api.cloudinary.com/v1_1/daaqun6yh/image/upload",
      data
    );
    return response.data.url;
  };

  const handleImageViewer = (e) => {
    let post = e.target.files[0];
    let postURL = URL.createObjectURL(post);
    setImagePreview(postURL);
    setImage(post);
  };

  useEffect(() => {
    console.log(range);
  }, [range]);

  const dispatch = useDispatch();

  const handlePostUpload = async () => {
    let myImage = await uploadToCloudinary();
    const postData = {
      caption,
      image: myImage,
      filter: editFilter,
    };

    //  useDispatch
    dispatch(addDaak(postData));
    setShow(false);
    // setCaption("");
    // setImage(null);
    // setImagePreview(null);
    // setZoomIn(false);
    // setRange(100);
    // setEditFilter(filters.original);
  };

  return (
    <div
      className={`bg-black/50 min-h-screen fixed top-0 left-0 
        ${
          show ? "flex" : "hidden"
        } w-full z-50  justify-center items-center p-4`}
    >
      {/* Close button */}
      <div className="fixed right-4 top-4 z-60">
        <IoCloseSharp
          onClick={() => setShow(false)}
          size={30}
          className="text-white cursor-pointer"
        />
      </div>

      {/* Main Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-white rounded-3xl relative overflow-hidden flex flex-col
          ${thirdScreen ? "xl:w-3/4 lg:w-4/5" : "xl:w-1/3 lg:w-1/2"} 
          w-full max-w-2xl h-[500px] transition-all duration-300
        `}
      >
        {/* If image selected */}
        {imagePreview ? (
          <>
            {/* Header */}
            <div className="flex justify-between items-center w-full p-4 absolute top-0 left-0 z-50 bg-white border-b">
              <FaArrowLeftLong
                onClick={() => {
                  if (fourthScreen) {
                    setFourthScreen(false);
                  } else if (thirdScreen) {
                    setThirdScreen(false);
                    setEditFilter(filters.original);
                  } else {
                    setImagePreview(null);
                  }
                }}
                size={20}
                className="cursor-pointer"
              />
              <h3 className="font-semibold text-lg">Create a post</h3>
              <button
                onClick={() => {
                  if (thirdScreen && !fourthScreen) setFourthScreen(true);
                  else if (!thirdScreen) setThirdScreen(true);
                }}
                className="cursor-pointer text-purple-600 font-semibold hover:text-purple-700"
              >
                Next
              </button>
            </div>

            {/* Content Area */}
            <div className="flex h-full pt-16">
              {/* Image Preview */}
              <div
                className={`relative ${
                  thirdScreen ? "w-3/5" : "w-full"
                } h-full overflow-hidden`}
              >
                {/* Zoom Button */}
                {!thirdScreen && (
                  <div className="absolute bottom-4 left-4 z-40">
                    <div
                      onClick={() => setZoomIn(!zoomin)}
                      className={`
                        w-8 h-8 flex items-center justify-center rounded-full cursor-pointer
                        transition-colors duration-200
                        ${
                          zoomin
                            ? "bg-white text-black"
                            : "bg-black/50 text-white"
                        }
                      `}
                    >
                      <BsZoomIn />
                    </div>

                    {/* Zoom Slider */}
                    <div
                      className={`
                        absolute bottom-12 left-0 bg-black/80 rounded-lg p-3 transition-all duration-300
                        ${
                          zoomin ? "opacity-100 visible" : "opacity-0 invisible"
                        }
                      `}
                    >
                      <Slider
                        size="small"
                        value={range}
                        onChange={(e, newValue) => setRange(newValue)}
                        min={100}
                        max={200}
                        sx={{
                          color: "white",
                          width: 120,
                          "& .MuiSlider-thumb": { backgroundColor: "white" },
                          "& .MuiSlider-track": { backgroundColor: "white" },
                          "& .MuiSlider-rail": { backgroundColor: "gray" },
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Filtered Image */}
                <div className="flex items-center justify-center h-full w-full bg-black">
                  <ImageFilter
                    filter={editFilter}
                    image={imagePreview}
                    style={{
                      transform: `scale(${range / 100})`,
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                    className="transition-transform duration-200"
                  />
                </div>
              </div>

              {/* Filter Selection (3rd Screen) */}
              {thirdScreen && !fourthScreen && (
                <div className="w-2/5 h-full bg-white border-l overflow-y-auto transition-all duration-300">
                  <div className="p-4">
                    <h4 className="font-semibold mb-4">Choose a filter</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.keys(filters).map((item, index) => (
                        <div
                          onClick={() => setEditFilter(filters[item])}
                          key={index}
                          className="text-center cursor-pointer"
                        >
                          <div className="aspect-square overflow-hidden rounded-lg border-2 border-transparent hover:border-purple-500 transition-colors">
                            <ImageFilter
                              image={imagePreview}
                              filter={filters[item]}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="text-sm font-medium mt-2 capitalize">
                            {item}
                          </h3>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Caption Screen (4th Screen) */}
              {thirdScreen && fourthScreen && (
                <div className="w-2/5 h-full bg-white border-l p-4 flex flex-col">
                  <div className="flex gap-3 items-center mb-3">
                    <img
                      src="https://cdn-icons-png.flaticon.com/256/1177/1177568.png"
                      alt=""
                      className="w[32px] h-8 rounded-full "
                    />
                    <h5 className="font-semibold ">Username</h5>
                  </div>
                  <textarea
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="Enter caption..."
                    className="flex-1 border rounded-lg p-3 resize-none outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    onClick={handlePostUpload}
                    className="mt-4 bg-purple-600 cursor-pointer text-white rounded-lg py-2 font-semibold hover:bg-purple-700 transition"
                  >
                    Post
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          /* Initial Upload Screen */
          <div className="flex flex-col items-center justify-center h-full p-8">
            <h3 className="font-semibold text-xl mb-6">Create a post</h3>
            <hr className="w-full mb-8" />

            <img
              width={180}
              className="mb-6"
              src="https://i.etsystatic.com/34485599/r/il/dee909/5140040715/il_340x270.5140040715_7bjs.jpg"
              alt="Upload placeholder"
            />

            <p className="font-semibold text-center text-gray-600 mb-6">
              Drag photos and videos here
            </p>

            <input
              onChange={handleImageViewer}
              type="file"
              name="file"
              id="file"
              accept="image/*"
              hidden
            />
            <label
              htmlFor="file"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors font-medium"
            >
              Select from computer
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostModal;
