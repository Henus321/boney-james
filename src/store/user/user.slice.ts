import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { IUserCredentials, IUserState } from "../../models";
import userService from "./user.service";

const initialState: IUserState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const signUp = createAsyncThunk(
  "user/sign-up",
  async (userData: IUserCredentials, thunkAPI) => {
    try {
      return await userService.signUp(userData);
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

export const signIn = createAsyncThunk(
  "user/sign-in",
  async (userData: IUserCredentials, thunkAPI) => {
    try {
      return await userService.signIn(userData);
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

export const logOut = createAsyncThunk("user/log-out", async (_, thunkAPI) => {
  try {
    return await userService.logOut();
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: () => initialState,
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled.type, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(signUp.rejected.type, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled.type, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(signIn.rejected.type, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled.type, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(logOut.rejected.type, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
