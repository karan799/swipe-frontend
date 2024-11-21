import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCustomerField } from '../../redux/invoiceSlice';

const CustomersTab = () => {
  const { customerDetails, products } = useSelector((state) => state.invoices.data);
  const dispatch = useDispatch();

  const handleChange = (index, field, value) => {
    dispatch(updateCustomerField({ index, field, value }));
  };

  const totalPurchaseAmount = products.reduce((acc, product) => {
    return 0
  }, 0);

  return (
    <div>
      <h2>Customers</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>GSTIN</th>
          </tr>
        </thead>
        <tbody>
          {customerDetails.map((customer, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={customer.customerName || ''}
                  onChange={(e) => handleChange(index, 'customerName', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={customer.company || ''}
                  onChange={(e) => handleChange(index, 'company', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={customer.mobile || ''}
                  onChange={(e) => handleChange(index, 'mobile', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={customer.gstin || ''}
                  onChange={(e) => handleChange(index, 'gstin', e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total Purchase Amount: ₹{totalPurchaseAmount.toFixed(2)}</h3>
    </div>
  );
};

export default CustomersTab;
