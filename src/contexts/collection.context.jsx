import { useEffect, useState, createContext } from 'react';
import { db } from '../firebase.config';
import { collection, getDocs, query } from 'firebase/firestore';

export const CollectionContext = createContext({
  collections: {},
});

export const CollectionProvider = ({ children }) => {
  const [collections, setCollections] = useState({});

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const collectionRef = collection(db, 'collections');
        const q = query(collectionRef);

        const querySnapshop = await getDocs(q);
        const data = querySnapshop.docs.map((docSnapshot) =>
          docSnapshot.data()
        );
        setCollections(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCollections();
  }, []);

  const value = {
    collections,
  };

  return (
    <CollectionContext.Provider value={value}>
      {children}
    </CollectionContext.Provider>
  );
};
