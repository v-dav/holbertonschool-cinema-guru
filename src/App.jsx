import React, { useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Input from "./components/general/Input";
import SelectInput from "./components/general/SelectInput";

library.add(faUser)


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
		</div>
	);
}

export default App;
