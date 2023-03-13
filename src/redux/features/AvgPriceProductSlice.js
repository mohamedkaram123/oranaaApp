import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import { get } from '../../helper'
import { urls } from '../../urls'

const avg_price_products = createAsyncThunk("avg_price_products", async () => {
    try {
      const response = await get(urls.avg_price_products);
      return { data: response.data};
    } catch (err) {
      // Handle errors here
    }
  });

const initialState = {
    loading:false,
    data:[],
    error:null
}

const AvgPriceProductSlice = createSlice({
    name:"avg_price_products",
    initialState,
    reducers:{ },
    extraReducers:{
        [avg_price_products.pending]:(state,action)=>{
            state.loading = true
        },
        [avg_price_products.fulfilled]:(state,action)=>{
            state.loading = false
            state.data = action.payload

        },
        [avg_price_products.rejected]:(state,action)=>{
            state.loading = false
            state.data = action.payload
            state.error = 'error'
        }
    }
})

export  {avg_price_products}

export default AvgPriceProductSlice.reducer