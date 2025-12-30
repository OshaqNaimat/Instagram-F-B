import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addLikes } from "../../../../backend/controller/PostController";
const initialState = {
  posts: [],
  postSuccess: false,
  postError: false,
  postMessage: "",
  postLoading: false,
  commentLoading:false,
  commentError:false,
  commentSucces:false,
  commentMessage:"",
  likesLoading:false,
  likesError:false,
  likesSucces:false,
  likesMessage:""
};

export const addDaak = createAsyncThunk(
  "add-daak",
  async (postData, thunkapi) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/posts/addPost/${postData.user_id}`,
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

export const addCommentData = createAsyncThunk("add-comment",async(CommentData,thunkApi)=>{
  try {
    const response = await axios.post(`http://localhost:5000/api/posts/add-comment/${CommentData.post_id}/${CommentData.user_id}`,CommentData)
    return response.data
  } catch (error) {
         return thunkApi.rejectWithValue(error.response.data)    
  }
})

export const addLikeData = createAsyncThunk("add-likes",async(LikesData,thunkapi)=>{
  try {
    const response = await axios.post(`http://localhost:5000/api/posts/add-likes/${LikesData.post_id}/${LikesData.user_id}`)
    return response.data
  } catch (error) {
        return thunkapi.rejectWithValue(error.response.data)
  }
})
export const getRelaventPosts = createAsyncThunk("get-posts",async(user_id,thunkapi)=>{
  try {
    const response = await axios.post(`http://localhost:5000/api/posts/get-my-posts/${user_id}`)
    return response.data
  } catch (error) {
        return thunkapi.rejectWithValue(error.response.data)
  }
})

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
    builder.addCase(addCommentData.pending, (state,action)=>{
      state.commentLoading = true
    })
    builder.addCase(addCommentData.rejected,(state,action)=>{
      state.commentLoading = false,
      state.commentError = true,cs
      state.commentMessage = action.paylaod
    })
    builder.addCase(addCommentData.fulfilled, (state,action)=>{
      state.commentLoading = false,
      state.commentError = false,
      state.commentSucces = true,
      state.posts = state.posts.map((item,index)=>{
        if(item._id == action.payload._id){
          item.comment = action.payload.comment 
        }

        return item
      }) 
    })
    builder.addCase(addLikeData.pending, (state,action)=>{
      state.likesLoading = true
    })
    builder.addCase(addLikeData.rejected,(state,action)=>{
      state.likesLoading = false,
      state.likesError = true,cs
      state.likesMessage = action.paylaod
    })
    builder.addCase(addLikeData.fulfilled, (state,action)=>{
      state.likesLoading = false,
      state.likesError = false,
      state.likesSucces = true,
      state.posts = state.posts.map((item,index)=>{
        if(item._id == action.payload._id){
          item.likes = action.payload.likes 
        }

        return item
      }) 
    })
  },
});

export default postSlice.reducer;
