import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CreateAxiosInstance from "../../utils/api";

const api  = CreateAxiosInstance(); 

const initialState = {
    preenchida: false,
    activityFreq: "",
    weight: "",
    motivation: "",
    exam: "",
    diet: "",
    observacoes: "",
    userId: "",
    id: ""
}

const addAnmneseAsync = createAsyncThunk('anamnese/addAnamneseAsync', async (data) => {

    const response = await api.post("/anamnese/", data);
    return response.data;
    //auth
});


const getAnamnese = createAsyncThunk('anamnese/getAnamneseAsync', async (userId) => {
    console.log(userId);
    const response = await api.get(`/anamnese/${userId}`);
    return response.data;
    //auth
});

const updateAnamnese = createAsyncThunk('anamnese/updateAnamneseAsync', async (payload) => {
    await api.put(`/anamnese/`, payload);
    //auth
})

const deleteAnamneseByUserId = createAsyncThunk('anamnese/deleteAnamneseAsync', async (userId) => {
    await api.delete(`/anamnese/${userId}`);
    //auth
})

const deleteAnamnese = createAsyncThunk('anamnese/deleteAnamneseAsync', async (anamneseId) => {
    await api.delete(`/anamnese/${anamneseId}`);
    //auth
})


const anamneseSlice = createSlice({
    name: "anamnese",
    initialState,
    reducers: {
        addAnmnese: (state, action) => {
            //maybe remove this reducer.
            state.preenchida = true;
            state.activityFreq = action.payload.activityFreq;
            state.weight = action.payload.weight;
            state.motivation = action.payload.motivation;
            state.exam = action.payload.exam;
            state.diet = action.payload.diet;
            state.observacoes = action.payload.observacoes;
            state.userId = action.payload.userId;
            state.id = action.payload.id;
        },
        clearAnamnese: (state,action)=>{
            state.preenchida = false;
            state.activityFreq = "";
            state.weight = "";
            state.motivation = "";
            state.exam = "";
            state.diet = "";
            state.observacoes = "";
            state.userId = "";
            state.id = "";
        }
    },
    extraReducers: builder =>{
        builder.addCase(getAnamnese.fulfilled, (state, action) => {
            if (action.payload.length > 0){
                const anamnese = action.payload[0];
                state.preenchida = true;
                state.activityFreq = anamnese.activityFreq;
                state.weight = anamnese.weight;
                state.motivation = anamnese.motivation;
                state.exam = anamnese.exam;
                state.diet = anamnese.diet;
                state.observacoes = anamnese.observacoes;
                state.userId = anamnese.userId;
                state.id = anamnese.id;
            }
        })
        builder.addCase(addAnmneseAsync.fulfilled, (state,action) => {
            state.id = action.payload.id;
        })
    }
})

export const { addAnmnese, clearAnamnese } = anamneseSlice.actions;

export { addAnmneseAsync, getAnamnese, updateAnamnese, deleteAnamneseByUserId, deleteAnamnese };
export default anamneseSlice.reducer;