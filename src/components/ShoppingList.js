import { useState } from 'react';
import { plantList } from '../data/plantList';
import PlantItem from './PlantItem';
import '../styles/ShoppingList.css'
import Categories from './Categories';
const ShoppingList = ({ cart, updateCart }) => {
    const categoryList = plantList.reduce((acc, plant) => {
        if (!acc.includes(plant.category)) acc.push(plant.category)
        return acc
    }, [])

	const [selectedCats, setSelectedCats] = useState(categoryList)

	const addToCart = ({name, price}) => {
		const currentPlant = cart.find(plant => plant.name === name)
		//if plant is already in cart
		if (currentPlant) {
			//delete plant from cart
			const newCart = cart.filter(plant => plant.name !== name)
			//add plant with new amount
			updateCart([...newCart, {name, price, amount: currentPlant.amount + 1}])
		} else {
			//add plant to cart with amount of 1
			updateCart([...cart, {name, price, amount: 1}])
		}
	}
	

    return (
		<div className='jh-shopping-list'>
			<Categories catList={categoryList} selected={selectedCats} onChange={setSelectedCats}/>
			<ul className='jh-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) => (
					!selectedCats  || selectedCats.includes(category) ||
					 selectedCats.length === categoryList.length || selectedCats.includes('all') ?
					<div key={id}>
					<PlantItem
						cover={cover}
						name={name}
						water={water}
						light={light}
						price={price}
					/>
					<button onClick={() => addToCart({name, price})}>Add</button>
					</div>
					:
					null
				))}
			</ul>
		</div>
	)
}

export default ShoppingList