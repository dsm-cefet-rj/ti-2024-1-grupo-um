import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    userId: "",
    descricao: "",
    title: "",
    type: "",
    observacoes: "",
};

const addTreino = createAsyncThunk('user/addTreinoAsync', async (data) => {
    console.log(data);
    const response = await axios.post("http://localhost:3000/training", data);
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