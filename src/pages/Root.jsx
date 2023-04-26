import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Layout/Header";

const RootLayout = () => {
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
			<Outlet />
		</>
	);
};

export default RootLayout;
