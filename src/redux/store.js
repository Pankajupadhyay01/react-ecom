import { configureStore } from '@reduxjs/toolkit'
import useReducer from './productSlice'
import cartReducer from './cart'
import lastReducer from './checkout'
export default configureStore({
    reducer: {
        // Product Slice
        user: useReducer,
        // Cart 
        cart: cartReducer,
        // CheckoutSlice
        checkout: lastReducer
    }
})