import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CountryLayout from "./components/CountryLayout";
import CountryDetails from "./components/CountryDetails";

const router = createBrowserRouter([
	{
		path: "/",
		element: <CountryLayout />,
	},
	{
		path: ":countryId",
		element: <CountryDetails />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
