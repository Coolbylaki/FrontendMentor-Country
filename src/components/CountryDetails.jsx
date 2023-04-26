import { useParams } from "react-router-dom";
import countryData from "../assets/data.json";

const CountryDetails = () => {
	const params = useParams();

	const targetCountry = countryData.find((country) => country.name === params.countryId);

	return <h1>Country name: {targetCountry.name}</h1>;
};

export default CountryDetails;
