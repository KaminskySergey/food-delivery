import { persistReducer } from 'redux-persist'


import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { login, logout, refresh, register } from './operations';
import { initAuth } from './initAuth';




const authSlice = createSlice({
    name: 'auth',
    initialState: initAuth,
    extraReducers: builder => {
        builder.addCase(register.pending, state => state)
    .addCase(register.fulfilled, (state, {payload}) => {
      
        state.user = payload.data.user
        // state.token = payload.token;
        state.isLoadingUser = true;
    })
    .addCase(register.rejected, state => state)
    ///======================================================
    .addCase(login.pending, state => state)
    .addCase(login.fulfilled, (state, {payload}) => {
// console.log(payload, 'eeeeeeeeeeee')
        // state.user = payload.data.user
        state.token = payload.data.token;
        state.isLoadingUser = true;
    })
    
    ///======================================================
    .addCase(logout.fulfilled, state => {
        state.user = {name: null, email: null}
        state.token = null;
        state.isLoadingUser = false;
    })
    ///======================================================
    .addCase(refresh.pending, (state, {payload}) => {
        state.isRefreshingUser = true;
    })
    .addCase(refresh.fulfilled, (state, {payload}) => {
        console.log(payload, 'qqqqqqqqqqqqqqqqqqqqqqqq')
        state.user = payload.data.user
        state.isRefreshingUser = false;
        state.isLoadingUser = true;
        state.token = payload.data.token;
        
        
    })
    .addCase(refresh.rejected, (state, { payload }) => 
        {state.isRefreshingUser = false})
    }
})

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  }

export const authReducer = persistReducer(persistConfig, authSlice.reducer)