export interface registerUserType {
  username: string;
  email: string;
  password: string;
}

export interface LoginUserType {
  username?: string;
  email?: string;
  password: string;
}
