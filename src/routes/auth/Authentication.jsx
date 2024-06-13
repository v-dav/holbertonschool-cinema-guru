import React, { useState } from 'react'
import './auth.css'
import Button from '../../components/general/Button';
import Login from './Login';
import Register from './Register';
import axios from 'axios';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
	const [_switch, setSwitch] = useState(true);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [activeButton, setActiveButton] = useState('signIn');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const url = _switch ? 'http://localhost:8000/api/auth/login' : 'http://localhost:8000/api/auth/register';
		axios.post(url, { username, password })
			.then(res => {
				if (res.status === 200) {
					localStorage.setItem("accessToken", res.data.accessToken)
					setUserUsername(username)
					setIsLoggedIn(true)
				}
			})
			.catch(error => alert(error));
	};

	return (
		<>
			<div className='auth-container'>
				<form method='post' onSubmit={handleSubmit}>
					<div className='auth-form'>
						<Button
							label={"Sign In"}
							className={`button signin-button ${activeButton === 'signIn' ? 'active' : ''}`}
							onClick={(e) => { e.preventDefault(); setSwitch(true); setActiveButton('signIn') }}
						/>
						<Button
							label={"Sign Up"}
							className={`button signup-button ${activeButton === 'signUp' ? 'active' : ''}`}
							onClick={(e) => { e.preventDefault(); setSwitch(false); setActiveButton('signUp') }}
						/>
					</div>
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
				</form>
			</div>
		</>
	)
}

export default Authentication
