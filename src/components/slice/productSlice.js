import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'Product',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
     state.value += 1;
    },
    
    decrement: (state) => {
        if(state.value > 0){

            state.value -= 1;
        }
    },
    
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement} = ProductSlice.actions

export default ProductSlice.reducer