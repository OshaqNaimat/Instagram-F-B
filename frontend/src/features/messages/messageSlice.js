import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

const initialState = {
    messageLoading:false,
    messageSucces:false,
    messageErro:false,
    messages:[]
}

export const sendMessageData = createAsyncThunk('send-message',async(messageData,thunkAPI)=>{
    try {
        const response = await axios.post(`http:localhost:5174/api/messages/send-message/${messageData?.sender_id}/${messageData?.receiver_id}`)
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data)
    }
})

export const messageSlice = createSlice({
    name:'message',
    initialState,
    reducers:{},
    extraReducers:()=>{},
})


export default messageSlice.reducer