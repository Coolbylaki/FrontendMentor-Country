const CountryCard = (props) => {
	return (
		<div className="bg-white rounded shadow-md mx-14 mb-10 pc:mb-20 max-w-3xl dark:bg-DBlueDark dark:text-white">
			<img className="rounded-t" src="https://flagcdn.com/al.svg" alt="country flag" />
			<section className="p-6 pb-8 rounded">
				<h2 className="font-bold pb-3">Albania</h2>
				<p className="text-sm leading-relaxed">
					<span className="font-semibold">Population:</span> 2,886,026
				</p>
				<p className="text-sm leading-relaxed">
					<span className="font-semibold">Region:</span> Europe
				</p>
				<p className="text-sm leading-relaxed">
					<span className="font-semibold">Capita:</span> Tirana
				</p>
			</section>
		</div>
	);
};

export default CountryCard;
