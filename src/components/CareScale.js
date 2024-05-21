import water from '../assets/water.svg'
import sun from '../assets/sun.svg'
const CareScale = ({scaleValue, careType}) => {
    const scaleType = careType === 'light' ? 
    <img src={sun} alt='Sun'/>
     : 
    <img src={water} alt='Water'/>
    const handleClick = (careType, scaleValue) => {
        let message = 'This plants needs a '
        message += scaleValue >= 3 ? 'large ' : scaleValue <= 1 ? 'small ' : 'moderate ';
        message += `amout of ${careType}`
        alert(message)
    }
    return (
        <div onClick={() => handleClick(careType, scaleValue)}>
            {[...Array(scaleValue).keys()].map((rangeElem) =>
                scaleValue >= rangeElem ? 
                <span role="img" aria-label="sun" key={rangeElem.toString()}>{scaleType}</span>
                 : null
            )}
        </div>
    )
}

export default CareScale;