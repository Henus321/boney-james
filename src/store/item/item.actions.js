import { db } from '../../firebase.config.js';
import { collection, getDocs, query } from 'firebase/firestore';

import { ITEM_ACTION_TYPES } from './item.types';

export const fetchItemStart = () => ({
  type: ITEM_ACTION_TYPES.FETCH_ITEM_START,
});

export const fetchItemFailure = (error) => ({
  type: ITEM_ACTION_TYPES.FETCH_ITEM_FAILURE,
  payload: error,
});

export const fetchItemSuccess = (collectionItem) => ({
  type: ITEM_ACTION_TYPES.FETCH_ITEM_SUCCESS,
  payload: collectionItem,
});

export const setColorId = (colorId) => ({
  type: ITEM_ACTION_TYPES.SET_COLOR_AND_ID,
  payload: colorId,
});

export const setCurrentSize = (size) => ({
  type: ITEM_ACTION_TYPES.SET_CURRENT_SIZE,
  payload: size,
});

export const clearItem = () => ({
  type: ITEM_ACTION_TYPES.CLEAR_ITEM,
});

export const fetchItemStartAsync = (params) => {
  return async (dispatch) => {
    dispatch(fetchItemStart());
    try {
      const collectionRef = collection(db, 'collections');
      const q = query(collectionRef);
      const querySnapshop = await getDocs(q);
      const data = querySnapshop.docs.map((docSnapshot) => docSnapshot.data());
      const [collectionItem] = data.filter((item) => item.id === params);
      dispatch(fetchItemSuccess(collectionItem));

      const colorAndId = data
        .filter(
          (item) =>
            item.article === collectionItem.article &&
            item.season === collectionItem.season
        )
        .map((item) => [item.color, item.id]);
      dispatch(setColorId(colorAndId));
      dispatch(setCurrentSize());
    } catch (error) {
      console.log(error.message);
    }
  };
};
