import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import { get } from '../../helper'
import { urls } from '../../urls'

export const total_urls_count_for_each_website = createAsyncThunk("total_urls_count_for_each_website", async () => {
    try {
      const response = await get(urls.total_urls_count_for_each_website);
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

const TotalUrlsCountForEachWebsiteSlice = createSlice({
    name:"total_urls_count_for_each_website",
    initialState,
    reducers:{ },
    extraReducers:{
        [total_urls_count_for_each_website.pending]:(state,action)=>{
            state.loading = true
        },
        [total_urls_count_for_each_website.fulfilled]:(state,action)=>{
            state.loading = false
            state.data = action.payload

        },
        [total_urls_count_for_each_website.rejected]:(state,action)=>{
            state.loading = false
            state.data = action.payload
            state.error = 'error'
        }
    }
})


export default TotalUrlsCountForEachWebsiteSlice.reducer