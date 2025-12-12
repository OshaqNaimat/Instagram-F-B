import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProfilePage from "./components/ProfilePage";
import Messages from "./pages/Messages";
import ExploreSection from "./pages/ExploreSection";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/message" element={<Messages />} />
        <Route path="/Explore" element={<ExploreSection />} />
      </Routes>
    </Router>
  );
};

export default App;
