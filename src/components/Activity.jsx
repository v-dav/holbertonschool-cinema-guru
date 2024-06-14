import React from 'react'
import './components.css'

const Activity = ({ username, movieTitle, date, id, activityType }) => {
	return (
		<li id={id}>
			<p>
				<span>{username} </span>
				<span>added </span>
				<span>{movieTitle} </span>
				<span>to { activityType } - </span>
				<span>{date}</span>
			</p>
		</li>
	)
}

export default Activity
