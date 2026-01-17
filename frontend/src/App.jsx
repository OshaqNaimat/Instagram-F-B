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

        {/* Protected routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile/:user_id"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/message"
          element={
            <ProtectedRoute>
              <Messages />
            </ProtectedRoute>
          }
        />

        <Route
          path="/explore"
          element={
            <ProtectedRoute>
              <ExploreSection />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reels"
          element={
            <ProtectedRoute>
              <Reels />
            </ProtectedRoute>
          }
        />

        <Route
          path="/marketplace"
          element={
            <ProtectedRoute>
              <MarketPlace />
            </ProtectedRoute>
          }
        />

        <Route
          path="/video-call/:caller_id/:receiver_id"
          element={
            <ProtectedRoute>
              <VideoCallZego />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
