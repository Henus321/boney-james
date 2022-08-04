import { useEffect, useState, createContext } from 'react';
import { db } from '../firebase.config';
import { collection, getDocs, query } from 'firebase/firestore';

export const CollectionContext = createContext({
  collections: {},
});

export const CollectionProvider = ({ children }) => {
  const [collections, setCollections] = useState({});
  const [cart, setCart] = useState([]);

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

  const addToCart = (clickedItem, size) => {
    let sameIdAndSize = false;

    setCart((prev) => {
      const allItems = prev.map((prevItem) => {
        if (prevItem.id === clickedItem.id && prevItem.size === size) {
          sameIdAndSize = true;
          return { ...prevItem, quantity: prevItem.quantity + 1 };
        }
        return { ...prevItem };
      });

      if (sameIdAndSize) {
        return [...allItems];
      }
      return [...prev, { ...clickedItem, size }];
    });
  };

  const deleteFromCart = (clickedItem) => {
    setCart((prev) =>
      prev.filter(
        (curItem) =>
          curItem.id !== clickedItem.id || curItem.size !== clickedItem.size
      )
    );
  };

  const changeQuantity = (clickedItem, positiveOrNegativeOne) => {
    setCart((prev) => {
      const allItems = prev.map((prevItem) => {
        if (
          prevItem.id === clickedItem.id &&
          prevItem.size === clickedItem.size &&
          prevItem.quantity + positiveOrNegativeOne > 0
        ) {
          return {
            ...prevItem,
            quantity: prevItem.quantity + positiveOrNegativeOne,
          };
        }
        return { ...prevItem };
      });

      return [...allItems];
    });
  };

  const value = {
    collections,
    cart,
    addToCart,
    deleteFromCart,
    changeQuantity,
  };

  return (
    <CollectionContext.Provider value={value}>
      {children}
    </CollectionContext.Provider>
  );
};
