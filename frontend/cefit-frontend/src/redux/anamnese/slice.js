import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    activityFreq: "",
    weigth: "",
    motivation: "",
    exam: "",
    diet: "",
    observacoes: ""
}

const addAnmneseAsync = createAsyncThunk('anamnese/addAnamneseAsync', async (data) => {
    const response = await axios.post("http://localhost:3004/anamnese", data);
    return response.data;
});


const getAnamnese = createAsyncThunk('anamnese/getAnamneseAsync', async (userId) => {
    const response = await axios.get(`http://localhost:3004/anamnese?userId=${userId}`);
    console.log(response.data);
    return response.data;
});


const anamneseSlice = createSlice({
    name: "anamnese",
    initialState,
    reducers: {
        addAnmnese: (state, action) => {
            state.activityFreq = action.payload.activityFreq;
            state.weigth = action.payload.weigth;
            state.motivation = action.payload.motivation;
            state.exam = action.payload.exam;
            state.diet = action.payload.diet;
            state.observacoes = action.payload.observacoes;
        },
    },
    extraReducers: builder =>{
        builder.addCase(getAnamnese.fulfilled, (state, action) => {
            if(action.payload.length != 0){
                state.weigth = action.payload.activityFreq;
                state.weigth = action.payload.weigth;
                state.motivation = action.payload.motivation;
                state.exam = action.payload.exam;
                state.diet = action.payload.diet;
                state.observacoes = action.payload.observacoes;
            }
        })
    }
})

export const { addAnmnese } = anamneseSlice.actions;

export { addAnmneseAsync, getAnamnese };
export default anamneseSlice.reducer;