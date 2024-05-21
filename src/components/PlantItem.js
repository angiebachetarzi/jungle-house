import CareScale from './CareScale';
import '../styles/PlantItem.css'
const PlantItem = ({name, cover, light, water, price}) => {
    return (
		<li className='jh-plant-item'>
		<span className='jh-plant-item-price'>{price}€</span>
		<img className='jh-plant-item-cover' src={cover} alt={`${name} cover`} />
		{name}
		<div>
			<CareScale careType='water' scaleValue={water} />
			<CareScale careType='light' scaleValue={light} />
		</div>
	</li>
    )

}
export default PlantItem;