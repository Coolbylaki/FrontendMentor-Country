import Button from "../UI/Button";

const Header = (props) => {
	const btnIcon =
		props.themeChoice === "dark" ? (
			<i className="fa-regular fa-moon pr-2 dark:text-white"></i>
		) : (
			<i className="fa-regular fa-sun pr-2 dark:text-white"></i>
		);

	return (
		<nav className="flex justify-between bg-white py-7 px-6 pc:px-12 pc:py-5 drop-shadow-sm dark:bg-DBlueDark">
			<h1 className="pc:text-xl font-extrabold dark:text-white">Where in the world?</h1>
			<Button className="font-semibold pc:hover:text-blue-900 dark:text-white" onClick={props.onChangeTheme}>
				{btnIcon}
				{props.themeChoice === "dark" ? "Dark mode" : "Light mode"}
			</Button>
		</nav>
	);
};

export default Header;
