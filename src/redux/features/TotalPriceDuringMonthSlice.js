import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import { get } from '../../helper'
import { urls } from '../../urls'

export const total_price_during_month = createAsyncThunk("total_price_during_month", async () => {
    try {
      const response = await get(urls.total_price_during_month);
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

const TotalPriceDuringMonthSlice = createSlice({
    name:"total_price_during_month",
    initialState,
    reducers:{ },
    extraReducers:{
        [total_price_during_month.pending]:(state,action)=>{
            state.loading = true
        },
        [total_price_during_month.fulfilled]:(state,action)=>{
            state.loading = false
            state.data = action.payload

        },
        [total_price_during_month.rejected]:(state,action)=>{
            state.loading = false
            state.data = action.payload
            state.error = 'error'
        }
    }
})


export default TotalPriceDuringMonthSlice.reducer