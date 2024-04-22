import { createSlice } from "@reduxjs/toolkit";
import arnoldImage from "./../../images/PersonalImages/arnold.png";
import chicoImage from "./../../images/PersonalImages/chicoin.png";
import luizImage from "./../../images/PersonalImages/luiz.png";
import glaucoImage from "./../../images/PersonalImages/glauco.png";
import viniImage from "./../../images/PersonalImages/vinicius.png";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

const getPersonais = createAsyncThunk("personais/getPersonaisAsync", async() => {
    const response = await axios.get("http://localhost:3004/personais");
    return response.data; 
});


const personalSlice = createSlice({
    name:"personal",
    initialState,
    reducers: {
        addPersonal: (state, action) => {
            state.push(action.payload);
        },
        clearPersonals: (state) => {
            while(state.length > 0){
                state.pop()
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPersonais.fulfilled, (state, action) => {
            for (let personal of action.payload) {
                state.push(personal);
            }
        })
    }
})

export const { addPersonal, clearPersonals } = personalSlice.actions;

export { getPersonais }
export default personalSlice.reducer;