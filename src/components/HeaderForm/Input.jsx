import countryData from "../../assets/data.json";

const Input = (props) => {
	const onFormChangeHandler = (e) => {
		const choice = e.target.value;
		const regex = new RegExp(`^${choice}.*`, "i");

		if (props.countrySelection === "World") {
			props.searchCountry(countryData.filter((country) => regex.test(country.name)));
		} else {
			props.searchCountry(
				countryData.filter((country) => regex.test(country.name) && props.countrySelection === country.region)
			);
		}
	};

	const onSubmitFormHandler = (e) => {
		e.preventDefault();
	};

	return (
		<form className="m-6 mb-3 relative pc:ml-12" onChange={onFormChangeHandler} onSubmit={onSubmitFormHandler}>
			<input
				type="text"
				className="p-5 shadow-md w-full rounded pl-20 pc:pr-60 dark:text-white dark:bg-DBlueDark dark:placeholder-white"
				placeholder="Search for a country..."
			/>
			<i className="fa-solid fa-magnifying-glass absolute left-8 top-6 dark:text-white"></i>
		</form>
	);
};

export default Input;
