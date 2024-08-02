import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    logged: false,
    loggedPersonal: false,
    user: {},
    personal: {},
};

const addUser = createAsyncThunk('user/addUserAsync', async (data) => {
    const response = await axios.post("http://localhost:3004/users", data)
    return response.data;
});

const updateUser = createAsyncThunk("user/updateUserAsync", async (data) => {
    await axios.put(`http://localhost:3000/user/${data.id}`, data);
});

const deleteUser = createAsyncThunk("users/deleteUserAsync", async(id)=>{
    await axios.delete(`http://localhost:3000/user/${id}`);
});

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        addLoggedUser: (state, action) => { 
            state.logged = true;
            state.user = action.payload;
        },
        addLoggedPersonal: (state, action) => {
            state.loggedPersonal = true;
            state.personal = action.payload;
        },
        logoutUser: (state) => {
            state.logged = false;
            state.loggedPersonal = false;
            state.user = {};
            state.personal={};
        },
        addTraining: (state, action) => {
            if(state.logged){
                state.user.treinos.push(action.payload);
            }
        }
    }
})

export const { loginUser, logoutUser, addTraining, addLoggedUser, addLoggedPersonal } = userSlice.actions;

export { addUser, updateUser, deleteUser }

export default userSlice.reducer;