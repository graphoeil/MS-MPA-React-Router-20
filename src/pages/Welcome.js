// Imports
import React from "react";
import { Outlet, Link } from "react-router-dom";

// Component
const Welcome = () => {

	// Return
	return(
		<section>
			<h1>The Welcome Page</h1>
			{/* Outlet, displaying nested routes */}
			<Outlet/>
			{/* Otulet */}
			{/* Links also need to be relative */}
			<Link to="new-user">Show user</Link>
		</section>
	);

};

// Export
export default Welcome;