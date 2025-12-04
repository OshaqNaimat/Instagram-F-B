import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  posts: [],
  postSuccess: false,
  postError: false,
  postMessage: "",
  postLoading: false,
};

export const addDaak = createAsyncThunk(
  "add-daak",
  async (postData, thunkapi) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/posts/add-post",
        postData
      );
      return response.data;
    } catch (error) {
      return thunkapi.rejectWithValue(error.response.data.error);
    }
  }
);

export const getDaak = createAsyncThunk("get-daaks", async (_, thunkapi) => {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/posts/get-post"
    );
    return response.data;
  } catch (error) {
    return thunkapi.rejectWithValue(error.response.data.error);
  }
});

export const postSlice = createSlice({
  name: "daak",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addDaak.pending, (state, action) => {
      state.postLoading = true;
    });
    builder.addCase(addDaak.rejected, (state, action) => {
      state.postLoading = false;
      state.postError = true;
      state.postMessage = action.payload;
    });
    builder.addCase(addDaak.fulfilled, (state, action) => {
      state.postLoading = false;
      state.postSuccess = true;
      state.posts.push(action.payload);
    });
    builder.addCase(getDaak.pending, (state, action) => {
      state.postLoading = true;
    });
    builder.addCase(getDaak.rejected, (state, action) => {
      state.postLoading = false;
      state.postError = true;
      state.postMessage = action.payload;
      state.post = [];
    });
    builder.addCase(getDaak.fulfilled, (state, action) => {
      state.postSuccess = true;
      state.postLoading = false;
      state.posts = action.payload;
    });
  },
});

export default postSlice.reducer;
