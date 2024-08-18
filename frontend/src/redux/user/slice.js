import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createAxiosInstance } from "../../utils/api";
import { notify } from "../../index";

const api  = createAxiosInstance();

const initialState = {
    logged: false,
    loggedPersonal: false,
    user: {},
    personal: {},
};

const addUser = createAsyncThunk('user/addUserAsync', async (data) => {
    try{
        await api.post("/user", data);
        notify("success", "Usuário criado com sucesso.");
        return true;

    }catch(error){
        console.log(error);
        notify("error", error.message);
        return false;
    }
});

const updateUser = createAsyncThunk("user/updateUserAsync", async (data) => {
    await api.put(`/user/${data._id}`, data);
});

const deleteUser = createAsyncThunk("users/deleteUserAsync", async(id)=>{
    await api.delete(`/user/${id}`);
});

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        addLoggedUser: (state, action) => { 
            state.logged = true; //switch to token in the future
            state.user = action.payload;
        },
        addLoggedPersonal: (state, action) => {
            state.loggedPersonal = true; //switch to token in the future
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