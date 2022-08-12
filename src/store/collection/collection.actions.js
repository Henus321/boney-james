import { db } from '../../firebase.config.js';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { COLLECTION_ACTION_TYPES } from './collection.types';

export const setCurrentCollection = (data) => ({
  type: COLLECTION_ACTION_TYPES.SET_CURRENT_COLLECTION,
  payload: data,
});

export const setFullCollection = (data) => ({
  type: COLLECTION_ACTION_TYPES.SET_FULL_COLLECTION,
  payload: data,
});

export const toggleBookmark = (id) => ({
  type: COLLECTION_ACTION_TYPES.TOGGLE_BOOKMARK,
  payload: id,
});

export const loadCurrentCollection = (params) => {
  return async (dispatch) => {
    try {
      const collectionRef = collection(db, 'collections');
      const q = query(collectionRef, where('season', '==', params));

      const querySnapshop = await getDocs(q);
      const data = querySnapshop.docs.map((docSnapshot) => docSnapshot.data());
      dispatch(setCurrentCollection(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const loadFullCollection = () => {
  return async (dispatch) => {
    try {
      const collectionRef = collection(db, 'collections');
      const q = query(collectionRef);

      const querySnapshop = await getDocs(q);
      const data = querySnapshop.docs.map((docSnapshot) => docSnapshot.data());
      dispatch(setFullCollection(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};
