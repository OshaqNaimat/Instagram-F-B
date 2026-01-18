import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { userReset } from "../users/userSlice";
import axios from "axios";

// havr to include the user in local storage

const initialState = {
    product:[],
    productLoading:false,
    productError:false,
    productSuccess:false,
    productMessage:""
}


export const sellProduct = createAsyncThunk('products',async(userData,thunkAPI)=>{
    try {
        const response = await axios
    } catch (error) {
        
    }
})


export const productSlice = createSlice({
    name:"Products",
    initialState,
    reducers:{
        userReset:(state)=>{
            state.productError = false,
            state.productSuccess = false,
            state.productLoading = false
        }
    },
    extraReducers:(builder)=>{
        builder
        
    }
})

export default productSlice.reducer