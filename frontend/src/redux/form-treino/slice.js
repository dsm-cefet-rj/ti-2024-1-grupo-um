import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CreateAxiosInstance from "../../utils/api";
import { notify } from "../../index";

const initialState = {
    userId: "",
    descricao: "",
    title: "",
    type: "",
    observacoes: "",
};

const api  = CreateAxiosInstance();

const addTreino = createAsyncThunk('user/addTreinoAsync', async (data) => {

    console.log(data);
    const response = await api.post("/training", data.infos,{
        headers:{
            Authorization:`${data.token}`
        }
    });
    for(const exercise of data.exercises){
        const exerciseToBeCreated = {
            trainingId: response.data.trainings.id,
            name: exercise.name,
            peso: exercise.peso,
            series: exercise.series,
            observacoes: exercise.observacoes
        }
        const response = await api.post(`/exercise/${exerciseToBeCreated.trainingId}`, exerciseToBeCreated, {
            headers: {
                Authorization:`${data.token}`
            }
        })
    }
    
    notify("success", "Treino adicionado com sucesso");
    return response.data;

    //auth
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