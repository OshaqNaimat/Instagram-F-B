import React, { useState, useEffect } from "react";
import {
  Phone,
  PhoneOff,
  User,
  MoreVertical,
  MessageSquare,
  Video,
} from "lucide-react";

const GlassmorphismCallToast = () => {
  const [showCall, setShowCall] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowCall(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed translate-y-1/2 translate-x-1/2 h-[50%] w-[50%] bg-linear-to-br from-cyan-400 via-purple-500 to-pink-500 p-8 flex flex-col items-center justify-center">
      <button
        onClick={() => setShowCall(true)}
        className="mb-8 px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-medium rounded-xl hover:bg-white/30 transition-all shadow-lg border border-white/30"
      >
        Show Glass Call
      </button>

      {showCall && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-md"
            onClick={() => setShowCall(false)}
          />

          {/* Glass Card */}
          <div className="relative w-full max-w-md bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 overflow-hidden animate-scale-in">
            {/* Header */}
            <div className="p-6 border-b border-white/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-white/30 to-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <User size={28} className="text-white" />
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
                  <MoreVertical size={20} className="text-white" />
                </button>
              </div>
            </div>

            {/* Options Dropdown */}
            {showOptions && (
              <div className="absolute right-4 top-20 bg-white/30 backdrop-blur-md rounded-xl p-3 shadow-lg border border-white/30 animate-fade-in">
                <div className="space-y-3">
                  <button className="flex items-center space-x-2 p-2 hover:bg-white/20 rounded-lg w-full">
                    <MessageSquare size={16} className="text-white" />
                    <span className="text-white text-sm">Send message</span>
                  </button>
                  <button className="flex items-center space-x-2 p-2 hover:bg-white/20 rounded-lg w-full">
                    <Video size={16} className="text-white" />
                    <span className="text-white text-sm">Switch to video</span>
                  </button>
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
                  <div className="w-16 h-16 bg-red-400/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-red-500/80 transition-all mb-3 shadow-lg">
                    <PhoneOff size={24} className="text-white" />
                  </div>
                  <span className="text-white/90 text-sm font-medium">
                    Decline
                  </span>
                </button>

                <button
                  onClick={() => setShowCall(false)}
                  className="flex flex-col items-center group"
                >
                  <div className="w-20 h-20 bg-green-400/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-green-500/80 transition-all mb-3 shadow-lg animate-bounce-subtle">
                    <Phone size={28} className="text-white" />
                  </div>
                  <span className="text-white/90 text-sm font-medium">
                    Accept
                  </span>
                </button>
              </div>

              {/* Call Info */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center space-x-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white/90 text-sm">
                    Voice call • 03:22
                  </span>
                </div>
              </div>
            </div>

            {/* Wave animation */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-400/50 via-purple-400/50 to-pink-400/50 animate-wave"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GlassmorphismCallToast;
