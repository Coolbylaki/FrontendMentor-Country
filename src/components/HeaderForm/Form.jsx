import { useState } from "react";

import Filter from "./Filter";
import Input from "./Input";

const Form = (props) => {
	const [selection, setSelection] = useState("Filter");

	return (
		<div className="pc:flex pc:justify-between pc:my-5 pc:pb-5">
			<Input countrySelection={selection} searchCountry={props.filterCountries} />
			<Filter onCountryChange={setSelection} filterCountry={props.filterCountries} />
		</div>
	);
};

export default Form;
