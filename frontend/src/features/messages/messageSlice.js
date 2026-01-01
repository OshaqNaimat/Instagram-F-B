import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

const initialState = {
    messageLoading:false,
    messageSucces:false,
    messageErro:false,
    messages:[]
}


export const messageSlice = createSlice({
    name:'message',
    initialState,
    reducers:{},
    extraReducers:()=>{},
})


export default messageSlice.reducer