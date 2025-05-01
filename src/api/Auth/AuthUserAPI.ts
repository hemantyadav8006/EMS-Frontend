import { apiRequest } from "../apiRequest";
import { registerUserType, LoginUserType } from "@/@types/Auth/Auth.types";

export const registerUser = async ({
  registerdata,
}: {
  registerdata: registerUserType;
}) => {
  try {
    const result = await apiRequest(``, {});
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
    const result = await apiRequest(``, {});
  } catch (error) {
    throw error;
  }
};
