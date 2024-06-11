import React from 'react'
import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Input = ({ label, type, className, value, setValue, icon, inputAttributes = {} }) => {
	const handleInput = (e) => {
		setValue(e.target.value);
	}

	return (
		<div>
			{icon && <FontAwesomeIcon
				icon={icon}
				className='faUser'>
			</FontAwesomeIcon>}
			<label htmlFor={inputAttributes.id} className='general-input-label'>{label}</label>
			<input
				type={type}
				className={className}
				value={value}
				onChange={handleInput}
				{...inputAttributes}
			/>

		</div>
	)
}

export default Input
