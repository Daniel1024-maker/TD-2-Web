import { configureStore } from '@reduxjs/toolkit';
import produtosReducer from './reducers';

export const store = configureStore({
  reducer: {
    produtos: produtosReducer
  }
});
