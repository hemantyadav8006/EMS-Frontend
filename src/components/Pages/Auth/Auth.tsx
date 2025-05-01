"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/context/ToastContext";
import { registerUser, loginUser } from "@/api/Auth/AuthUserAPI";
import { registerUserType, LoginUserType } from "@/@types/Auth/Auth.types";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import Overlay from "./Overlay";

export default function Authentication() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();
  const router = useRouter();
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const registerFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const registerData: registerUserType = { username, email, password };
    try {
      let response = await registerUser({ registerdata: registerData });
      if (!response.success) {
        showToast(`${response.message}`, "error");
      }

      showToast("Register successful, Please login now!", "success");
      router.push("/");
    } catch (err: any) {
    } finally {
      setLoading(false);
    }
  };

  const loginFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const loginData: LoginUserType = { username, email, password };
    try {
      const response = await loginUser({ logindata: loginData });
      if (!response.success) {
        showToast(`${response.message}`, "error");
      }

      showToast("Login successful!", "success");
      router.push("/dashboard");
    } catch (err: any) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 font-sans">
      <div
        className={`relative w-[768px] max-w-full min-h-[480px] bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 ${
          isRightPanelActive ? "right-panel-active" : ""
        }`}
      >
        <SignUpForm
          loading={loading}
          username={username}
          email={email}
          password={password}
          isActive={isRightPanelActive}
          onSubmit={registerFormSubmit}
          setUsername={setUsername}
          setEmail={setEmail}
          setPassword={setPassword}
        />
        <SignInForm
          loading={loading}
          isActive={isRightPanelActive}
          username={username}
          email={email}
          password={password}
          onSubmit={loginFormSubmit}
          setUsername={setUsername}
          setEmail={setEmail}
          setPassword={setPassword}
        />
        <Overlay
          isActive={isRightPanelActive}
          setIsActive={setIsRightPanelActive}
        />
      </div>
    </div>
  );
}
