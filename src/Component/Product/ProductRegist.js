import React, { useState } from 'react';
import axios from 'axios';

export default function ProductRegist() {
  const [PRODUCT_NO, setProductCode] = useState('');
  const [PRODUCT_NAME, setProductName] = useState('');
  const [PRODUCT_PRICE, setProductPrice] = useState('');
  const [ISPBPRODUCT, setIsPbProduct] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/product', {
        code: PRODUCT_NO,
        name: PRODUCT_NAME,
        price: PRODUCT_PRICE,
        pbProduct: ISPBPRODUCT
      });

      console.log('Product registration successful:', response.data);
      // Reset form fields after successful submission
      setProductCode('');
      setProductName('');
      setProductPrice('');
      setIsPbProduct(false);
    } catch (error) {
      console.error('Error registering product:', error);
    }
  };

  return (
    <div>
      <h1>Product Regist</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="PRODUCT_NO">PRODUCT_NO:</label>
        <input 
          type="text" 
          id="PRODUCT_NO" 
          value={PRODUCT_NO} 
          onChange={(e) => setProductCode(e.target.value)} 
        />
        <br />

        <label htmlFor="PRODUCT_NAME">PRODUCT_NAME:</label>
        <input 
          type="text" 
          id="PRODUCT_NAME" 
          value={PRODUCT_NAME} 
          onChange={(e) => setProductName(e.target.value)} 
        />
        <br />

        <label htmlFor="PRODUCT_PRICE">Product Price:</label>
        <input 
          type="number" 
          id="PRODUCT_PRICE" 
          value={PRODUCT_PRICE} 
          onChange={(e) => setProductPrice(e.target.value)} 
        />
        <br />

        <label htmlFor="ISPBPRODUCT">PB Product:</label>
        <input 
          type="checkbox" 
          id="ISPBPRODUCT" 
          checked={ISPBPRODUCT} 
          onChange={(e) => setIsPbProduct(e.target.checked)} 
        />
        <br />

        <button type="submit">Register Product</button>
      </form>
    </div>
  );
}
