import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'user',
  initialState: {
    product: [],
    detail: [],
    err: false,
    loading: true,
    menu: false
  },
  reducers: {

    updatemenu: (state) => {
      state.menu = !state.menu
    },
    updateStart: (state) => {
      state.loading = true
    },

    // ALl/Search/category Product data store here
    updateProduct: (state, action) => {
      state.product = []
      state.loading = false
      state.product = action.payload.products
    },

    // Single product store here
    updateDetail: (state, action) => {
      state.detail = []
      state.loading = false
      state.detail = action.payload
    },
    updateErr: (state) => {
      state.loading = false
      state.err = true
    }
  }
})
export const { updateStart, updateProduct, updateErr, updateDetail, updatemenu } = counterSlice.actions
export default counterSlice.reducer