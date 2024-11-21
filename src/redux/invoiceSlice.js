// invoiceSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    invoiceSummary: {},
    products: [],
    customerDetails: [{}],
  },
};

const invoiceSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    setInvoices(state, action) {
      state.data = action.payload;
    },
    updateProductField(state, action) {
      const { index, product } = action.payload;
      state.data.products[index] = product;
    },
    updateCustomerField(state, action) {
      const { index, field, value } = action.payload;
      const customerName = state.data.customerDetails[index].customerName;
      // Update the specific customer's field
      state.data.customerDetails[index] = {
        ...state.data.customerDetails[index],
        [field]: value,
      };
      
    
      // Update the name in associated products (if needed)
     
      state.data.products.forEach((product) => {
        if (product.customerName === customerName) {

          product.customerName = value; // Reflect updated name
        }
      });
    }
    
    
  },
});

export const { setInvoices, updateProductField, updateCustomerField } = invoiceSlice.actions;
export default invoiceSlice.reducer;
