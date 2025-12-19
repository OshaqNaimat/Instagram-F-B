import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    userLoading:false,
    userSuccess:false,
    userError:false,
    userMessage:'',

}

export const regUser = createAsyncThunk('user',async(userData,thunkAPI)=>{
    try {
        const response = await axios.post("http://localhost:5000/api/users/register")
    } catch (error) {
        
    }
})


export const userSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers: ()=>{}
})

export default userSlice.reducer