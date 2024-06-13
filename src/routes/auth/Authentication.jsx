import React, { useState } from 'react'
import './auth.css'
import Button from '../../components/general/Button';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
	const [_switch, setSwitch] = useState(true);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [activeButton, setActiveButton] = useState('signIn');


	return (
		<form className='auth-form'>
			<Button
				label={"Sign In"}
				className={`button signin-button ${activeButton === 'signIn' ? 'active' : ''}`}
				onClick={(e) => { e.preventDefault(); setSwitch(true); setActiveButton('signIn') }}>
			</Button>
			<Button
				label={"Sign Up"}
				className={`button signup-button ${activeButton === 'signUp' ? 'active' : ''}`}
				onClick={(e) => { e.preventDefault(); setSwitch(false); setActiveButton('signUp') }}>
			</Button>
		</form>
	)
}

export default Authentication
