import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get,post } from '../../helper'
import { urls } from '../../urls'


 const total_price_during_month = createAsyncThunk("total_price_during_month", async () => {
    try {
      const response = await get(urls.total_price_during_month);
      return  response.data;
    } catch (err) {
      // Handle errors here
    }
  });

  const avg_price_products = createAsyncThunk("avg_price_products", async () => {
    try {
      const response = await get(urls.avg_price_products);
      return response.data;
    } catch (err) {
      // Handle errors here
    }
  });

   const total_products = createAsyncThunk("total_products", async () => {
    try {
      const response = await get(urls.total_products);
      return response.data;
    } catch (err) {
      // Handle errors here
    }
  });

   const webiste_highest_total_prices = createAsyncThunk("webiste_highest_total_prices", async () => {
    try {
      const response = await get(urls.webiste_highest_total_prices);
      return response.data;
    } catch (err) {
      // Handle errors here
    }
  });

   const total_urls_count_for_each_website = createAsyncThunk("total_urls_count_for_each_website", async () => {
    try {
      const response = await get(urls.total_urls_count_for_each_website);
      return  response.data;
    } catch (err) {
      // Handle errors here
    }
  });

  const get_produts = createAsyncThunk("products", async () => {
    try {
      const response = await post(urls.products);
      return  response.data;
    } catch (err) {
      // Handle errors here
    }
  });

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    data: {
        total_products:"",
        total_price_during_month:"",
        total_urls_count_for_each_website:"",
        webiste_highest_total_prices:"",
        avg_price_products:"",
        products:[]
    },
    loading1: true,
    loading2: true,
    loading3: true,
    loading4: true,
    loading5: true,
    loading6:true,

    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(total_products.pending, (state) => {
        state.loading1 = true;
      })
      .addCase(total_products.fulfilled, (state, action) => {
        state.data.total_products = action.payload;
        state.loading1 = false;

      })
      .addCase(total_products.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading1 = false;

      })

      .addCase(total_price_during_month.pending, (state) => {
        state.loading2 = true;
      })
      .addCase(total_price_during_month.fulfilled, (state, action) => {
        state.data.total_price_during_month = action.payload;
        state.loading2 = false;

      })
      .addCase(total_price_during_month.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading2 = false;

      })

      .addCase(total_urls_count_for_each_website.pending, (state) => {
        state.loading3 = true;
      })
      .addCase(total_urls_count_for_each_website.fulfilled, (state, action) => {
        state.data.total_urls_count_for_each_website = action.payload;
        state.loading3 = false;

      })
      .addCase(total_urls_count_for_each_website.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading3 = false;

      })

      .addCase(webiste_highest_total_prices.pending, (state) => {
        state.loading4 = true;
      })
      .addCase(webiste_highest_total_prices.fulfilled, (state, action) => {
        state.data.webiste_highest_total_prices = action.payload;
        state.loading4 = false;

      })
      .addCase(webiste_highest_total_prices.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading4 = false;

      })

      .addCase(avg_price_products.pending, (state) => {
        state.loading5 = true;
      })
      .addCase(avg_price_products.fulfilled, (state, action) => {
        state.data.avg_price_products = action.payload;
        state.loading5 = false;

      })
      .addCase(avg_price_products.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading5 = false;

      })

      .addCase(get_produts.pending, (state) => {
        state.loading6 = true;
      })
      .addCase(get_produts.fulfilled, (state, action) => {
        state.data.products = action.payload;
        state.loading6 = false;

      })
      .addCase(get_produts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading6 = false;

      })
  },
});

export default dashboardSlice.reducer;

export const fetchData = {
    total_price_during_month,
    avg_price_products,
    total_products,
    webiste_highest_total_prices,
    total_urls_count_for_each_website,
    get_produts
};
