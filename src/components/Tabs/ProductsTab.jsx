import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProductField } from '../../redux/invoiceSlice';

const ProductsTab = () => {
  const { products } = useSelector((state) => state.invoices.data);
  const dispatch = useDispatch();

  const handleChange = (index, field, value) => {
    // Create a new product object with updated values
    const updatedProduct = { ...products[index], [field]: value };

    // Calculate the total price and price with tax if quantity or unitPrice changes
    if (field === 'quantity' || field === 'unitPrice') {
      const quantity = parseFloat(updatedProduct.quantity || 0);
      const unitPrice = parseFloat(updatedProduct.unitPrice.replace(',', '') || 0);
      const total = (quantity * unitPrice).toFixed(2);
      const priceWithTax = (total * 1.18).toFixed(2);

      updatedProduct.total = total; // Update the total
      updatedProduct.priceWithTax = priceWithTax; // Update the price with tax
    }

    // Dispatch the updated product to Redux
    dispatch(updateProductField({ index, product: updatedProduct }));
  };

  return (
    <div>
      <h2>Products</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Tax</th>
            <th>Price with Tax</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={product.name}
                  onChange={(e) => handleChange(index, 'name', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={product.quantity}
                  onChange={(e) => handleChange(index, 'quantity', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={product.unitPrice}
                  onChange={(e) => handleChange(index, 'unitPrice', e.target.value)}
                />
              </td>
              <td>18%</td>
              <td>{ product.unitPrice?(parseFloat(product.unitPrice.replace(/,/g, ''))*1.18).toFixed(2):''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTab;
