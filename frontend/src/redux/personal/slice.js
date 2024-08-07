import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAxiosInstance } from "../../utils/api";

const api = createAxiosInstance();


const initialState = [];

const getPersonais = createAsyncThunk("personais/getPersonaisAsync", async() => {
    const response = await api.get("/personal");
    return response.data; 
});

const createPersonal = createAsyncThunk('personais/addPersonalAsync', async (data) => {
    const response = await api.post("/personal", data)
    return response.data;
});

const updatePersonal = createAsyncThunk("personais/updatePersonalAsync", async (data) => {
    await api.put(`/personal/${data.id}`, data);
});

const deletePersonal = createAsyncThunk("personais/deletePersonalAsync", async(id)=>{
    await api.delete(`/personal/${id}`);
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