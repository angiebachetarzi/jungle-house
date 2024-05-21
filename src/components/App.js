import { useEffect } from 'react';
import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList';
import '../styles/Layout.css'
import { useState } from 'react';

function App() {
  const [cart, updateCart] = useState(JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [])
  useEffect(() => {
	  localStorage.setItem('cart', JSON.stringify(cart))
	
	  return () => {
		localStorage.clear()
	  }
	}, [cart])
  return <>
  <Banner />
  <div className='jh-layout-inner'>
				<Cart cart={cart} updateCart={updateCart}/>
				<ShoppingList cart={cart} updateCart={updateCart}/>
	</div>
  <Footer />
  </>
}

export default App;
