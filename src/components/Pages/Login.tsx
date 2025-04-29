"use client";
import { useState } from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaHeart,
} from "react-icons/fa";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { Input } from "@/components/ui/Input";

export default function LoginPage() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 font-sans">
      <div
        className={`relative w-[768px] max-w-full min-h-[480px] bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 ${
          isRightPanelActive ? "right-panel-active" : ""
        }`}
      >
        {/* Sign Up */}
        <div
          className={`absolute top-0 h-full w-1/2 transition-all duration-500 z-10 ${
            isRightPanelActive
              ? "translate-x-full opacity-100 z-20"
              : "opacity-0 z-10"
          }`}
        >
          <form className="flex flex-col items-center justify-center text-center px-10 h-full bg-white">
            <h1 className="font-bold text-2xl">Create Account</h1>
            <div className="flex gap-2 my-4">
              <SocialIcon Icon={FaFacebookF} />
              <SocialIcon Icon={FaGooglePlusG} />
              <SocialIcon Icon={FaLinkedinIn} />
            </div>
            <span className="text-sm mb-2">
              or use your email for registration
            </span>
            <Input placeholder="Name" type="text" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Password" type="password" />
            <button className="mt-4 bg-[#FF4B2B] text-white font-bold py-3 px-10 rounded-full text-sm uppercase">
              Sign Up
            </button>
          </form>
        </div>

        {/* Sign In */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 transition-all duration-500 z-20 ${
            isRightPanelActive ? "translate-x-full opacity-0 z-10" : "z-20"
          }`}
        >
          <form className="flex flex-col items-center justify-center text-center px-10 h-full bg-white">
            <h1 className="font-bold text-2xl">Sign In</h1>
            <div className="flex gap-2 my-4">
              <SocialIcon Icon={FaFacebookF} />
              <SocialIcon Icon={FaGooglePlusG} />
              <SocialIcon Icon={FaLinkedinIn} />
            </div>
            <span className="text-sm mb-2">or use your account</span>
            <Input placeholder="Email" type="email" />
            <Input placeholder="Password" type="password" />
            <a href="#" className="text-sm text-gray-500 mt-2">
              Forgot your password?
            </a>
            <button className="mt-4 bg-[#FF4B2B] text-white font-bold py-3 px-10 rounded-full text-sm uppercase">
              Sign In
            </button>
          </form>
        </div>

        {/* Overlay */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full z-30 transition-transform duration-500 ${
            isRightPanelActive ? "-translate-x-full" : ""
          }`}
        >
          <div className="bg-gradient-to-r from-[#FF4B2B] to-[#FF416C] text-white flex flex-col justify-between items-center px-10 py-12 h-full">
            {isRightPanelActive ? (
              <div className="text-center">
                <h1 className="font-bold text-2xl">Welcome Back!</h1>
                <p className="text-sm my-4">
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="bg-transparent border border-white text-white font-bold py-3 px-10 rounded-full text-sm uppercase mt-4"
                  onClick={() => setIsRightPanelActive(false)}
                >
                  Sign In
                </button>
              </div>
            ) : (
              <div className="text-center">
                <h1 className="font-bold text-2xl">Hello, Friend!</h1>
                <p className="text-sm my-4">
                  Enter your personal details and start your journey with us
                </p>
                <button
                  className="bg-transparent border border-white text-white font-bold py-3 px-10 rounded-full text-sm uppercase mt-4"
                  onClick={() => setIsRightPanelActive(true)}
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
