import { useParams, Link } from "react-router-dom";
import countryData from "../assets/data.json";
import Button from "./UI/Button";

const CountryDetails = () => {
	const params = useParams();

	const targetCountry = countryData.find((country) => country.name === params.countryId);

	return (
		<main className="dark:bg-VDBlueDark min-h-screen p-7">
			<Button className="dark:bg-DBlueDark dark:text-white py-1 px-7 mt-2 bg-white shadow-md rounded-sm">
				<i class="fa-solid fa-arrow-left mr-3"></i>
				<Link to="..">Back</Link>
			</Button>
		</main>
	);
};

export default CountryDetails;
