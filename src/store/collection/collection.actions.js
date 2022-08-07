import { db } from '../../firebase.config.js';
import { collection, getDocs, query } from 'firebase/firestore';

import { COLLECTION_ACTION_TYPES } from './collection.types';

export const setItems = (data) => ({
  type: COLLECTION_ACTION_TYPES.SET_ITEMS,
  payload: data,
});

export const toggleBookmark = (item) => ({
  type: COLLECTION_ACTION_TYPES.TOGGLE_BOOKMARK,
  payload: item,
});

export const loadCollection = () => {
  return async (dispatch) => {
    try {
      const collectionRef = collection(db, 'collections');
      const q = query(collectionRef);

      const querySnapshop = await getDocs(q);
      const data = querySnapshop.docs.map((docSnapshot) => docSnapshot.data());
      dispatch(setItems(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};
