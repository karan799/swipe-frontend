import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   data: [],
// };
const initialState = {
  data: [
    { id: 1, name: "John Doe", phoneNumber: "1234567890", totalPurchaseAmount: 1100 },
    { id: 2, name: "Jane Smith", phoneNumber: "9876543210", totalPurchaseAmount: 55 },
  ],
};


const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    setCustomers: (state, action) => {
      state.data = action.payload;
    },
    updateCustomer: (state, action) => {
      const index = state.data.findIndex(customer => customer.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
  },
});

export const { setCustomers, updateCustomer } = customersSlice.actions;
export default customersSlice.reducer;
