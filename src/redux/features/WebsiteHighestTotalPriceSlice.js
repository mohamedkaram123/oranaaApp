import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import { get } from '../../helper'
import { urls } from '../../urls'

export const webiste_highest_total_prices = createAsyncThunk("webiste_highest_total_prices", async () => {
    try {
      const response = await get(urls.webiste_highest_total_prices);
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

const WebsiteHighestTotalPriceSlice = createSlice({
    name:"webiste_highest_total_prices",
    initialState,
    reducers:{ },
    extraReducers:{
        [webiste_highest_total_prices.pending]:(state,action)=>{
            state.loading = true
        },
        [webiste_highest_total_prices.fulfilled]:(state,action)=>{
            state.loading = false
            state.data = action.payload

        },
        [webiste_highest_total_prices.rejected]:(state,action)=>{
            state.loading = false
            state.data = action.payload
            state.error = 'error'
        }
    }
})


export default WebsiteHighestTotalPriceSlice.reducer