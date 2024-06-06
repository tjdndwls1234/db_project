import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListProduct = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    // 제품 목록을 가져오는 API 호출
    axios.get('http://localhost:8081/api/product')
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the product!', error);
      });
  }, []);

  return (
    <div>
      <h2>제품 목록</h2>
      <ul>
        {product.map(product => (
          <li key={product.product_no}>
            {product.product_name} - {product.product_price}원
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListProduct;
