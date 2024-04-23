import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

const getPersonais = createAsyncThunk("personais/getPersonaisAsync", async() => {
    const response = await axios.get("http://localhost:3004/personais");
    return response.data; 
});

const createPersonal = createAsyncThunk('personais/addPersonalAsync', async (data) => {
    const response = await axios.post("http://localhost:3004/personais", data)
    return response.data;
});

const updatePersonal = createAsyncThunk("personais/updatePersonalAsync", async (data) => {
    await axios.put(`http://localhost:3004/personais/${data.id}`, data);
});

const deletePersonal = createAsyncThunk("personais/deletePersonalAsync", async(id)=>{
    await axios.delete(`http://localhost:3004/personais/${id}`);
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

export { getPersonais, createPersonal, updatePersonal, deletePersonal }
export default personalSlice.reducer;