const Input = (props) => {
	return (
		<form className="m-6 relative">
			<input type="text" placeholder="Search for a country..." className="p-5 shadow-md w-full rounded pl-20" />
			<i className="fa-solid fa-magnifying-glass absolute left-8 top-6 "></i>
		</form>
	);
};

export default Input;
