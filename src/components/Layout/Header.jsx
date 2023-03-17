const Header = (props) => {
	return (
		<nav className="flex justify-between bg-white py-7 px-4 pc:px-12 pc:py-5 drop-shadow-sm">
			<h1 className="pc:text-xl font-extrabold">Where in the world?</h1>
			<button className="font-semibold">
				<i className="fa-regular fa-moon pr-2"></i>Dark mode
			</button>
		</nav>
	);
};

export default Header;
