import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CountryLayout from "./components/CountryLayout";
import CountryDetails from "./components/CountryDetails";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <CountryLayout />,
			},
			{
				path: ":countryId",
				element: <CountryDetails />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
