import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IItem, IItemState } from "../../models";
import itemService from "./item.service";

const initialState: IItemState = {
  item: null,
  color: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const fetchItem = createAsyncThunk(
  "item/fetch",
  async (slug: string, thunkAPI) => {
    try {
      return await itemService.fetchItem(slug);
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

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    reset: () => initialState,
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchItem.fulfilled.type,
        (state, action: PayloadAction<IItem>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.item = action.payload;
        }
      )
      .addCase(
        fetchItem.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        }
      );
  },
});

export const { reset, setColor } = itemSlice.actions;
export default itemSlice.reducer;
