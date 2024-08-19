import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CreateAxiosInstance from "../../utils/api";
import { notify } from "../../index";
import { useSelector } from "react-redux";
import rootReducer from "../root-reducer";

const api  = CreateAxiosInstance();

const initialState = {
    logged: null,
    loggedPersonal: null,
    user: {},
    personal: {},
};


const addUser = createAsyncThunk('user/addUserAsync', async (data) => {
    try{
        const response = await api.post("/user", data);
        notify("success", "Usuário criado com sucesso.");
        return response.data;

    }catch(error){
        console.log(error);
        notify("error", error.message);
        return false;
    }
});

const updateUser = createAsyncThunk("user/updateUserAsync", async (data) => {
    try{
        const token = data.token;
        console.log(data);
        const updateUser = {
            CPF: data.CPF,
            birth: data.birth,
            email: data.email,
            nome: data.nome,
            senha: data.senha
        }
        console.log("passou linha 41");
        await api.put(`/user/${data._id}`, updateUser, {
            headers: {
                Authorization:`${token}`
            }
        });
        console.log("passou linha 47");
        notify("success", "Usuario atualizado com sucesso");
    }catch(error){
        notify("error", error.message);
    }
});

const deleteUser = createAsyncThunk("users/deleteUserAsync", async(id)=>{
    await api.delete(`/user/${id}`);
});

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        addLoggedUser: (state, action) => {
            console.log(action.payload);
            if(action.payload.token){
                state.logged = action.payload.token; //switch to token in the future
            }
            state.user = action.payload.user;
        },
        addLoggedPersonal: (state, action) => {
            state.loggedPersonal = true; //switch to token in the future
            state.personal = action.payload;
        },
        logoutUser: (state) => {
            state.logged = false;
            state.loggedPersonal = false;
            state.user = {};
            state.personal={};
        },
        addTraining: (state, action) => {
            if(state.logged){
                state.user.treinos.push(action.payload);
            }
        }
    }
})

export const { loginUser, logoutUser, addTraining, addLoggedUser, addLoggedPersonal } = userSlice.actions;

export { addUser, updateUser, deleteUser }

export default userSlice.reducer;