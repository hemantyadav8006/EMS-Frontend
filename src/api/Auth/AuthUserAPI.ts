import { apiRequest } from "../apiRequest";
import { registerUserType, LoginUserType } from "@/@types/Auth/Auth.types";

export const registerUser = async ({
  registerdata,
}: {
  registerdata: registerUserType;
}) => {
  try {
    const result = await apiRequest(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerdata),
      }
    );

    if (result && result.data) {
      // const { token, user } = result.data;
      // document.cookie = `token=${token}; path=/; max-age=${
      //   60 * 60 * 24
      // }; Secure; SameSite=Strict`;
      // document.cookie = `user=${encodeURIComponent(
      //   JSON.stringify(user)
      // )}; path=/; max-age=${60 * 60 * 24}; Secure; SameSite=Strict`;
      // localStorage.setItem("accessToken", result.data.accessToken);
      // localStorage.setItem("refreshToken", result.data.refreshToken);
      // localStorage.setItem("userId", result.data.userId);
      // localStorage.setItem("username", result.data.username);
      // localStorage.setItem("email", result.data.email);
    }

    return result;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async ({
  logindata,
}: {
  logindata: LoginUserType;
}) => {
  try {
    const result = await apiRequest(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logindata),
      }
    );
    console.log("result: ", result);
    return result;
  } catch (error) {
    throw error;
  }
};
