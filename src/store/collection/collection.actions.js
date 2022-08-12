import { db } from '../../firebase.config.js';
import { collection, getDocs, query } from 'firebase/firestore';

import { COLLECTION_ACTION_TYPES } from './collection.types';

export const setCurrentCollection = (data) => ({
  type: COLLECTION_ACTION_TYPES.SET_CURRENT_COLLECTION,
  payload: data,
});

export const toggleBookmark = (id) => ({
  type: COLLECTION_ACTION_TYPES.TOGGLE_BOOKMARK,
  payload: id,
});

export const loadCurrentCollection = () => {
  return async (dispatch) => {
    try {
      const collectionRef = collection(db, 'collections');
      const q = query(collectionRef);

      const querySnapshop = await getDocs(q);
      const data = querySnapshop.docs.map((docSnapshot) => docSnapshot.data());
      dispatch(setCurrentCollection(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};
