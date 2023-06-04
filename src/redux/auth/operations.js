import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}
const setClearHeader = () => {
    axios.defaults.headers.common.Authorization = null;
}

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
    try {
        const {data} = await axios.post('/auth/register', credentials)
        setAuthHeader(data.token)
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})


export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const {data} = await axios.post('/auth/login', credentials)
        setAuthHeader(data.token)
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})


export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.get('/auth/logout')
        
        setClearHeader()
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const refresh = createAsyncThunk('auth/current', async (_, thunkAPI) => {
    const {token} = thunkAPI.getState().auth;
    console.log(thunkAPI.getState(), 'wwww')
console.log(token, 'qqqqqqqqqqqqqqqqqqqqqq')
    if(token === null){
        return thunkAPI.rejectWithValue('Not tokin')
    }
    setAuthHeader(token)
    try {
        const {data} = await axios.get('/auth/current')
        console.log(data, 'data')
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    
})