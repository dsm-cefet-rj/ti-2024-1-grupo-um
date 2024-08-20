import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import CreateAxiosInstance from "../../utils/api";

const api  = CreateAxiosInstance();

const createAluno = createAsyncThunk('aluno/addAlunoAsync', async(data) =>{

  const aluno = {
    userId: data.userId,
    userName: data.userName,
    idPersonal: data.idPersonal,
  }
  const response = await api.post("/aluno", aluno, {
    headers: {
      Authorization:`${data.token}`
    }
  });
  return response.data;
  //auth
})

const deleteAlunoByUserId = createAsyncThunk("users/deleteUserAsync", async(infos)=>{

  const alunos = await api.get(`/aluno?userId=${infos.id}`);

  for (let aluno of alunos.data){
    await api.delete(`/aluno/${aluno.id}`,{
      headers:{
        Authorization:`${infos.token}`
      }
    });
    //auth
  }
});

const getAlunosByPersonalId = createAsyncThunk("personais/getAlunosAsync", async(idPersonal) => {
  const api  = CreateAxiosInstance(); 
  const response = await api.get(`/aluno/${idPersonal}`);
  return response.data;
  //auth
})

const deleteAlunoByPersonalId = createAsyncThunk("personais/deletePersonalAsync", async(id)=>{
  const api  = CreateAxiosInstance(); 
  const alunos = await api.get(`/aluno/${id}`);

  for (let aluno of alunos.data){
    await api.delete(`/aluno/user/${aluno.id}`);
  }
  //auth
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