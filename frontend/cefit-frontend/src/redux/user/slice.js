import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        currentUser: null,
    }
];
const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push({...action.payload, id: state.length});
        },
        loginUser: (state, action) => {
            const usuarioSistema = state.filter((user) => user.email === action.payload.email)[0];
            if(usuarioSistema != undefined){
                if(usuarioSistema.senha === action.payload.senha){
                    state[0].currentUser = usuarioSistema;
                }
            }
            
        },
        logoutUser: (state, action) => {
            state[0].currentUser = null;
        }
    }
})

export const { addUser, loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;