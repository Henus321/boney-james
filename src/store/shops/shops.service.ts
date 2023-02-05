import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../../utils";

const fetchShops = async (city: string | undefined) => {
  const shopsRef = collection(db, "shops");

  const q = city ? query(shopsRef, where("city", "==", city)) : query(shopsRef);

  const querySnapshot = await getDocs(q);

  const shopsArray = querySnapshot.docs.map((docSnapshot) =>
    docSnapshot.data()
  );

  return shopsArray;
};

const shopsService = {
  fetchShops,
};

export default shopsService;
