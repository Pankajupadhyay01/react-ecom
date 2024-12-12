import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'userBuy',
    initialState: {
        userPurchase: [],
        qyt:1
    },
    reducers: {
        updateBuy : (state , action )=>{ 
            state.userPurchase = []
            state.userPurchase = action.payload.detail;
            state.qyt = action.payload.qyt
        }
    }
})
export const { updateBuy } = counterSlice.actions
export default counterSlice.reducer