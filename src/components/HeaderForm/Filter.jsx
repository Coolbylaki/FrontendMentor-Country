const Filter = (props) => {
	return (
		<select defaultValue="Filter" className="rounded py-3 pl-6 pr-12 my-6 ml-6 shadow-md pc:mr-10 pc:pr-16">
			<option disabled value="Filter">
				Filter by Region
			</option>
			<option value="Africa">Africa</option>
			<option value="America">America</option>
			<option value="Asia">Asia</option>
			<option value="Europe">Europe</option>
			<option value="Oceania">Oceania</option>
		</select>
	);
};

export default Filter;
