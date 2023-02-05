import { useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { setCurrentUser } from "../../store/user/user.slice";

const CheckAuthentication = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
    // eslint-disable-next-line
  }, []);

  return null;
};

export default CheckAuthentication;
