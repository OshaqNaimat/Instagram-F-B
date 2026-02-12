import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  messageLoading: false,
  messageSuccess: false,
  messageError: false,
  errorMessage: "",
  messages: [],
};

export const sendMessageData = createAsyncThunk(
  "send-message",
  async (messageData, thunkAPI) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/messages/send-message/${messageData.sender_id}/${messageData.receiver_id}`,
        messageData,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const getMessageData = createAsyncThunk(
  "get-message",
  async (messageData, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/messages/get-message/${messageData.sender_id}/${messageData.receiver_id}`,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
export const getAllConversationsData = createAsyncThunk(
  "get-all-conversations",
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/messages/conversations/${userId}`,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    ...initialState,
    conversations: [],
    conversationsLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendMessageData.pending, (state, action) => {
        state.messageLoading = true;
      })
      .addCase(sendMessageData.rejected, (state, action) => {
        ((state.messageLoading = false),
          (state.messageError = true),
          (state.errorMessage = action.payload));
      })
      .addCase(sendMessageData.fulfilled, (state, action) => {
        ((state.messageLoading = false),
          (state.messageError = false),
          (state.messageSuccess = true),
          (state.messages = action.payload.chats));
      })
      .addCase(getMessageData.pending, (state, action) => {
        state.messageLoading = true;
      })
      .addCase(getMessageData.rejected, (state, action) => {
        ((state.messageLoading = false),
          (state.messageError = true),
          (state.errorMessage = action.payload));
      })
      .addCase(getMessageData.fulfilled, (state, action) => {
        ((state.messageLoading = false),
          (state.messageError = false),
          (state.messageSuccess = true),
          (state.messages = action.payload.chats));
      })
      .addCase(getAllConversationsData.pending, (state) => {
        state.conversationsLoading = true;
      })
      .addCase(getAllConversationsData.rejected, (state, action) => {
        state.conversationsLoading = false;
        state.messageError = true;
        state.errorMessage = action.payload;
      })
      .addCase(getAllConversationsData.fulfilled, (state, action) => {
        state.conversationsLoading = false;
        state.messageError = false;
        state.conversations = action.payload;
      });
  },
});

export default messageSlice.reducer;
