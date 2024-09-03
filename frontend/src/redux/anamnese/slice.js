import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CreateAxiosInstance from "../../utils/api";
import { notify } from "../../index";

const api  = CreateAxiosInstance(); 

const initialState = {
    preenchida: false,
    activityFreq: "",
    weight: "",
    motivation: "",
    date: "",
    diet: "",
    observacoes: "",
    userId: "",
}

const addAnmneseAsync = createAsyncThunk('anamnese/addAnamneseAsync', async (data) => {
    try{
        const response = await api.post("/anamnese/", data.infos, {
            headers: {
                Authorization:`${data.token}`
            }
        });
        notify("success", "Anamnese adicionada com sucesso.");
        return response.data;
    }catch(error){
        notify("error", error.message)
    }
});


const getAnamnese = createAsyncThunk('anamnese/getAnamneseAsync', async (data) => {

    
    
    const response = await api.get(`/anamnese/${data.userId}`,{
        headers: {
            Authorization:`${data.token}`
        }
    });
    return response.data;

});

const updateAnamnese = createAsyncThunk('anamnese/updateAnamneseAsync', async (data) => {
    try{
        const response = await api.put(`/anamnese/`, data.infos, {
            headers: {
                Authorization:`${data.token}`
            }
        });
        notify("success", response.data.message);
    }catch(error){
        notify("error", error.message);
    }
})

const deleteAnamneseByUserId = createAsyncThunk('anamnese/deleteAnamneseAsync', async (userId) => {
    await api.delete(`/anamnese/${userId}`);
   
})

const deleteAnamnese = createAsyncThunk('anamnese/deleteAnamneseAsync', async (infos) => {
    await api.delete(`/anamnese/${infos.anamneseId}`,{
        headers: {
            Authorization:`${infos.token}`
        }
    });
    
})


const anamneseSlice = createSlice({
    name: "anamnese",
    initialState,
    reducers: {
        addAnmnese: (state, action) => {
            
            state.preenchida = true;
            state.activityFreq = action.payload.activityFreq;
            state.weight = action.payload.weight;
            state.motivation = action.payload.motivation;
            state.date = action.payload.date;
            state.diet = action.payload.diet;
            state.observacoes = action.payload.observacoes;
            state.userId = action.payload.userId;
            state._id = action.payload._id;
        },
        clearAnamnese: (state,action)=>{
            state.preenchida = false;
            state.activityFreq = "";
            state.weight = "";
            state.motivation = "";
            state.date = "";
            state.diet = "";
            state.observacoes = "";
            state.userId = "";
            state._id = "";
        }
    },
    extraReducers: builder =>{
        builder.addCase(getAnamnese.fulfilled, (state, action) => {
            
            if (action.payload[0]){
                const anamnese = action.payload[0];
                state.preenchida = true;
                state.activityFreq = anamnese.activityFreq;
                state.weight = anamnese.weight;
                state.motivation = anamnese.motivation;
                state.date = anamnese.date;
                state.diet = anamnese.diet;
                state.observacoes = anamnese.observacoes;
                state.userId = anamnese.userId;
                state._id = anamnese._id;
            }
        })
    }
})

export const { addAnmnese, clearAnamnese } = anamneseSlice.actions;

export { addAnmneseAsync, getAnamnese, updateAnamnese, deleteAnamneseByUserId, deleteAnamnese };
export default anamneseSlice.reducer;