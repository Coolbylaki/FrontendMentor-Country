import { useState, useEffect } from "react";
import Header from "./Layout/Header";

const CountryDetails = () => {
	const [theme, setTheme] = useState("light");

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
		<>
			<Header onChangeTheme={themeSwitchHandler} themeChoice={theme} />
			<h1>Testing!!!</h1>
		</>
	);
};

export default CountryDetails;
