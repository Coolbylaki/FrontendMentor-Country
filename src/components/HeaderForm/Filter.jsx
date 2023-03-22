import { useState } from "react";
import countryData from "../../assets/data.json";

const Filter = (props) => {
	const [filter, setFilter] = useState(false);

	const onClickHandler = (e) => {
		const choice = e.target.value;

		if (choice === "World") {
			props.filterCountry(countryData.filter((country) => country));
		} else {
			props.filterCountry(countryData.filter((country) => country.region === choice));
		}

		setFilter(true);
		props.onCountryChange(choice);
	};

	return (
		<select
			defaultValue="World"
			className="rounded py-3 pl-6 pr-10 my-6 ml-6 shadow-md pc:mr-10 pc:pr-16 pc:p-5 dark:bg-DBlueDark dark:text-white"
			onChange={onClickHandler}>
			<option value="World">{filter ? "Whole World" : "Filter by Region"}</option>
			<option value="Africa">Africa</option>
			<option value="Americas">America</option>
			<option value="Asia">Asia</option>
			<option value="Europe">Europe</option>
			<option value="Oceania">Oceania</option>
		</select>
	);
};

export default Filter;
