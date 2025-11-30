import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/posts/postSlice";

export const store = configureStore({
  reducer: {
    daak: reducer,
  },
});
