import { createSlice } from "@reduxjs/toolkit";
import arnoldImage from "./../../images/PersonalImages/arnold.png";

const initialState = [
        {
            id: 1,
            nome: "Luiz",
            descricao: "Especialista em finalização",
            rating: 4,
            biografia: "",
            image: ""
        },
        {
            id: 2,
            nome: "Arnold Schwarzenegger",
            descricao: "3x Olympia Winner",
            rating: 5 ,
            biografia: "",
            image: arnoldImage
        },
        {
            id: 3,
            nome: "Glauco Amorim",
            descricao: "Treinador de alta performance",
            rating: 3,
            biografia: ""
        },
        {
            id: 4,
            nome:"Vinicius",
            descricao:"Treinador",
            rating: 1,
            biografia: ""
        },
        {
            id: 5,
            nome:"Chico",
            descricao:"Aquariano Nato",
            rating: 2,
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