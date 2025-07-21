import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  nextId: 1
};

const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {
    adicionarProduto: (state, action) => {
      const novoProduto = {
        ...action.payload,
        id: state.nextId
      };
      state.list.push(novoProduto);
      state.nextId += 1;
    },
    atualizarProduto: (state, action) => {
      const index = state.list.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    removerProduto: (state, action) => {
      const idRemovido = action.payload;
      state.list = state.list.filter(p => p.id !== idRemovido);

      // Reordenar os IDs dos produtos restantes
      state.list = state.list
        .sort((a, b) => a.id - b.id) // garantir ordem
        .map((produto, index) => ({
          ...produto,
          id: index + 1
        }));

      // Atualiza o próximo ID com base na nova lista
      state.nextId = state.list.length + 1;
    }
  }
});

export const {
  adicionarProduto,
  atualizarProduto,
  removerProduto,
  cancelarProduto
} = produtosSlice.actions;

export default produtosSlice.reducer;