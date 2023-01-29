import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IItem } from "../../models";
import { ICollectionState } from "../../models/collection";
import collectionService from "./collection.service";

const initialState: ICollectionState = {
  collection: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const fetchCollection = createAsyncThunk(
  "collection/fetch",
  async (_, thunkAPI) => {
    try {
      return await collectionService.fetchCollection();
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCollection.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchCollection.fulfilled.type,
        (state, action: PayloadAction<IItem[]>) => {
          state.isLoading = false;
          state.collection = action.payload;
        }
      )
      .addCase(
        fetchCollection.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        }
      );
  },
});

export const { reset } = collectionSlice.actions;
export default collectionSlice.reducer;
