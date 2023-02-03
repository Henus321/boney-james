import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { IUserCredentials } from "../../models";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "../../utils";

const signUp = async (userCredentials: IUserCredentials) => {
  const { name, email, password } = userCredentials;

  if (!password) throw new Error("У пользователя должен быть пароль!");

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  const user = userCredential.user;

  if (!auth.currentUser)
    throw new Error("Что-то пошло не так... Пользователь не найден");

  updateProfile(auth.currentUser, {
    displayName: name,
  });

  const userCredentialsCopy = { ...userCredentials };
  delete userCredentialsCopy.password;
  userCredentialsCopy.timestamp = serverTimestamp();

  await setDoc(doc(db, "users", user.uid), userCredentialsCopy);
};

const signIn = async (userCredentials: IUserCredentials) => {
  const { email, password } = userCredentials;

  if (!password) throw new Error("Пожалуйста, введите свой пароль");

  await signInWithEmailAndPassword(auth, email, password);
};

const logOut = async () => await signOut(auth);

const userService = {
  signUp,
  signIn,
  logOut,
};

export default userService;
