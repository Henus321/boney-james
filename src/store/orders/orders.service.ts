import {
  collection,
  getDocs,
  query,
  serverTimestamp,
  addDoc,
  where,
  deleteDoc,
  doc,
} from "@firebase/firestore";
import { CANT_FIND_USER_MESSAGE, USER_MISMATCH_MESSAGE } from "../../constants";
import { ICartItem, IOrder } from "../../models";
import { db, auth } from "../../utils";

const createOrder = async (cart: ICartItem[]) => {
  if (!auth || !auth.currentUser) throw new Error(CANT_FIND_USER_MESSAGE);

  const order: IOrder = {
    items: cart,
    userRef: auth.currentUser.uid,
    timestamp: serverTimestamp(),
  };

  await addDoc(collection(db, "orders"), order);
};

const deleteOrder = async (order: IOrder) => {
  if (order.userRef !== auth.currentUser?.uid)
    throw new Error(USER_MISMATCH_MESSAGE);

  if (!order.id) throw new Error("Что-то пошло не так");

  await deleteDoc(doc(db, "orders", order.id));
};

const fetchOrders = async () => {
  if (!auth || !auth.currentUser) throw new Error(CANT_FIND_USER_MESSAGE);

  const uid = auth.currentUser.uid;

  const ordersRef = collection(db, "orders");
  const q = query(ordersRef, where("userRef", "==", uid));
  const querySnapshot = await getDocs(q);

  const ordersArray = querySnapshot.docs.map((docSnapshot) => ({
    ...docSnapshot.data(),
    id: docSnapshot.id,
  }));

  return ordersArray;
};

const ordersService = {
  fetchOrders,
  createOrder,
  deleteOrder,
};

export default ordersService;
