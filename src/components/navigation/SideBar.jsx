import React, { useEffect, useState } from 'react'
import './navigation.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Activity from '../Activity';
import Button from '../general/Button';

const SideBar = () => {
	const [selected, setSelected] = useState('home');
	const [small, setSmall] = useState(true);
	const [activities, setActivities] = useState([]);
	const [showActivities, setShowActivities] = useState(false);

	const navigate = useNavigate();

	const setPage = (pageName) => {
		setSelected(pageName);
		navigate(`/${pageName}`);
	}

	useEffect(() => {
		const accessToken = localStorage.getItem('accessToken');
		axios.get('http://localhost:8000/api/activity/', {
			headers: {
				"Authorization": `Bearer ${accessToken}`,
				"Accept": "application/json",
				"Content-Type": "application/json"
			}
		})
			.then(response => setActivities(response.data))
			.catch(error => alert(error))
	}, [])

	return (
		<div className='sidebar'>
			<ul className='page-navigation'>
				<li className='linktopage'>
					<Button
						label={"Home"}
						className={" button linktopage-button"}
						onClick={() => setPage("home")}
						icon={"fa-solid fa-folder"}
					></Button>
				</li>
				<li className='linktopage'>
					<Button
						label={"Favorites"}
						className={"button linktopage-button"}
						onClick={() => setPage("favorites")}
						icon={"fa-solid fa-star"}
					></Button>
				</li>
				<li className='linktopage'>
					<Button
						label={"Watch Later"}
						className={"button linktopage-button"}
						onClick={() => setPage("watchlater")}
						icon={"fa-solid fa-clock"}
					></Button>
				</li>
			</ul>
			<ul className="activity-list">
				{activities.slice(0, 10).map(activity =>
					<Activity
						id={activity.id}
						username={activity.user.username}
						movieTitle={activity.title.title}
						activityType={activity.activityType}
						date={activity.createdAt}
					></Activity>
				)}
			</ul>
		</div>
	)
}

export default SideBar
