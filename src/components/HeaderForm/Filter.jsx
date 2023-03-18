import countryData from "../../assets/data.json";

const Filter = (props) => {
	const onClickHandler = (e) => {
		const choice = e.target.value;
		props.onFilter(countryData.filter((country) => country.region === choice));
	};

	return (
		<select
			defaultValue="Filter"
			className="rounded py-3 pl-6 pr-10 my-6 ml-6 shadow-md pc:mr-10 pc:pr-16 pc:p-5 dark:bg-DBlueDark dark:text-white"
			onChange={onClickHandler}>
			<option value="Filter" disabled>
				Filter by Region
			</option>
			<option value="Africa">Africa</option>
			<option value="Americas">America</option>
			<option value="Asia">Asia</option>
			<option value="Europe">Europe</option>
			<option value="Oceania">Oceania</option>
		</select>
	);
};

export default Filter;
