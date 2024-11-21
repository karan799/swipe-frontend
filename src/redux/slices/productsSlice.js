import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   data: [],
// };
const initialState = {
    data: [
      { id: 1, name: "Laptop", quantity: 1, unitPrice: 1000, tax: 100, priceWithTax: 1100 },
      { id: 2, name: "Mouse", quantity: 2, unitPrice: 25, tax: 5, priceWithTax: 55 },
    ],
  };
  
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    updateProduct: (state, action) => {
      const index = state.data.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
  },
});

export const { setProducts, updateProduct } = productsSlice.actions;
export default productsSlice.reducer;
