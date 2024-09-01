import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import CreateAxiosInstance  from "../../utils/api";
import { notify } from "../..";

const initialState = [];
const api  = CreateAxiosInstance();

const addTreino = createAsyncThunk('user/addTreinoAsync', async (data) => {
    try{
        console.log(data);
        const response = await api.post("/training", data.infos,{
            headers:{
                Authorization:`${data.token}`
            }
        });
        console.log(response.data.trainings);
        console.log(response.data);
        for(const exercise of data.exercicios){
            const exerciseToBeCreated = {
                trainingId: response.data.trainings._id,
                name: exercise.name,
                peso: exercise.peso,
                series: exercise.series,
                observacoes: exercise.observacoes
            }
            await api.post(`/exercise/`, exerciseToBeCreated, {
                headers: {
                    Authorization:`${data.token}`
                }
            })
        }
        
        notify("success", "Treino adicionado com sucesso");
        return response.data.trainings;

    }catch(error){
        notify("error", error.message);
    }
});

const addTreinoForStudent = createAsyncThunk('user/addTreinoStudentAsync', async (data) => {
    try{
        console.log(data);
        const response = await api.post(`/training/${data.userId}`, data.infos,{
            headers:{
                Authorization:`${data.token}`
            }
        });
        console.log(response.data.trainings);
        console.log(response.data);
        for(const exercise of data.exercicios){
            const exerciseToBeCreated = {
                trainingId: response.data.trainings._id,
                name: exercise.name,
                peso: exercise.peso,
                series: exercise.series,
                observacoes: exercise.observacoes
            }
            await api.post(`/exercise/`, exerciseToBeCreated, {
                headers: {
                    Authorization:`${data.token}`
                }
            })
        }
        
        notify("success", "Treino adicionado com sucesso");
        return response.data.trainings;

    }catch(error){
        notify("error", error.message);
    }
});

const getTreinosByUserID = createAsyncThunk("treino/getTreinosAsyncByUserID", async(infos) => {
    try{

        const response = await api.get(`/training/${infos.userId}`, {
            headers: {
                Authorization:`${infos.token}`
            }
        });
        console.log(response.data);
        return response.data; 
    } catch(err){
        console.log(err);
    }
});
const deleteTreinosByUserId = createAsyncThunk("treino/deleteTreinos", async (token) => {
    try{
        await api.delete(`/training/user/`, {
            headers: {
                Authorization:`${token}`
            }
        });
    }catch(error){
        console.log(error.response.data.message);
    }
});
const deleteTreinoByID = createAsyncThunk("treino/deleteTreinoByID", async (infos) => {
    try {
        await api.delete(`/training/${infos.idTreino}`, {
            headers: {
                Authorization:`${infos.token}`
            }
        }); 
        await api.delete(`/exercise?trainingId=${infos.idTreino}`, {
            headers: {
                Authorization:`${infos.token}`
            }
        })

        notify("success", "Treino excluido com sucesso");
    } catch(err) {
        notify("error", "Não foi possível excluir o treino...");
    }
})

const trainingsSlice = createSlice({
    name: "trainings",
    initialState,
    reducers: {
        addTraining: (state, action) => {
            state.push(action.payload)
        },
        deleteTraining: (state, action) => {
            for (let i = 0; i < state.length; i++) {
                if (state[i]._id === action.payload) {
                    state.splice(i, 1);
                    break;
                }
            }
        },
        clearTrainings: (state) => {
            while(state.length > 0){
                state.pop()
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTreinosByUserID.fulfilled, (state, action) => {
                while (state.length > 0) {
                    state.pop()
                }
                console.log(action.payload);
                if(!action.payload?.message){
                    for (let training of action.payload) {
                        state.push(training)
                    }
                }
            })
            .addCase(addTreino.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(addTreinoForStudent.fulfilled, (state, action) => {
                state.push(action.payload);
            })
    }
})

export const { addTraining, deleteTraining, clearTrainings } = trainingsSlice.actions;

export { getTreinosByUserID, deleteTreinoByID, deleteTreinosByUserId, addTreino, addTreinoForStudent };
export default trainingsSlice.reducer;
