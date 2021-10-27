import { createSlice } from '@reduxjs/toolkit';

export interface CartState {
  products: Array<any>
}

const initialState: CartState = {
  products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, data: any) => {
      state.products = [...state.products, data.payload]
    },
    removeFromCart: (state, data: any) => {
      state.products = state.products.filter(item => item.name !== data.payload)
    },
    clearCart: (state) => {
      state.products = []
    },
  },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer