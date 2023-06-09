import { persistReducer } from 'redux-persist'


import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { getOrdersHistory, login, logout, refresh, register } from './operations';
import { initAuth } from './initAuth';




const authSlice = createSlice({
    name: 'auth',
    initialState: initAuth,
    extraReducers: builder => {
        builder.addCase(register.pending, state => state)
    .addCase(register.fulfilled, (state, {payload}) => {
      
        state.user = payload.data.user
        state.isLoadingForm = true;
        state.isLoadingUser = true;
    })
    .addCase(register.rejected, state => state)
    ///======================================================
    .addCase(login.pending, state => state)
    .addCase(login.fulfilled, (state, {payload}) => {

        state.token = payload.data.token;
        state.isLoadingUser = true;
        state.isLoadingForm = true;
    })
    
    ///======================================================
    .addCase(logout.fulfilled, state => {
        state.user = {name: null, email: null}
        state.token = null;
        state.isLoadingUser = false;
        state.isLoadingForm = false;
    })
    ///======================================================
    .addCase(refresh.pending, (state, {payload}) => {
        state.isRefreshingUser = true;

    })
    .addCase(refresh.fulfilled, (state, {payload}) => {
        state.user.name = payload.data.user.name
        state.user.email = payload.data.user.email
        state.isRefreshingUser = false;
        state.isLoadingUser = true;
        state.isLoadingForm = true;
        
        
    })
    .addCase(refresh.rejected, (state, { payload }) => {
        state.isRefreshingUser = false
    })
        ///=================================================

    .addCase(getOrdersHistory.pending, state => state)
    .addCase(getOrdersHistory.fulfilled, (state, {payload}) => {

        state.user.ordersHistory = payload.data.user.ordersUser
        

    })
    }
    
})

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  }

export const authReducer = persistReducer(persistConfig, authSlice.reducer)