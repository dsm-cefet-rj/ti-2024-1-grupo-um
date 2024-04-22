import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const createAluno = createAsyncThunk('aluno/addAlunoAsync', async(data) =>{
  const response = await axios.post("http://localhost:3004/aluno", data);
  return response.data;
})

const deleteAlunoByUserId = createAsyncThunk("users/deleteUserAsync", async(id)=>{

  const alunos = await axios.get(`http://localhost:3004/aluno?idUser=${id}`);
  debugger;
  for (let aluno of alunos.data){
    debugger;
    await axios.delete(`http://localhost:3004/aluno/${aluno.id}`)
  }
});

const alunoSlice = createSlice({
  name: 'pagamento',
  initialState: [],
  reducers: {
    addAluno: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addAluno } = alunoSlice.actions;

export {createAluno, deleteAlunoByUserId};

export default alunoSlice.reducer;