// ShoeCard.js
import React, { useState } from 'react';
import { useCart } from '../../../context/CartContext';
import { useWishlist } from '../../../context/WishlistContext';
import './ShoeCard.scss';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function ShoeCard(props) {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const handleAddToWishlist = () => {
    toggleAnimation();

    const newItem = {
      img: props.img,
      name: props.name,
      price: props.price,
    };
    addToWishlist(newItem);
  };

  const handleAddToCart = () => {
    const newItem = {
      img: props.img,
      name: props.name,
      price: props.price,
      quantity: 1,
    };
    addToCart(newItem);
  };

  function toggleAnimation() {
    const targetDiv = document.getElementById('targetDiv');
    targetDiv.classList.toggle('animate');
  }

  return (
    <div className='whole-shoe-container'>
      <div className='shoe-and-button' id='targetDiv'>
        <div className={
          props.section === 'sale'
          ? 'shoe-container sale-shoe-container'
          : 
          'shoe-container'
        }>
          <button onClick={handleAddToWishlist} className={'add-to-wishlist'}>
            <FontAwesomeIcon icon={faHeart} style={{ fontSize: "16px"  }} />
          </button>
          <div className='inner-container'>
            <div className='img-container'>
              <img src={props.img} alt='shoe' className='shoe-img' />
            </div>
          </div>
          <div className='shoe-info'>
            <span className='double-prices'>
              {props.section === 'sale' ? (
                <p className='original-price'>{props.originalPrice} Br</p>
              ) : null}
              <p
                className={
                  props.section === 'sale'
                    ? 'new-arrivals-price sale-price'
                    : 'new-arrivals-price'
                }
              >
                {props.price} Br
              </p>
            </span>
            <p className='new-arrivals-details'>{props.name}</p>
            <p className='new-arrivals-details new-arrivals-category'>
              {props.category}
            </p>

            
          </div>
        </div>
          <button onClick={handleAddToCart} className={
            props.section === 'sale'
            ? 'add-to-cart sale-add-to-cart'
            : 'add-to-cart'
          }>
            Add to Cart
          </button>
      </div>
      
    </div>
  );
}

export default ShoeCard;
