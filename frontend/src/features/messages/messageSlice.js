import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

const initialState = {
    messageLoading:false,
    messageSucces:false,
    messageError:false,
    errorMessage:'',
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
    extraReducers:(builder)=>{
        builder
        .addCase(sendMessageData.pending,((state,action)=>{
            state.messageLoading = true
        }))
        .addCase(sendMessageData.rejected, ((state,action)=>{
            state.messageLoading = false,
            state.messageError = true,
            state.errorMessage = action.payload
        }))
    },
})


export default messageSlice.reducer