import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IShop, IShopsState } from "../../models";
import shopsService from "./shops.service";

const initialState: IShopsState = {
  shops: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const fetchShops = createAsyncThunk(
  "shops/fetch",
  async (city: string | undefined, thunkAPI) => {
    try {
      return await shopsService.fetchShops(city);
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

export const shopsSlice = createSlice({
  name: "shops",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShops.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchShops.fulfilled.type,
        (state, action: PayloadAction<IShop[]>) => {
          state.isLoading = false;
          state.shops = action.payload;
        }
      )
      .addCase(
        fetchShops.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        }
      );
  },
});

export const { reset } = shopsSlice.actions;
export default shopsSlice.reducer;
