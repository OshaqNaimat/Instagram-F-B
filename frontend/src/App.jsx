import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProfilePage from "./pages/ProfilePage";
import Messages from "./pages/Messages";
import ExploreSection from "./pages/ExploreSection";
import Reels from "./pages/Reels";
import "react-loading-skeleton/dist/skeleton.css";
import VideoCallZego from "./pages/VideoCall";
import MarketPlace from "./pages/MarketPlace";
import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};
const App = () => {
  return (
    <Router>
      <Toaster />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile/:user_id" element={<ProfilePage />} />
        <Route path="/message" element={<Messages />} />
        <Route path="/explore" element={<ExploreSection />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route
          path="/video-call/:caller_id/:receiver_id"
          element={<VideoCallZego />}
        />
      </Routes>
    </Router>
  );
};

export default App;
