import { Fragment, useState, useEffect } from "react";
import countryData from "./assets/data.json";

import Header from "./components/Layout/Header";
import Form from "./components/HeaderForm/Form";
import CountryCard from "./components/CountryCard";

function App() {
	const [theme, setTheme] = useState("light");
	const [countries, setCountries] = useState(countryData);

	useEffect(() => {
		const wrapper = document.getElementById("wrapper");
		if (countries.length <= 4) {
			wrapper.classList.add("h-screen");
		} else {
			wrapper.classList.remove("h-screen");
		}
	}, [countries]);

	const countryCards = countries.map((country) => {
		return (
			<CountryCard
				key={country.alpha2Code}
				flag={country.flags.png}
				name={country.name}
				population={country.population}
				region={country.region}
				capital={country.capital}
			/>
		);
	});

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
			<Header onChangeTheme={themeSwitchHandler} themeChoice={theme} />
			<Form filterCountries={setCountries} />
			<main className="grid grid-cols-1 place-items-center pc:grid-cols-4">{countryCards}</main>
		</Fragment>
	);
}

export default App;
