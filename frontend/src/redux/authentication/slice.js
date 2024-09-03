import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CreateAxiosInstance from "../../utils/api";
import { notify } from "../../index";


const initialState = {
    token: null,
};

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        addLoggedUser: (state, action) => {
            state.token = action.payload.token; 
        },
        addLoggedPersonal: (state, action) => { 
            state.token = action.payload;
        },
        logoutUser: (state) => {
            state.token = null;
        },
    }
})

export const { logoutUser, addLoggedUser, addLoggedPersonal } = authSlice.actions;


export default authSlice.reducer;