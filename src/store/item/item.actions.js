import { db } from '../../firebase.config.js';
import { collection, getDocs, query } from 'firebase/firestore';

import { ITEM_ACTION_TYPES } from './item.types';

export const setItem = (data) => ({
  type: ITEM_ACTION_TYPES.SET_ITEM,
  payload: data,
});

export const setColorId = (colorId) => ({
  type: ITEM_ACTION_TYPES.SET_COLOR_AND_ID,
  payload: colorId,
});

export const setCurrentSize = (size) => ({
  type: ITEM_ACTION_TYPES.SET_CURRENT_SIZE,
  payload: size,
});

export const clearDetails = () => ({
  type: ITEM_ACTION_TYPES.CLEAR_ITEM,
});

export const loadItem = (params) => {
  return async (dispatch) => {
    try {
      const collectionRef = collection(db, 'collections');
      const q = query(collectionRef);
      const querySnapshop = await getDocs(q);
      const data = querySnapshop.docs.map((docSnapshot) => docSnapshot.data());
      const [coat] = data.filter((item) => item.id === params.coatId);
      dispatch(setItem(coat));
      const colorAndId = data.map((item) => [item.color, item.id]);
      dispatch(setColorId(colorAndId));
      dispatch(setCurrentSize());
    } catch (error) {
      console.log(error.message);
    }
  };
};
