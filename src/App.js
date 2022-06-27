// Imports
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

/* In v6 no more exact props, react router examines the route 
that best matching the current url. */

// Component
function App(){

	// Return
	return(
		<Router>
			<MainHeader/>
			<main>
				{/* v6 Switch becomes Routes */}
				<Routes>

					{/* Home */}
					{/* In v6, Redirect becomes Navigate, by default Navigate 
					push the new route, if we want to replace we need to add 
					replace props. */}
					<Route path="/" element={ <Navigate replace to="/welcome"/> }/>
					{/* Home */}

					{/* Welcome, we must add * if we use nested route */}
					<Route path="/welcome/*" element={ <Welcome/> }>
						{/* Nested route, path becomes relative to their parent => no more /welcome/new-user */}
						{/* Then no need to use useRouteMatch for dynamic route in nested routes ,-) */}
						{/* We must indicate in the Welcome component where to display these elements => <Outlet/> */}
						<Route path="" element={ <p>Welcome root !</p> }/>
						<Route path="new-user" element={ <p>Welcome new user !</p> }/>
						<Route path="*" element={ <NotFound/> }/>
						{/* Nested route */}
					</Route>
					{/* Welcome */}

					{/* Products */}
					<Route path="/products" element={ <Products/> }/>
					<Route path="/products/:productId" element={ <ProductDetail/> }/>
					{/* Products */}

					{/* 404 */}
					<Route path="*" element={ <NotFound/> }/>
					{/* 404 */}
					
				</Routes>
			</main>
		</Router>
	);

};

// Export
export default App;