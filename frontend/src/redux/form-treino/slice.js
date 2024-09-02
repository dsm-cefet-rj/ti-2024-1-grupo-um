import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CreateAxiosInstance from "../../utils/api";
import { notify } from "../../index";
import { addTraining } from "../trainings/slice";
import { useDispatch } from "react-redux";

const initialState = {
    userId: "",
    descricao: "",
    title: "",
    type: "",
    observacoes: "",
};

const api  = CreateAxiosInstance();


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
    },

})

export const { addForms, addInfo, clearForms } = formsSlice.actions;

export default formsSlice.reducer;