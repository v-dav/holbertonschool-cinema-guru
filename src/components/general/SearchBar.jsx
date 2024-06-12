import React from 'react'
import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SearchBar = ({ title, setTitle, icon }) => {
	const handleInput = (e) => {
		setTitle(e.target.value);
	}

	return (
		<div className='search-bar-container'>
			<FontAwesomeIcon icon={icon} className="search-icon" />
			<input
				className='search-bar'
				type="search"
				value={title}
				onChange={handleInput}
				placeholder="Search Movies"
			/>
		</div>
	)
}

export default SearchBar
