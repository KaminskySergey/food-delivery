import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL='https://food-delivery-i0o7.onrender.com/api/'

export const shopAll =  createAsyncThunk(
  'shop/All',
  async (credentials, thunkAPI) => {
    try {
      const {data} = await axios.get('/shops')
    return data.data.result
    } catch (error) {
      console.log('oййййй')
    }
  }
);

