import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import { get } from '../../helper'
import { urls } from '../../urls'

export const total_products = createAsyncThunk("total_products", async () => {
    try {
      const response = await get(urls.total_products);
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

const TotalProductsSlice = createSlice({
    name:"total_products",
    initialState,
    reducers:{ },
    extraReducers:{
        [total_products.pending]:(state,action)=>{
            state.loading = true
        },
        [total_products.fulfilled]:(state,action)=>{
            state.loading = false
            state.data = action.payload

        },
        [total_products.rejected]:(state,action)=>{
            state.loading = false
            state.data = action.payload
            state.error = 'error'
        }
    }
})


export default TotalProductsSlice.reducer