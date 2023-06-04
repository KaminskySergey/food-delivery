import { createSlice } from '@reduxjs/toolkit';
import { initProduct } from './initProduct';


import { productsAll, productsByShop } from './operations';

export const productsSlise = createSlice({
  name: 'products',
  initialState: initProduct,
  extraReducers: builder =>
    builder
    .addCase(productsAll.pending, (state, action) => {
      
      state.isLoading = true;
    })
    .addCase(productsAll.rejected, (state, action) => {
      
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(productsAll.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.product = [...action.payload];
    })
      //========productsByShop
      .addCase(productsByShop.pending, (state, action) => {
        
        state.isLoading = true;
      })
      .addCase(productsByShop.rejected, (state, action) => {
        
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(productsByShop.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.productsid = [...action.payload];
      })

      //========addTasks
      
});

export const productsReducer = productsSlise.reducer;