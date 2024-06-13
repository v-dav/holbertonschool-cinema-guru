import React, { useEffect, useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faKey, faSearch, faSpinner, faUser } from '@fortawesome/free-solid-svg-icons';
import Input from "./components/general/Input";
import SelectInput from "./components/general/SelectInput";
import Button from "./components/general/Button";
import SearchBar from "./components/general/SearchBar";
import axios from "axios";
import './App.css';
import Authentication from "./routes/auth/Authentication";

library.add(faUser, faSpinner, faSearch, faKey)


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
			axios.post('/api/auth', {}, {
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${accessToken}`
				}
			})
				.then(response => {
					setIsLoggedIn(true);
					setUserUsername(response.username);
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
			</div>
		);
	} else {
		return (
			<Authentication></Authentication>
		)
	}
}

export default App;
