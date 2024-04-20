import { createSlice } from '@reduxjs/toolkit';



const pagamentoSlice = createSlice({
  name: 'pagamento',
  initialState: [],
  reducers: {
    addAluno: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { adicionarPagamento } = pagamentoSlice.actions;
export default pagamentoSlice.reducer;