import React, { useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import Input from "./components/general/Input";

library.add(faUser)


function App() {
	const [inputValue, setInputValue] = useState("");
	return (
		<div className="App">
			<Input
				label={"Username:"}
				type={"text"}
				className={"general-input"}
				value={inputValue}
				setValue={setInputValue}
				icon={"fa-solid fa-user"}
				inputAttributes={{ id: "general-input", name: "general-input"}}
			></Input>
		</div>
	);
}

export default App;
