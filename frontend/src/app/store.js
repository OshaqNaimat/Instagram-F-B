import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/posts/postSlice";
import userReducer from "../features/users/userSlice"
import messageReducer from "../features/messages/messageSlice"
import productReducer from "../features/Products/ProductsSlice"
export const store = configureStore({
  reducer: {
    daak: reducer,
    auth: userReducer,
    chats:messageReducer,
    Products:productReducer,
  },
});
