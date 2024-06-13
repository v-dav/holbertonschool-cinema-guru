import React from 'react'
import './auth.css'
import Input from '../../components/general/Input'
import Button from '../../components/general/Button'


const Register = ({ username, password, setUsername, setPassword }) => {
	return (
		<>
			<div className='login-form'>
				<h3>Create a new account</h3>
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
					label={"Sign Up"}
					className={"button signin-submit-button"}
					icon={"fa-solid fa-plus"}
					type="submit"
				></Button>
			</div>

		</>
	)
}

export default Register
