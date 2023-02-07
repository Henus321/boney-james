import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem, IOrder, IOrdersState } from "../../models";
import ordersService from "./orders.service";

const initialState: IOrdersState = {
  orders: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const fetchOrders = createAsyncThunk(
  "orders/fetch",
  async (_, thunkAPI) => {
    try {
      return await ordersService.fetchOrders();
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

export const createOrder = createAsyncThunk(
  "orders/create",
  async (cartItems: ICartItem[], thunkAPI) => {
    try {
      return await ordersService.createOrder(cartItems);
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

export const deleteOrder = createAsyncThunk(
  "orders/delete",
  async (order: IOrder, thunkAPI) => {
    try {
      return await ordersService.deleteOrder(order);
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

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchOrders.fulfilled.type,
        (state, action: PayloadAction<IOrder[]>) => {
          state.isLoading = false;
          state.orders = action.payload;
        }
      )
      .addCase(
        fetchOrders.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        }
      )
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOrder.fulfilled.type, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(
        createOrder.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        }
      )
      .addCase(deleteOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteOrder.fulfilled.type, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(
        deleteOrder.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        }
      );
  },
});

export const { reset } = ordersSlice.actions;
export default ordersSlice.reducer;
