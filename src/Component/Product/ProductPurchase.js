import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListProduct from '../List/ListProduct';

function ProductPurchase() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handlePurchase = () => {
    // 장바구니의 제품들을 구매 완료 처리
    axios.post('/api/purchase', { product: cart })
      .then(response => {
        console.log('Purchase successful!', response.data);
        // 구매 완료 후 장바구니 초기화
        setCart([]);
      })
      .catch(error => {
        console.error('There was an error completing the purchase!', error);
      });
  };

  return (
    <div>
      <h1>제품구매</h1>
      <ListProduct onAddToCart={addToCart} />
      <h2>제품 목록</h2>
      <ul>
        {product.map(product => (
          <li key={product.id}>
            {product.name} - {product.price}원
            <button onClick={() => addToCart(product)}>장바구니에 담기</button>
          </li>
        ))}
      </ul>
      <h2>장바구니</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}원
          </li>
        ))}
      </ul>
      <button onClick={handlePurchase}>구매 완료</button>
    </div>
  );
}


export default ProductPurchase
