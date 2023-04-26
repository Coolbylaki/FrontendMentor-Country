import { useParams, Link } from "react-router-dom";
import countryData from "../assets/data.json";
import Button from "./UI/Button";

const CountryDetails = () => {
	const params = useParams();

	const targetCountry = countryData.find((country) => country.name === params.countryId);
	let formatLang = "";
	if (targetCountry.languages) {
		for (let i = 0; i < targetCountry.languages.length; i++) {
			formatLang += targetCountry.languages[i].name;
			if (i !== targetCountry.languages.length - 1) {
				formatLang += ", ";
			}
		}
	}

	return (
		<main className="dark:bg-VDBlueDark min-h-screen p-7">
			<Button className="dark:bg-DBlueDark dark:text-white py-1 px-7 mt-2 bg-white shadow-md rounded-sm">
				<i className="fa-solid fa-arrow-left mr-3"></i>
				<Link to="..">Back</Link>
			</Button>
			<section>
				<img
					src={`${targetCountry.flags.svg}`}
					alt={`${targetCountry.name} flag`}
					className="rounded-sm mt-10 w-full h-[250px] shadow-md"
				/>
				<div className="dark:text-white">
					<h1 className="mt-7 mb-4 text-xl font-bold">{targetCountry.name ? targetCountry.name : ""}</h1>
					<p className="text-sm leading-loose">
						<span className="font-semibold">Native Name:</span>{" "}
						{targetCountry.nativeName ? targetCountry.nativeName : ""}
					</p>
					<p className="text-sm leading-loose">
						<span className="font-semibold">Population:</span>{" "}
						{targetCountry.population ? targetCountry.population.toLocaleString() : ""}
					</p>
					<p className="text-sm leading-loose">
						<span className="font-semibold">Region:</span> {targetCountry.region ? targetCountry.region : ""}
					</p>
					<p className="text-sm leading-loose">
						<span className="font-semibold">Sub Region:</span> {targetCountry.subregion ? targetCountry.subregion : ""}
					</p>
					<p className="text-sm leading-loose mb-8">
						<span className="font-semibold">Capital:</span> {targetCountry.capital ? targetCountry.capital : ""}
					</p>
					<p className="text-sm leading-loose">
						<span className="font-semibold">Top Level Domain:</span>{" "}
						{targetCountry.topLevelDomain ? targetCountry.topLevelDomain : ""}
					</p>
					<p className="text-sm leading-loose">
						<span className="font-semibold">Currency:</span>{" "}
						{targetCountry.currencies[0].name ? targetCountry.currencies[0].name : ""}
					</p>
					<p className="text-sm leading-loose">
						<span className="font-semibold">Languages:</span> {formatLang}
					</p>
				</div>
			</section>
		</main>
	);
};

export default CountryDetails;
