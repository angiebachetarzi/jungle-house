import { useState, useEffect } from 'react'
import '../styles/Cart.css'
import trash from '../assets/trash.png'

const Cart = ({ cart, updateCart }) => {
	const [isOpen, setIsOpen] = useState(true)

	const total = cart ? cart.reduce((acc, plant) => acc + plant.price * plant.amount, 0) : 0

	const deletePlant = ({name, price, amount}) => {
		const newCart = cart.filter(plant => plant.name !== name)
		if (amount === 1) {
			updateCart(newCart)
		} else {
			updateCart([...newCart, {name, price, amount: amount - 1}])
		}
	}
	useEffect(() => {
		document.title = `JH: ${total}€ Purchases`
	}, [total])

	return isOpen ? (
		<div className='jh-cart'>
			<button
				className='jh-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Close
			</button>
			<h2>Cart</h2>
			<ul>
				{cart && cart.map(({name, price, amount}, index) => 
					<div key={`${name}-${index}`}>
						<span>{name[0].toUpperCase() + name.slice(1)} {price}€ x {amount}</span>
						<img onClick={() => deletePlant({name, price, amount})} className='jh-cart-trash' src={trash} alt='Delete'/>
					</div>
				)}
			</ul>
            <button onClick={() => updateCart([])}>Clear</button>
			<h3>Total : {total}€</h3>
		</div>
	) : (
		<div className='jh-cart-closed'>
			<button
				className='jh-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Open Cart
			</button>
		</div>
	)
}

export default Cart