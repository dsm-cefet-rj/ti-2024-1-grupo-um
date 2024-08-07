import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createAxiosInstance } from "../../utils/api";


import axios from "axios";
const api = createAxiosInstance();


const initialState = {
    userId: "",
    descricao: "",
    title: "",
    type: "",
    observacoes: "",
};

const addTreino = createAsyncThunk('user/addTreinoAsync', async (data) => {
    console.log(data);
    const response = await api.post("/training", data);
    return response.data;
});

const formsSlice = createSlice({
    name: "forms",
    initialState,
    reducers: {
        addForms: (state, action) => {
            state.userId = action.payload.userId;
        },
        addInfo: (state, action) => {
            state.descricao = action.payload.descricao;
            state.title = action.payload.title;
            state.type = action.payload.type;
            state.observacoes = action.payload.observacoes;
        },
        clearForms: (state) => {
            state.userId = "";
            state.descricao= "";
            state.title= "";
            state.type = "";
            state.observacoes = "";
        }

    }
})

export const { addForms, addInfo, clearForms } = formsSlice.actions;

export { addTreino };
export default formsSlice.reducer;