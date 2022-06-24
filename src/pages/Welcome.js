// Imports
import React from "react";
import { Route } from "react-router-dom";

// Component
const Welcome = () => {

	// Return
	return(
		<section>
			<h1>The Welcome Page</h1>
			{/* Nested route */}
			<Route path="/welcome/new-user">
				<p>Welcome new user !</p>
			</Route>
			{/* Nested route */}
		</section>
	);

};

// Export
export default Welcome;