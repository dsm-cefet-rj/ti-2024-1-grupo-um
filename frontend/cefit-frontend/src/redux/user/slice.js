import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    logged: false,
    user: {}
};

const addUser = createAsyncThunk('user/addUserAsync', async (data) => {
    const response = await axios.post("http://localhost:3004/users", data)
    return response.data;
})

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        addLoggedUser: (state, action) => { 
            state.logged = true;
            state.user = action.payload;
        },
        logoutUser: (state) => {
            state.logged = false;
            state.user = {};
        },
        addTraining: (state, action) => {
            if(state.logged){
                state.user.treinos.push(action.payload);
            }
        }
    },
})

export const { loginUser, logoutUser, addTraining, addLoggedUser } = userSlice.actions;

export { addUser }

export default userSlice.reducer;