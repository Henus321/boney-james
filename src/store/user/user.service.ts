import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updateProfile,
  reauthenticateWithCredential,
  EmailAuthProvider,
  updatePassword,
} from "firebase/auth";
import { IUserCredentials, IUserPasswords } from "../../models";
import { doc, serverTimestamp, setDoc, Timestamp } from "firebase/firestore";
import { auth, db } from "../../utils";
import { CANT_FIND_USER_MESSAGE } from "../../constants";

const signUp = async (userCredentials: IUserCredentials) => {
  const { name, email, password } = userCredentials;

  if (!password) throw new Error("У пользователя должен быть пароль!");

  if (!email) throw new Error("Пожалуйста, введите свою почту");

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  const user = userCredential.user;

  if (!auth.currentUser) throw new Error(CANT_FIND_USER_MESSAGE);

  await updateProfile(auth.currentUser, {
    displayName: name,
  });

  const userCredentialsCopy = { ...userCredentials };
  delete userCredentialsCopy.password;
  userCredentialsCopy.timestamp = serverTimestamp() as Timestamp;

  await setDoc(doc(db, "users", user.uid), userCredentialsCopy);
};

const signIn = async (userCredentials: IUserCredentials) => {
  const { email, password } = userCredentials;

  if (!password) throw new Error("Пожалуйста, введите свой пароль");

  if (!email) throw new Error("Пожалуйста, введите свою почту");

  await signInWithEmailAndPassword(auth, email, password);
};

const logOut = async () => await signOut(auth);

const updateUser = async (userCredentials: IUserCredentials) => {
  const { name, email, password } = userCredentials;

  if (!auth.currentUser) throw new Error(CANT_FIND_USER_MESSAGE);

  const currentEmail = auth.currentUser.email ? auth.currentUser.email : "";

  if (!password) throw new Error("Введите пароль");

  const credential = EmailAuthProvider.credential(currentEmail, password);

  await reauthenticateWithCredential(auth.currentUser, credential);

  await updateProfile(auth.currentUser, {
    displayName: name,
  });

  await updateEmail(auth.currentUser, email);
};

const updateUserPassword = async (userCredentials: IUserPasswords) => {
  const { currentPassword, newPassword } = userCredentials;

  if (!auth.currentUser || !auth.currentUser?.email) return;

  const currentEmail = auth.currentUser.email;

  const credential = EmailAuthProvider.credential(
    currentEmail,
    currentPassword
  );

  await reauthenticateWithCredential(auth.currentUser, credential);

  await updatePassword(auth.currentUser, newPassword);
};

const userService = {
  signUp,
  signIn,
  logOut,
  updateUser,
  updateUserPassword,
};

export default userService;
