import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const createAluno = createAsyncThunk('aluno/addAlunoAsync', async(data) =>{
  const response = await axios.post("http://localhost:3004/aluno", data);
  return response.data;
})

const deleteAlunoByUserId = createAsyncThunk("users/deleteUserAsync", async(id)=>{

  const alunos = await axios.get(`http://localhost:3004/aluno?userId=${id}`);

  for (let aluno of alunos.data){
    await axios.delete(`http://localhost:3004/aluno/${aluno.id}`);
  }
});

const getAlunosByPersonalId = createAsyncThunk("personais/getAlunosAsync", async(personalId) => {
  const response = await axios.get(`http://localhost:3004/aluno?idPersonal=${personalId}`);
  return response.data;
})

const deleteAlunoByPersonalId = createAsyncThunk("personais/deletePersonalAsync", async(id)=>{

  const alunos = await axios.get(`http://localhost:3004/aluno?idPersonal=${id}`);

  for (let aluno of alunos.data){
    await axios.delete(`http://localhost:3004/aluno/${aluno.id}`);
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