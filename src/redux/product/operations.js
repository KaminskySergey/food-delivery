import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const productsAll = createAsyncThunk('productsAll', async (credentials, thunkAPI) => {
    
    try {
        const data = await axios.get(`/`)
        return data.data.data.result;
        
    } catch (error) {
        return thunkAPI.rejectWithValue('rtrtrtrtrtrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
    }
})


export const productsByShop = createAsyncThunk('productsByShop', async ({shopId}, thunkAPI) => {
    
    
    try {
        const data = await axios.get(`/shops/${shopId}/products`)
        
        return data.data.data.result;
        
    } catch (error) {
        return thunkAPI.rejectWithValue('rtrtrtrtrtrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
    }
})
