import React from "react";
import { useState } from "react";
import { BiMessageSquare, BiPhone, BiPhoneOff, BiUser } from "react-icons/bi";
import { MdBorderVertical } from "react-icons/md";

const Calling = () => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-md"
          // onClick={() => setShowCall(false)}
        />

        {/* Glass Card */}
        {/* Gradient glow wrapper */}
        <div className="relative w-full max-w-md rounded-2xl p-[2px] bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 shadow-2xl">
          {/* Inner glass card */}
          <div className="relative rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-white/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="relative">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <BiUser size={28} className="text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white/30 animate-pulse"></div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white">
                      Alex Morgan
                    </h3>
                    <p className="text-white/80">Incoming call...</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowOptions(!showOptions)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <MdBorderVertical size={20} className="text-white" />
                </button>
              </div>
            </div>

            {/* Options Dropdown */}
            {showOptions && (
              <div className="absolute right-4 top-20 bg-white/30 backdrop-blur-md rounded-xl p-3 shadow-lg border border-white/30 animate-fade-in">
                <div className="space-y-3">
                  <button className="flex items-center space-x-2 p-2 hover:bg-white/20 rounded-lg w-full">
                    <BiMessageSquare size={16} className="text-white" />
                    <span className="text-white text-sm">Send message</span>
                  </button>
                  {/* <button className="flex items-center space-x-2 p-2 hover:bg-white/20 rounded-lg w-full">
                      <Video size={16} className="text-white" />
                      <span className="text-white text-sm">
                        Switch to video
                      </span>
                    </button> */}
                </div>
              </div>
            )}

            {/* Call Buttons */}
            <div className="p-8">
              <div className="flex justify-center space-x-12">
                <button
                  onClick={() => setShowCall(false)}
                  className="flex flex-col items-center group"
                >
                  <div className="w-16 h-16 bg-red-400/80 rounded-full flex items-center justify-center group-hover:bg-red-500/80 transition-all mb-3 shadow-lg">
                    <BiPhoneOff size={24} className="text-white" />
                  </div>
                  <span className="text-white/90 text-sm font-medium">
                    Decline
                  </span>
                </button>

                <button
                  onClick={declined}
                  className="flex flex-col items-center group"
                >
                  <div className="w-20 h-20 bg-green-400/80 rounded-full flex items-center justify-center group-hover:bg-green-500/80 transition-all mb-3 shadow-lg animate-bounce-subtle">
                    <BiPhone size={28} className="text-white" />
                  </div>
                  <span className="text-white/90 text-sm font-medium">
                    Accept
                  </span>
                </button>
              </div>

              {/* Call Info */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center space-x-2 bg-black/20 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  {/* <span className="text-white/90 text-sm">
                      Voice call • 03:22
                    </span> */}
                </div>
              </div>
            </div>

            {/* Bottom gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calling;
