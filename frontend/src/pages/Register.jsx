import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { regUser, userReset } from "../features/users/userSlice";
import toast from "react-hot-toast";

const Register = () => {
  const [formFields, setFormFields] = useState({
    m_mail: "",
    password: "",
    fullName: "",
    profileName: "",
  });

  const { m_mail, password, fullName, profileName } = formFields;

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };
  
  const dispatch = useDispatch()
  
  const {user,userLoading,userError,userSuccess,userMessage} = useSelector((state)=>state.auth)
  const handleRegister = (e) => {
    e.preventDefault()
    const myData = {
      mobile:m_mail,
      password,
      fullName,
      username:profileName
    }

    dispatch(regUser(myData))


    useEffect(()=>{
      if(userError){
        toast.error(userMessage)
      }

      dispatch(userReset())
    },[userError])

  }
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-sm w-full space-y-8">
        {/* Main Card */}
        <div className="bg-white border-0 shadow-lg shadow-gray-500 rounded-lg p-8 space-y-6">
          {/* Instagram Logo */}
          <div className="flex justify-center">
            {/* <h1 className="text-3xl font-instagram font-semibold tracking-tight">
              Instagram
            </h1> */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
              alt=""
            />
          </div>

          {/* Sign up text */}
          <div className="text-center space-y-4">
            <p className="text-gray-500 font-medium text-lg">
              Sign up to see photos and videos from your friends.
            </p>
          </div>

          {/* Facebook Login Button */}
          {/* <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-sm transition-colors duration-200">
            Log in with Facebook
          </button> */}

          {/* Divider */}
          {/* <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm font-medium">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div> */}

          {/* Form */}
          <form className="space-y-4">
            <input
              type="text"
              name="m_mail"
              value={m_mail}
              onChange={handleChange}
              placeholder="Mobile Number or Email"
              className="w-full  px-3 py-2 border-0 shadow-lg shadow-gray-400 rounded text-sm placeholder-gray-500  focus:outline-blue-500"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full  px-3 py-2 border-0 shadow-lg shadow-gray-400 rounded text-sm placeholder-gray-500  focus:outline-blue-500"
            />
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={handleChange}
              placeholder="FullName"
              className="w-full  px-3 py-2 border-0 shadow-lg shadow-gray-400 rounded text-sm placeholder-gray-500  focus:outline-blue-500"
            />
            <input
              type="text"
              name="profileName"
              value={profileName}
              onChange={handleChange}
              placeholder="UserName"
              className="w-full  px-3 py-2 border-0 shadow-lg shadow-gray-400 rounded text-sm placeholder-gray-500  focus:outline-blue-500"
            />

            {/* Additional form fields that would typically be here */}
            <div className="text-xs text-gray-500 text-center leading-5">
              <p>
                People who use our service may have uploaded your contact
                information to Instagram.{" "}
                <span className="text-blue-900 font-semibold cursor-pointer">
                  Learn More
                </span>
              </p>
            </div>

            <div className="text-xs text-gray-500 text-center leading-5">
              <p>
                By signing up, you agree to our{" "}
                <span className="text-blue-900 font-semibold cursor-pointer">
                  Terms
                </span>
                ,{" "}
                <span className="text-blue-900 font-semibold cursor-pointer">
                  Privacy Policy
                </span>
              </p>
            </div>

            <button
            onClick={handleRegister}
              className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded text-sm transition-colors duration-200"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Login redirect */}
        <div className="bg-white border-0 shadow-lg shadow-gray-500 rounded-lg p-6 text-center">
          <p className="text-sm">
            Have an account?{" "}
            <a href="/" className="text-blue-500 font-semibold cursor-pointer">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
