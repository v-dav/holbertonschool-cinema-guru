import React, { useEffect, useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faKey, faPlus, faSearch, faSpinner, faUser } from '@fortawesome/free-solid-svg-icons';
import Input from "./components/general/Input";
import SelectInput from "./components/general/SelectInput";
import Button from "./components/general/Button";
import SearchBar from "./components/general/SearchBar";
import axios from "axios";
import './App.css';
import Authentication from "./routes/auth/Authentication";

library.add(faUser, faSpinner, faSearch, faKey, faPlus)


function App() {
	const selectOptions = [
		"Default",
		"Latest",
		"Oldest",
		"Highest Rated",
		"Lowest Rated"
	];

	const [inputValue, setInputValue] = useState("");
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

	const handleLogout = () => {
		localStorage.removeItem('accessToken');
		setIsLoggedIn(false);
		setUserUsername("");
	}

	if (isLoggedIn) {
		return (
			<div className="App">
				<h1>Hello {userUsername}</h1>
				<Input
					label={"Username:"}
					type={"text"}
					className={"general-input"}
					value={inputValue}
					setValue={setInputValue}
					icon={"fa-solid fa-user"}
					inputAttributes={{ id: "general-input", name: "general-input" }}
				></Input>
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

				<Button
					label={"Log Out"}
					className={"button"}
					onClick={handleLogout}
				// icon={"fa-solid fa-spinner"}
				></Button>
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
