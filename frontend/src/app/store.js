import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/posts/postSlice";
import userReducer from "../features/users/userSlice"
export const store = configureStore({
  reducer: {
    daak: reducer,
    auth: userReducer,
  },
});
