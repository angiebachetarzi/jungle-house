import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

    const checkEmail = (email) => {
        if (!email.includes('@'))
            return alert('Error: no @ has been entered. This is not a valid email address.')
    }

	return (
		<footer className='jh-footer'>
			<div className='jh-footer-elem'>
			For plant enthusiasts 🌿🌱🌵
			</div>
			<div className='jh-footer-elem'>Subscribe to our newsletter :</div>
            <input type='text' name='email' value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={(e) => checkEmail(e.target.value)}  />
		</footer>
	)
}

export default Footer