import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    idUser: "",
    id: "",
    descricao:"",
    title:"",
    type:""
}; 

const addTreino = createAsyncThunk('user/addTreinoAsync', async (data) => {
    const response = await axios.post("http://localhost:3004/treino", data);
    return response.data;
});

const formsSlice = createSlice({
    name: "forms",
    initialState,
    reducers: {
        addForms: (state, action) => {
            state.idUser = action.payload.idUser;
            state.id = action.payload.id;
            state.infos = action.payload.infos;
        },
        addInfo: (state, action) => {
            state.descricao = action.payload.descricao;
            state.title = action.payload.title;
            state.type = action.payload.type;
        },
        
    }
})

export const { addForms, addInfo, saveFormIntoDB } = formsSlice.actions;

export { addTreino };
export default formsSlice.reducer;