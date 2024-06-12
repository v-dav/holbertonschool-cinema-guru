import React, { useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faSpinner, faUser } from '@fortawesome/free-solid-svg-icons';
import Input from "./components/general/Input";
import SelectInput from "./components/general/SelectInput";
import Button from "./components/general/Button";
import SearchBar from "./components/general/SearchBar";

library.add(faUser, faSpinner, faSearch)


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

	const handleButtonClick = () => {
		alert("Button Clicked");
	}

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
}

export default App;
