import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import CreateAxiosInstance from "../../utils/api";

const initialState = [];

const getPersonais = createAsyncThunk("personais/getPersonaisAsync", async() => {
    const api  = CreateAxiosInstance(); 
    try{
        const response = await api.get("/personal");
        return response.data; 
    }catch(error){
        //logic
    }
});

const createPersonal = createAsyncThunk('personais/addPersonalAsync', async (data) => {
    const api  = CreateAxiosInstance(); 
    try{
        const response = await api.post("/personal", data)
        return response.data;
    }catch(error){
        return error.message;
    }
});

const updatePersonal = createAsyncThunk("personais/updatePersonalAsync", async (data) => {
    const api  = CreateAxiosInstance(); 
    const req = {
        CPF: data.CPF,
        biografia: data.biografia,
        birth: data.birth,
        cidade: data.cidade,
        descricao: data.descricao,
        email: data.email,
        formacao: data.formacao,
        nome: data.nome,
        preco: data.preco,
        senha: data.senha
    }
    //tratar notificacao update personal try catch notify
    await api.put(`/personal/${data._id}`, req);
});

const deletePersonal = createAsyncThunk("personais/deletePersonalAsync", async(id)=>{
    const api  = CreateAxiosInstance(); 
    //tratar try catch notificacao delete personal
    await api.delete(`/personal/${id}`);
});


const personalSlice = createSlice({
    name:"personal",
    initialState,
    reducers: {
        addPersonal: (state, action) => {
            state.push(action.payload);
        },
        clearPersonals: (state) => {
            while(state.length > 0){
                state.pop()
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPersonais.fulfilled, (state, action) => {
            for (let personal of action.payload) {
                state.push(personal);
            }
        })
    }
})

export const { addPersonal, clearPersonals } = personalSlice.actions;

export { getPersonais, createPersonal, updatePersonal, deletePersonal }
export default personalSlice.reducer;