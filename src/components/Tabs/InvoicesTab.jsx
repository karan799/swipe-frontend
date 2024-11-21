import React from 'react';
import { useSelector } from 'react-redux';

const InvoicesTab = () => {
  const { invoiceSummary, products, customerDetails } = useSelector((state) => state.invoices.data);

  return (
    <div>
      <h2>Invoices</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Customer Name</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Tax</th>
            <th>Total Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.customerName}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>18%</td>
              <td>{product.total}</td>
              <td>{invoiceSummary.invoiceDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoicesTab;
