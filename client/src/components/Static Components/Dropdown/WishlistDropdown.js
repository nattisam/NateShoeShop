// WishlistDropdown.js
import { useWishlist } from '../../../context/WishlistContext';
import { useCart } from '../../../context/CartContext';
import './Dropdown.scss';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WishlistDropdown = () => {
  const { addToCart } = useCart();
  const { wishlistItems, removeFromWishlist } = useWishlist();

  const handleAddToCart = (item) => {
    const newItem = {
      img: item.img,
      name: item.name,
      price: item.price,
      quantity: 1,
    };
    addToCart(newItem);
  };

  return (
    <div className='cart-dropdown'>
        {wishlistItems.length === 0
        ?  <div className='empty-cart'>
                <p>Wishlist is empty</p>
                <div className='big-cart-icon'>
                <FontAwesomeIcon icon={faHeart} size='2x' />
                </div>
            </div>
        : <div className='cart-dropdown-container'>
            <ul>
                {wishlistItems.map((item, index) => (
                    <li key={index}>
                    <div>
                        <img src={item.img} alt='shoe' />
                    </div>
                    <div>
                        <p className='cart-item'>{item.name}</p>
                        <p className='cart-price'>{item.price} Br</p>
                    </div>
                    <div>
                        <button onClick={() => handleAddToCart(item)}>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </button>
                    </div>
                    <div>
                        <button onClick={() => removeFromWishlist(index)} className='minus-button'>
                            <div className='minus-icon' />
                        </button>
                    </div>
                    </li>
                ))}
                </ul>
                <div className='underline' />
                <div className='cart-total'>
                    <span className='cart-total-info'>
                        <p className='cart-total-text'>Total Wishlist Items:</p>
                        <p className='cart-total-value'>{wishlistItems.length}</p>
                    </span>
                </div>

            </div>
        }
    </div>
  );
};

export default WishlistDropdown;
