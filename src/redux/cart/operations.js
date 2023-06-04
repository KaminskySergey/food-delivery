import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const submitOrder = createAsyncThunk('submitOrder', async (credentials, thunkAPI) => {
    try {
        await axios.post(`/order`, credentials)
        return credentials;
        
    } catch (error) {
        return thunkAPI.rejectWithValue('помилка в операціях')
    }
})


export const getOrdersDeleteById = createAsyncThunk('deleteProduct', async (id, thunkAPI) => {
try {
    const data = await axios.delete(`/order/clear/${id}` )
    
    return data
} catch (error) {
    return thunkAPI.rejectWithValue('помилка в операціях')
}
})