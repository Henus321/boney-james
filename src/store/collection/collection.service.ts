import { collection, getDocs, query } from "@firebase/firestore";
import { db } from "../../utils";

const fetchCollection = async () => {
  const collectionRef = collection(db, "collection");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  const collectionArray = querySnapshot.docs.map((docSnapshot) =>
    docSnapshot.data()
  );

  return collectionArray;
};

const collectionService = {
  fetchCollection,
};

export default collectionService;
