import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Toaster} from 'react-hot-toast'
// import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProfilePage from "./components/ProfilePage";
import Messages from "./pages/Messages";
import ExploreSection from "./pages/ExploreSection";
import Reels from "./pages/Reels";
import "react-loading-skeleton/dist/skeleton.css";

const App = () => {
  return (
    <Router>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/message" element={<Messages />} />
        <Route path="/Explore" element={<ExploreSection />} />
        <Route path="/reels" element={<Reels />} />
      </Routes>
    </Router>
  );
};

export default App;
