import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../../utils";

const fetchItem = async (slug: string) => {
  const itemRef = collection(db, "collection");
  const q = query(itemRef, where("slug", "==", slug));
  const querySnapshot = await getDocs(q);

  const item = querySnapshot.docs.map((docSnapshot) => docSnapshot.data())[0];

  return item;
};

const itemService = {
  fetchItem,
};

export default itemService;
