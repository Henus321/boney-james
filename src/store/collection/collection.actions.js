import { db } from '../../firebase.config.js';
import { collection, getDocs, query } from 'firebase/firestore';

import { COLLECTION_ACTION_TYPES } from './collection.types';

export const fetchCollectionStart = () => ({
  type: COLLECTION_ACTION_TYPES.FETCH_COLLECTION_START,
});
export const fetchCollectionFailure = (error) => ({
  type: COLLECTION_ACTION_TYPES.FETCH_COLLECTION_FAILURE,
  payload: error,
});
export const fetchCollectionSuccess = (colletionArray) => ({
  type: COLLECTION_ACTION_TYPES.FETCH_COLLECTION_SUCCESS,
  payload: colletionArray,
});

export const fetchCollectionStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchCollectionStart());
    try {
      const collectionRef = collection(db, 'collections');
      const q = query(collectionRef);

      const querySnapshop = await getDocs(q);
      const colletionArray = querySnapshop.docs.map((docSnapshot) =>
        docSnapshot.data()
      );
      dispatch(fetchCollectionSuccess(colletionArray));
    } catch (error) {
      dispatch(fetchCollectionFailure(error));
    }
  };
};
