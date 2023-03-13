import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import { post } from '../../helper'
import { urls } from '../../urls'

export const get_products = createAsyncThunk("products", async (data) => {
    try {
      const response = await post(urls.products,data);
      return  response.data;
    } catch (err) {
      // Handle errors here
    }
  });

const initialState = {
    loading:false,
    data:[],
    error:null
}

const ProductsSlice = createSlice({
    name:"get_products",
    initialState,
    reducers:{ },
    extraReducers:{
        [get_products.pending]:(state,action)=>{
            state.loading = true
        },
        [get_products.fulfilled]:(state,action)=>{
            state.loading = false
            state.data = action.payload

        },
        [get_products.rejected]:(state,action)=>{
            state.loading = false
            state.data = action.payload
            state.error = 'error'
        }
    }
})


export default ProductsSlice.reducer