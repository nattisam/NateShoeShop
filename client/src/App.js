import './App.scss';
import Navigation from './navigation/navigation';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
const App = () => {
  return( 
    <CartProvider>
        <WishlistProvider>
          <Navigation />
        </WishlistProvider>
    </CartProvider>

  )
}

export default App;