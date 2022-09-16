import { db } from '../../firebase.config';
import { collection, DocumentData, getDocs, query } from 'firebase/firestore';
import { ITEM_ACTION_TYPES } from './item.types';
import { Dispatch } from 'redux';

export const fetchItemStart = () => ({
  type: ITEM_ACTION_TYPES.FETCH_ITEM_START,
});

export const fetchItemFailure = (error: string) => ({
  type: ITEM_ACTION_TYPES.FETCH_ITEM_FAILURE,
  payload: error,
});

export const fetchItemSuccess = (collectionItem: DocumentData) => ({
  type: ITEM_ACTION_TYPES.FETCH_ITEM_SUCCESS,
  payload: collectionItem,
});

export const setColorId = (colorId: any[]) => ({
  type: ITEM_ACTION_TYPES.SET_COLOR_AND_ID,
  payload: colorId,
});

export const clearItem = () => ({
  type: ITEM_ACTION_TYPES.CLEAR_ITEM,
});

export const fetchItemStartAsync = (params: string) => {
  return async (dispatch: Dispatch) => {
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
        .map((item) => {
          return { color: item.color, id: item.id };
        });
      dispatch(setColorId(colorAndId));
    } catch (error: any) {
      console.log(error.message);
    }
  };
};
