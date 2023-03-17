const Button = (props) => {
	return (
		<button
			type={props.type || "button"}
			onClick={props.onClick}
			className={` ${props.className}`}
			disabled={props.disabled}>
			{props.children}
		</button>
	);
};

export default Button;
