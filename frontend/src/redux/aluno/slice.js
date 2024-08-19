import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import CreateAxiosInstance from "../../utils/api";


const createAluno = createAsyncThunk('aluno/addAlunoAsync', async(data) =>{
  const api  = CreateAxiosInstance(); 
  const response = await api.post("/aluno", data);
  return response.data;
})

const deleteAlunoByUserId = createAsyncThunk("users/deleteUserAsync", async(id)=>{
  const api  = CreateAxiosInstance(); 

  const alunos = await api.get(`/aluno?userId=${id}`);

  for (let aluno of alunos.data){
    await api.delete(`/aluno/${aluno.id}`);
  }
});

const getAlunosByPersonalId = createAsyncThunk("personais/getAlunosAsync", async(idPersonal) => {
  const api  = CreateAxiosInstance(); 
  const response = await api.get(`/aluno/${idPersonal}`);
  return response.data;
})

const deleteAlunoByPersonalId = createAsyncThunk("personais/deletePersonalAsync", async(id)=>{
  const api  = CreateAxiosInstance(); 
  const alunos = await api.get(`/aluno/${id}`);

  for (let aluno of alunos.data){
    await api.delete(`/aluno/user/${aluno.id}`);
  }
});

const alunoSlice = createSlice({
  name: 'pagamento',
  initialState: [],
  reducers: {
    addAluno: (state, action) => {
      state.push(action.payload);
    },
    clearAlunos: (state, action) => {
      while(state.length > 0){
        state.pop();
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(getAlunosByPersonalId.fulfilled, (state, action) => {
      while(state.length > 0){
        state.pop();
      }
      for (let aluno of action.payload) {
        state.push(aluno);
      }
    })
  }
});

export const { addAluno, clearAlunos } = alunoSlice.actions;

export {createAluno, deleteAlunoByUserId, getAlunosByPersonalId, deleteAlunoByPersonalId};

export default alunoSlice.reducer;