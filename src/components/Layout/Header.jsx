import Button from "../UI/Button";

const Header = (props) => {
	const btnIcon =
		props.themeChoice === "dark" ? (
			<i className="fa-regular fa-sun pr-2"></i>
		) : (
			<i className="fa-regular fa-moon pr-2"></i>
		);

	return (
		<nav className="flex justify-between bg-white py-7 px-6 pc:px-12 pc:py-5 drop-shadow-sm">
			<h1 className="pc:text-xl font-extrabold">Where in the world?</h1>
			<Button className="font-semibold pc:hover:text-blue-900" onClick={props.onChangeTheme}>
				{btnIcon}
				{props.themeChoice === "dark" ? "Light mode" : "Dark mode"}
			</Button>
		</nav>
	);
};

export default Header;
