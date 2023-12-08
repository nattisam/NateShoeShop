import React, { useEffect, useState } from 'react';
import { useCart } from '../../../context/CartContext';
import './Dropdown.scss';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartDropdown = () => {
  const { cartItems, setCartItems, removeFromCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calculate total price whenever cartItems change
    calculateTotal();
  }, [cartItems]);

  const handleCounterChange = (event, index) => {
    // Ensure the value is a number before updating the state
    const newQuantity = parseInt(event.target.value, 10);

    // Check if newQuantity is a valid number
    if (!isNaN(newQuantity)) {
      // Update the quantity of the item at the specified index in cartItems
      const updatedCartItems = [...cartItems];
      updatedCartItems[index] = {
        ...updatedCartItems[index],
        quantity: newQuantity,
      };

      // Update the cart items with the new quantity
      setCartItems(updatedCartItems);
    }
  };

  const calculateTotal = () => {
    // Calculate total price based on the latest state of cartItems
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  return (
    <div className='cart-dropdown'>
      {cartItems.length === 0 ? (
        <div className='empty-cart'>
          <p>Cart is empty</p>
          <div className='big-cart-icon'>
            <FontAwesomeIcon icon={faShoppingCart} size='2x' />
          </div>
        </div>
      ) : (
        <div className='cart-dropdown-container'>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <div>
                  <img src={item.img} alt='shoe' />
                </div>
                <div>
                  <p className='cart-item'>{item.name}</p>
                  <p className='cart-price'>{item.price} Br</p>
                </div>
                <div>
                  <input
                    type="number"
                    id="counter"
                    name="counter"
                    value={item.quantity}
                    onChange={(event) => handleCounterChange(event, index)}
                    min={1}
                  />
                </div>
                <div>
                  <button onClick={() => removeFromCart(index)} className='minus-button'>
                    <div className='minus-icon' />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className='underline' />
          <div className='cart-total'>
            <span className='cart-total-info'>
              <p className='cart-total-text'>
                Total:  
              </p>
              <p className='cart-total-value'>{totalPrice} Br</p>
            </span>
          </div>
          <button className='order-button'>
            Order
          </button>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
