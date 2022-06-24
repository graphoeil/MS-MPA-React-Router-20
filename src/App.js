// Imports
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

// Component
function App(){

	// Return
	return(
		<Router>
			<MainHeader/>
			<main>
				<Switch>

					{/* Home => redirect to Welcome */}
					<Route path="/" exact>
						<Redirect to="/welcome"/>
					</Route>
					{/* Home */}

					{/* Welcome */}
					<Route path="/welcome">
						<Welcome/>
					</Route>
					{/* Welcome */}

					{/* Products, exact because /:productId, 
					then Products component won't be render 
					in ProductDetail ,-) */}
					<Route path="/products" exact>
						<Products/>
					</Route>
					<Route path="/products/:productId">
						<ProductDetail/>
					</Route>
					{/* Products */}
					
				</Switch>
			</main>
		</Router>
	);

};

// Export
export default App;