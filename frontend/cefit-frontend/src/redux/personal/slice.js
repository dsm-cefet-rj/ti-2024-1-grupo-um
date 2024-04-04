import { createSlice } from "@reduxjs/toolkit";

const initialState = [
        {
            id: 1,
            nome: "Luiz",
            descricao: "Especialista em finalização",
            rating: [],
            biografia: ""
        },
        {
            id: 2,
            nome: "Arnold Schwarzenegger",
            descricao: "3x Olympia Winner",
            rating: [],
            biografia: ""
        },
        {
            id: 3,
            nome: "Glauco Amorim",
            descricao: "Treinador de alta performance",
            rating: [],
            biografia: ""
        },
        {
            id: 4,
            nome:"Vinicius",
            descricao:"Treinador",
            rating: [],
            biografia: ""
        },
        {
            id: 5,
            nome:"Chico",
            descricao:"Aquariano Nato",
            rating: [],
            biografia: ""
        },
];

const personalSlice = createSlice({
    name:"personal",
    initialState,
    reducers: {
        addPersonal: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const { addPersonal } = personalSlice.actions;

export default personalSlice.reducer;