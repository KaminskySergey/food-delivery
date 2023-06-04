import { createSlice } from '@reduxjs/toolkit';


import { shopAll } from './operations';
import { initShop } from './initShop';

export const shopSlise = createSlice({
  name: 'product',
  initialState: initShop,
  extraReducers: builder =>
    builder
      //========fetchAllShop
      .addCase(shopAll.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(shopAll.rejected, (state, action) => {

        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(shopAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.shop = [...action.payload];
      })

});

export const shopsReducer = shopSlise.reducer;