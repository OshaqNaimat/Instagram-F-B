import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userReset } from "../users/userSlice";
import axios from "axios";

// havr to include the user in local storage

const initialState = {
  product: [],
  productLoading: false,
  productError: false,
  productSuccess: false,
  productMessage: "",
};

export const sellProduct = createAsyncThunk(
  "products",
  async (productData, thunkAPI) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/products/sellproduct${productData.user_id},
        `,
        productData,
      );
    } catch (error) {
      return thunkapi.rejectWithValue(error.response.data.error);
    }
  },
);

export const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    userReset: (state) => {
      ((state.productError = false),
        (state.productSuccess = false),
        (state.productLoading = false));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sellProduct.pending, (state, action) => {
      state.productLoading = true;
    });
    builder.addCase(sellProduct.rejected, (state, action) => {
      ((state.productLoading = false),
        (state.productError = true),
        (state.productMessage = action.payload));
    });
    builder.addCase(sellProduct.fulfilled, (state, action) => {
      ((state.productError = false),
        (state.productLoading = false),
        (state.productSuccess = true),
        (state.productMessage = action.payload));
    });
  },
});

export default productSlice.reducer;
