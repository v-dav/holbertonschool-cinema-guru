import React from 'react'
import './general.css';


const SelectInput = ({ label, options, className, value, setValue }) => {
	const handleSelect = (e) => {
		setValue(e.target.value);
	}

	return (
		<div>
			<label htmlFor="">{label}</label>
			<select
				name="select-input"
				id="select-input"
				className={className}
				value={value}
				onChange={handleSelect}>
				{options.map(option => <option value={option}>{ option }</option>)}
			</select>
		</div>
	)
}

export default SelectInput
