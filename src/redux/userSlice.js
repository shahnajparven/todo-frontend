import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "../config/axios";

export const regUser = createAsyncThunk(
  "user/regUser",
  async (user, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await apiInstance.post("user/register", user);
      return fulfillWithValue(data.message);
    } catch (error) {
      return rejectWithValue(
        error?.response?.data.message || "Unknown Error"
      );
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, { rejectWithValue, fulfillWithValue }) => {
    console.log( user,'action')
    try {
      const { data } = await apiInstance.post("user/login", user);
      return fulfillWithValue(data.message);
    } catch (error) {
      return rejectWithValue(error?.response?.data.message || "Unknown Error");
    }
  }
);

const initialState = {
  isLoading: false,
  user: [],
  error: null,
  message: "",
  success: false,
  isLoggedIn: false,
 
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  extraReducers: (builder) => {
    // add data
    builder.addCase(regUser.pending, (state) => {
      state.isLoading = true;
      state.success = false;
    });
    builder.addCase(regUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
      state.success = true;
      state.error = null;
    });
    builder.addCase(regUser.rejected, (state, action) => {
      state.isLoading = false;
      state.user = [];
      state.error = action.payload;
    });

    // login user
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.isLoggedIn = false;
    });
    builder.addCase(loginUser.fulfilled, (state,action) => {
      console.log(action.payload,'reducer')
      state.isLoading = false;
      state.isLoggedIn = true;
      state.message = action.payload;
      state.error = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      console.log(action.payload,'reducer')
      state.isLoading = false;
      state.error = action.payload;
      state.isLoggedIn = false;
    });

  },
  reducers: {
    reset: () => initialState,
    clearError: (state) => ({
      ...state,
      error: null,
    }),
  },
});
export const { reset, clearError } = userSlice.actions;
export default userSlice.reducer;
