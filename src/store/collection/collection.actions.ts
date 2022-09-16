import { db } from '../../firebase.config';
import { collection, DocumentData, getDocs, query } from 'firebase/firestore';
import { COLLECTION_ACTION_TYPES } from './collection.types';
import { Dispatch } from 'redux';

export const fetchCollectionStart = () => ({
  type: COLLECTION_ACTION_TYPES.FETCH_COLLECTION_START,
});
export const fetchCollectionFailure = (error: string) => ({
  type: COLLECTION_ACTION_TYPES.FETCH_COLLECTION_FAILURE,
  payload: error,
});
export const fetchCollectionSuccess = (colletionArray: DocumentData) => ({
  type: COLLECTION_ACTION_TYPES.FETCH_COLLECTION_SUCCESS,
  payload: colletionArray,
});

export const fetchCollectionStartAsync = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchCollectionStart());
    try {
      const collectionRef = collection(db, 'collections');
      const q = query(collectionRef);

      const querySnapshop = await getDocs(q);
      const colletionArray = querySnapshop.docs.map((docSnapshot) =>
        docSnapshot.data()
      );
      dispatch(fetchCollectionSuccess(colletionArray));
    } catch (error: any) {
      dispatch(fetchCollectionFailure(error));
    }
  };
};
