import Filter from "./Filter";
import Input from "./Input";

const Form = (props) => {
	return (
		<div className="pc:flex pc:justify-between pc:my-5 pc:pb-5">
			<Input />
			<Filter />
		</div>
	);
};

export default Form;
