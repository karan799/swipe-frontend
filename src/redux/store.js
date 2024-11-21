// import { configureStore } from '@reduxjs/toolkit';
// import invoicesReducer from './invoicesSlice';
// import productsReducer from './slices/productsSlice';
// import customersReducer from './slices/customersSlice';

// const store = configureStore({
//   reducer: {
//     invoices: invoicesReducer,
//     products: productsReducer,
//     customers: customersReducer,
//   },
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import invoiceReducer from './invoiceSlice';

const store = configureStore({
  reducer: {
    invoices: invoiceReducer,
  },
});

export default store;

