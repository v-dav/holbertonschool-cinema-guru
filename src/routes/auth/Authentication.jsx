import React, { useState } from 'react'
import './auth.css'
import Button from '../../components/general/Button';
import Login from './Login';
import Register from './Register';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
	const [_switch, setSwitch] = useState(true);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [activeButton, setActiveButton] = useState('signIn');


	return (
		<>
			<div className='auth-container'>
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
				{_switch ? (
					<Login
						username={username}
						password={password}
						setUsername={setUsername}
						setPassword={setPassword}
					/>
				) : (
					<Register
						username={username}
						password={password}
						setUsername={setUsername}
						setPassword={setPassword}
					/>
				)}
			</div>

		</>
	)
}

export default Authentication
