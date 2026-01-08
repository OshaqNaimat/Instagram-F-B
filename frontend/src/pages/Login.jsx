import React, { useState, useEffect } from "react";
import { FaFacebook, FaApple } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LoginUser, userReset } from "../features/users/userSlice";
import toast from "react-hot-toast";

const Login = () => {
  const [formData, setFormData] = useState({
    m_mail: "",
    password: "",
  });
  const dispatch = useDispatch();
  const {
    m_mail,
    password,
    userMessage,
    userLoading,
    userError,
    Authenticated,
    userSuccess,
  } = useSelector((state) => state.auth);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const handleLogin = (e) => {
    e.preventDefault();
    const LoginData = {
      mobile: m_mail,
      password,
    };
    dispatch(LoginUser(LoginData));
  };

  useEffect(() => {
    if (userSuccess) {
      toast.success("Successfully Logges");
    }
    if (userError) {
      toast.error(userMessage);
    }
    dispatch(userReset());
  }, [userError, userSuccess, Authenticated]);
  const screenshots = [
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
    // Handle login logic here
  };

  const handleFacebookLogin = () => {
    console.log("Facebook login clicked");
    // Handle Facebook login logic
  };

  const handleSignUp = () => {
    console.log("Redirect to signup");
    // Handle signup navigation
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      {/* Main Container */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        {/* Phone Mockup Section with Carousel */}
        <div className="hidden md:block flex-1 max-w-md">
          <div className="relative">
            {/* Phone Frame */}
            <div
              className="relative w-100 h-[650px] bg-no-repeat bg-center"
              style={{
                backgroundImage: `url('https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png')`,
                backgroundSize: "468.32px 634.15px",
              }}
            >
              {/* Carousel Screenshots */}
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className={`absolute top-[35px] left-[125px] w-[250px] h-[538.84px] bg-no-repeat bg-cover rounded-[32px] overflow-hidden transition-opacity duration-1000 ${
                    index === currentScreenshot ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    backgroundImage: `url('${screenshot}')`,
                    backgroundSize: "cover",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Login Form Section */}
        <div className="flex-1 max-w-md w-full">
          <div className="bg-white border-0 shadow-lg shadow-gray-500 rounded-lg p-8 mb-4">
            {/* Instagram Logo */}
            <div className="flex justify-center mb-8">
              <img
                src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
                alt="Instagram"
                className="h-12"
              />
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-3 ">
              <div>
                <input
                  type="text"
                  name="m_mail"
                  placeholder="Phone number, username, or email"
                  value={formData.m_mail}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-50 border-0 shadow-lg shadow-gray-300 rounded text-sm placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-50 border-0 outline-0 shadow-lg shadow-gray-300  rounded text-sm placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                  required
                />
              </div>
              <button
                onClick={handleLogin}
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1.5 rounded text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!formData.m_mail || !formData.password}
              >
                Log in
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-sm font-semibold text-gray-500">
                OR
              </span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Facebook Login */}
            <div className="text-center">
              <button
                onClick={handleFacebookLogin}
                className="flex items-center justify-center cursor-pointer gap-2 w-full text-blue-900 font-semibold text-sm hover:text-blue-700 transition-colors mb-4"
              >
                <FaFacebook className="w-5 h-5" />
                Log in with Facebook
              </button>

              {/* Forgot Password */}
              <a
                href="#"
                className="text-xs text-blue-900 hover:text-blue-700 hover:underline"
              >
                Forgot password?
              </a>
            </div>
          </div>

          {/* Sign Up Section */}
          <div className="bg-white  border-0 shadow-lg shadow-gray-500 rounded-lg p-6 text-center">
            <p className="text-sm">
              Don't have an account?{" "}
              <Link
                to={"/Register"}
                href="./Register"
                onClick={handleSignUp}
                className="text-blue-500 font-semibold cursor-pointer hover:text-blue-600 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>

          {/* App Download Section */}
          {/* <div className="text-center mt-6">
            <p className="text-sm mb-4">Get the app.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-2">
              <button className="mb-2 sm:mb-0 transition-transform hover:scale-105">
                <img
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                  alt="Download on App Store"
                  className="h-10"
                />
              </button>
              <button className="transition-transform hover:scale-105">
                <img
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                  alt="Get it on Google Play"
                  className="h-10"
                />
              </button>
            </div>
          </div> */}
        </div>
      </div>

      {/* Footer Links */}
      {/* <footer className="mt-12 text-center max-w-4xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-500 mb-4">
          {[
            "Meta",
            "About",
            "Blog",
            "Jobs",
            "Help",
            "API",
            "Privacy",
            "Terms",
            "Locations",
            "Instagram Lite",
            "Threads",
            "Contact Uploading & Non-Users",
            "Meta Verified",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-gray-700 hover:underline whitespace-nowrap"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-gray-500">
          {/* <select className="bg-transparent border-none text-gray-500 focus:outline-none cursor-pointer">
            <option>English</option>
            <option>Español</option>
            <option>Français</option>
            <option>Deutsch</option>
          </select>
          <span>© 2024 Instagram from Meta</span>   
        </div>
      </footer> 
      */}
    </div>
  );
};

export default Login;
