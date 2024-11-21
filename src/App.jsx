import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { setInvoices } from './redux/invoiceSlice';
import InvoicesTab from './components/Tabs/InvoicesTab';
import ProductsTab from './components/Tabs/ProductsTab';
import CustomersTab from './components/Tabs/CustomersTab';
import FileUpload from './components/FileUpload';
import "./css/Navbar.css"

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Simulated API response
    const data = {
      invoiceSummary: {
        invoiceNumber: 'INV-TEST-1526',
        invoiceDate: '12 Nov 2024',
        supplier: 'Elnvoices',
        supplierGSTIN: '29AABCT1332L000',
        consignee: 'Navya Sri',
        consigneeCompany: null,
        consigneeGSTIN: null,
        placeOfSupply: '36-TELANGANA',
        totalAmount: '₹3,68,381.00',
      },
      products: [
        {
          name: 'YONEX ZR 100 LIGHT Racket',
          customerName: 'Navya Sri',
          quantity: 1,
          unitPrice: '25,600.00',
          total: '1,79,200.00',
        },
        {
          name: 'Matrix and Pillows',
          customerName: 'Navya Sri',
          quantity: 7,
          unitPrice: '45,084.7458',
          total: '53,200.00',
        },
      ],
      customerDetails:[{
        customerName: 'Navya Sri',
        company: null,
        gstin: null,
        phone: '8965236147',
      }],
    };
    dispatch(setInvoices(data));
  }, [dispatch]);

  return (
    <Router>
      <FileUpload/>
      <nav>
        <NavLink to="/">Invoices</NavLink> | <NavLink to="/products">Products</NavLink> | <NavLink to="/customers">Customers</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<InvoicesTab />} />
        <Route path="/products" element={<ProductsTab />} />
        <Route path="/customers" element={<CustomersTab />} />
      </Routes>
    </Router>
  );
};

export default App;
