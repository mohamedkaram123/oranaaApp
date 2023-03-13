import {configureStore} from '@reduxjs/toolkit'
import dashboardSlice from '../features/dashboardSlice'
import ProductsSlice from '../features/ProductsSlice'


export const store = configureStore({
    reducer:{
        dashboard:dashboardSlice,
         products:ProductsSlice,
        // avg_price_products:AvgPriceProductSlice,
        // webiste_highest_total_prices:WebsiteHighestTotalPriceSlice,
        // total_price_during_month:TotalPriceDuringMonthSlice,

    }
})