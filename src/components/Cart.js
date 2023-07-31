// CartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantityAction, decreaseQuantityAction } from '../actions/cartActions';
import './Cart.css'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantityAction(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantityAction(itemId));
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
     <div>
        <h2><i> My Cart</i></h2>
      <div className='cart-container'>
      
      {cartItems.map((item) => (
        <div >
          <div key={item.id} className='cartitem-container'>
          <div className='content'>
          <p className='cart-item'>Title: {item.title}</p>
          <p className='cart-item'>Price: ${item.price}</p>
          <p className='cart-item'>Quantity: {item.quantity}</p>
          <p className='cart-item'>Category: {item.category}</p>
          <p className='cart-item'>Rating: {item.rating}</p>
          <div className='btn-container'>
          <button onClick={() => handleIncreaseQuantity(item.id)} className='button'>Increase</button>
          <button onClick={() => handleDecreaseQuantity(item.id)} className='button'>Decrease</button>
          </div>
          </div>
        </div>
        </div>
      ))}
      </div>
      <div className='total-container'>
        <p>Total Quantity: <b>{totalQuantity}</b></p>
        <p>Total Amount: <b>${totalAmount.toFixed(2)}</b></p>
      </div>
    
     </div>
   
  );
};

export default Cart;