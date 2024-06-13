import React from 'react'
import './auth.css'
import Input from '../../components/general/Input'
import Button from '../../components/general/Button'


const Login = ({ username, password, setUsername, setPassword }) => {
	return (
		<>
			<div className='login-form'>
				<h3>Sign in with your account</h3>
				<Input
					label={"Username:"}
					type={"text"}
					className={"general-input"}
					value={username}
					setValue={setUsername}
					icon={"fa-solid fa-user"}
					inputAttributes={{ id: "general-input", name: "general-input" }}
				></Input>
				<Input
					label={"Password:"}
					type={"password"}
					className={"general-input"}
					value={password}
					setValue={setPassword}
					icon={"fa-solid fa-key"}
					inputAttributes={{ id: "general-input", name: "general-input" }}>
				</Input>
				<Button
					label={"Sign In"}
					className={"button signin-submit-button"}
					icon={"fa-solid fa-key"}
					type="submit"
				></Button>
			</div>

		</>
	)
}

export default Login
