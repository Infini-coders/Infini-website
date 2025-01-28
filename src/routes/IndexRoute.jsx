import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import NotFound from "../pages/Notfound"
import Details from "../components/basic/Details/Details";
const IndexRoute = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			{/* <Route path="/details" element={<Details/>}/> */}
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}

export default IndexRoute;
