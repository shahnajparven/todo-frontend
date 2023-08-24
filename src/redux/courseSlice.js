import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "../config/axios";

export const createCourse = createAsyncThunk(
  "course/createCourse",
  async (course, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await apiInstance.post("course/create", course);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error?.response?.data.message || "Unknown Error");
    }
  }
);

export const fetchCourse = createAsyncThunk(
  "course/fetchCourse",
  async (
   course,
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      let link = `course/fetch?keyword=${course.keyword}&category=${course.category}`;
      const { data } = await apiInstance.get(link);
      return fulfillWithValue(data.data);
    } catch (error) {
      return rejectWithValue(error?.response?.data.message || "Unknown Error");
    }
  }
);

const initialState = {
  isLoading: false,
  course: [],
  error: null,
  message: "",
  success: false,
};

export const courseSlice = createSlice({
  name: "course",
  initialState,

  extraReducers: (builder) => {
    // add data
    builder.addCase(createCourse.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createCourse.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.courses = action.payload;
      state.message = action.payload.message;
    });
    builder.addCase(createCourse.rejected, (state, action) => {
      state.isLoading = false;
      state.course = [];
      state.error = action.payload;
    });
    // fetch data
    builder.addCase(fetchCourse.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCourse.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.course = action.payload;
    });
    builder.addCase(fetchCourse.rejected, (state, action) => {
      state.isLoading = false;
      state.course = [];
      state.error = action.payload;
    });
  },

  clearError: (state) => {
    state.error = null;
  },
  clearMessage: (state) => {
    state.message = null;
  },
});
export default courseSlice.reducer;
