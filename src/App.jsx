import { Fragment, useState, useEffect } from "react";

import Header from "./components/Layout/Header";
import Form from "./components/HeaderForm/Form";

function App() {
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark");
		}
	}, []);

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	const themeSwitchHandler = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<Fragment>
			<Header onChangeTheme={themeSwitchHandler} />
			<Form />
		</Fragment>
	);
}

export default App;
