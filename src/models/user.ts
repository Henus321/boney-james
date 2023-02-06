import { User } from "firebase/auth";
import { FieldValue } from "firebase/firestore";
import { IState } from "./shared";

export interface IUserCredentials {
  name?: string;
  email: string;
  password?: string;
  timestamp?: FieldValue;
}

export interface IUserState extends IState {
  user: User | null;
}
