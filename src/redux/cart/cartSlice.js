import storage from 'redux-persist/lib/storage'
import  {createSlice} from "@reduxjs/toolkit"
import {initCart}  from "./initCart"
import persistReducer from 'redux-persist/es/persistReducer'
import { submitOrder } from './operations'



const cartsSlice = createSlice({
    name: 'carts',
    initialState: initCart,
    reducers: {
        addToCart: (state, {payload}) => {
            const existingItem = state.cart.find((el) => el._id === payload._id);
            if (existingItem) {
                existingItem.quantity += 1;
              } else {
                state.cart.push({ ...payload, quantity: 1 });
              }
            
        },
        updateQuantity: (state, action) => {
            const { id, value } = action.payload;
            const item = state.cart.find((el) => el._id === id);
      
            if (item) {
              item.quantity = value;
            }
          },
        deleteProduct: (state, action) => {
          state.cart = state.cart.filter(product => product._id !== action.payload)
        },
        clearOrder: (state, action) => {
          state.cart = []
        }
        },
        
    extraReducers: builder =>
    builder
    .addCase(submitOrder.pending, (state, action) => {
      
      state.isLoading = true;
    })
    .addCase(submitOrder.rejected, (state, action) => {
      
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(submitOrder.fulfilled, (state, action) => {
      state.cart = []
    })
    
})


const persistConfig = {
    key: 'cart',
    storage,
    whitelist: ['cart'],
  }

  
  export const  {addToCart, updateQuantity, deleteProduct, clearOrder} = cartsSlice.actions;
  export const cartsReducer = persistReducer(persistConfig, cartsSlice.reducer)
// export const cartsReducer = cartsSlice.reducer;