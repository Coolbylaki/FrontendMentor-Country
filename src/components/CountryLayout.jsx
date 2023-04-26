import { useState } from "react";
import countryData from "../assets/data.json";
import Form from "./HeaderForm/Form";
import CountryCard from "./CountryCard";

const CountryLayout = () => {
	const [countries, setCountries] = useState(countryData);

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

	return (
		<div id="wrapper" className="dark:bg-VDBlueDark min-h-screen pt-6">
			<Form filterCountries={setCountries} />
			<main className="grid grid-cols-1 place-items-center pc:grid-cols-4">{countryCards}</main>
		</div>
	);
};
export default CountryLayout;
