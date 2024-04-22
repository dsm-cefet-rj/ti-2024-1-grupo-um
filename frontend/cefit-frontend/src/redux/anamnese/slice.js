import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    preenchida: false,
    activityFreq: "",
    weigth: "",
    motivation: "",
    exam: "",
    diet: "",
    observacoes: "",
    userId: "",
    id: ""
}

const addAnmneseAsync = createAsyncThunk('anamnese/addAnamneseAsync', async (data) => {
    const response = await axios.post("http://localhost:3004/anamnese", data);
    return response.data;
});


const getAnamnese = createAsyncThunk('anamnese/getAnamneseAsync', async (userId) => {
    const response = await axios.get(`http://localhost:3004/anamnese?userId=${userId}`);
    return response.data;
});

const updateAnamnese = createAsyncThunk('anamnese/updateAnamneseAsync', async (payload) => {
    await axios.put(`http://localhost:3004/anamnese/${payload.id}`, payload);
})


const anamneseSlice = createSlice({
    name: "anamnese",
    initialState,
    reducers: {
        addAnmnese: (state, action) => {
            state.preenchida = true;
            state.activityFreq = action.payload.activityFreq;
            state.weigth = action.payload.weigth;
            state.motivation = action.payload.motivation;
            state.exam = action.payload.exam;
            state.diet = action.payload.diet;
            state.observacoes = action.payload.observacoes;
            state.userId = action.payload.userId;
            state.id = action.payload.id;
        },
        clearAnamnese: (state,action)=>{
            state.preenchida = false;
            state.activityFreq = "";
            state.weigth = "";
            state.motivation = "";
            state.exam = "";
            state.diet = "";
            state.observacoes = "";
            state.userId = "";
            state.id = "";
        }
    },
    extraReducers: builder =>{
        builder.addCase(getAnamnese.fulfilled, (state, action) => {
            if (action.payload.length > 0){
                const anamnese = action.payload[0];
                state.preenchida = true;
                state.activityFreq = anamnese.activityFreq;
                state.weigth = anamnese.weigth;
                state.motivation = anamnese.motivation;
                state.exam = anamnese.exam;
                state.diet = anamnese.diet;
                state.observacoes = anamnese.observacoes;
                state.userId = anamnese.userId;
                state.id = anamnese.id;
            }
        })
        builder.addCase(addAnmneseAsync.fulfilled, (state,action) => {
            state.id = action.payload.id;
        })
    }
})

export const { addAnmnese, clearAnamnese } = anamneseSlice.actions;

export { addAnmneseAsync, getAnamnese, updateAnamnese };
export default anamneseSlice.reducer;