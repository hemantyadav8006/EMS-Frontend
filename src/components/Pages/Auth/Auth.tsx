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

  const registerFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const registerData: registerUserType = { username, email, password };
    try {
      await registerUser({ registerdata: registerData });
      showToast("Register successful, Please login now!", "success");
      router.push("/");
    } catch (err: any) {
      showToast(`${err}`, "error");
    } finally {
      setLoading(false);
    }
  };

  const loginFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const loginData: LoginUserType = { username, email, password };
    try {
      await loginUser({ logindata: loginData });
      showToast("Login successful!", "success");
      router.push("/dashboard");
    } catch (err: any) {
      showToast(`${err}`, "error");
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
          isActive={isRightPanelActive}
          onSubmit={registerFormSubmit}
          setUsername={setUsername}
          setEmail={setEmail}
          setPassword={setPassword}
        />
        <SignInForm
          isActive={isRightPanelActive}
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
