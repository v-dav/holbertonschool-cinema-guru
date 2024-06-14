import React, { useEffect, useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock, faFolder, faKey, faPlus, faRightFromBracket, faSearch, faSpinner, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import SelectInput from "./components/general/SelectInput";
import Button from "./components/general/Button";
import SearchBar from "./components/general/SearchBar";
import axios from "axios";
import './App.css';
import Authentication from "./routes/auth/Authentication";
import Dashboard from "./routes/dashboard/Dashboard";


library.add(
	faUser,
	faSpinner,
	faSearch, faKey,
	faPlus,
	faRightFromBracket,
	faFolder,
	faStar,
	faClock)


function App() {
	const selectOptions = [
		"Default",
		"Latest",
		"Oldest",
		"Highest Rated",
		"Lowest Rated"
	];

	const [selectInputValue, setSelectInputValue] = useState(selectOptions[0]);
	const [title, setTitle] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userUsername, setUserUsername] = useState("");

	useEffect(() => {
		const accessToken = localStorage.getItem('accessToken');
		if (accessToken) {
			axios.post('http://localhost:8000/api/auth', {}, {
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${accessToken}`
				}
			})
				.then(response => {
					setIsLoggedIn(true);
					setUserUsername(response.data.username);
				})
				.catch(error => {
					alert(error);
				})
		}
	}, []);


	const handleButtonClick = () => {
		alert("Button Clicked");
	}

	if (isLoggedIn) {
		return (
			<div className="App">
				<Dashboard userUsername={userUsername} setIsLoggedIn={setIsLoggedIn}></Dashboard>
				<SelectInput
					label={"Sort:"}
					options={selectOptions}
					className={"select-input"}
					value={selectInputValue}
					setValue={setSelectInputValue}
				>

				</SelectInput>
				<Button
					label={"Load More..."}
					className={"button"}
					onClick={handleButtonClick}
				// icon={"fa-solid fa-spinner"}
				></Button>

				<SearchBar
					title={title}
					setTitle={setTitle}
					icon={faSearch}
				></SearchBar>
			</div>
		);
	} else {
		return (
			<Authentication
				setIsLoggedIn={setIsLoggedIn}
				setUserUsername={setUserUsername}
			></Authentication>
		)
	}
}

export default App;
