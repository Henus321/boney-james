import { User } from "firebase/auth";
import { Timestamp } from "firebase/firestore";
import { IState } from "./shared";

export interface IUserCredentials {
  name?: string;
  email: string;
  password?: string;
  timestamp?: Timestamp;
}

export interface IUserPasswords {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface IUserState extends IState {
  user: User | null;
}
