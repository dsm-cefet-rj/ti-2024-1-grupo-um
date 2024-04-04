import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        nome: "user ex",
        senha: "ex",
        email: "ex",
        nascimento: "ex",
        CPF: "ex"
    },
];

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const { addUser } = userSlice.actions;

export default userSlice.reducer;