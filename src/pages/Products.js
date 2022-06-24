// Imports
import React from "react";
import { Link } from "react-router-dom";

// Component
const Products = () => {

	// Return
	return(
		<section>
			<h1>The Products Page</h1>
			<ul>
				<li><Link to="/products/cahouet">Cahouet</Link></li>
				<li><Link to="/products/jambon">Jambon</Link></li>
				<li><Link to="/products/pataud">Pataud</Link></li>
				<li><Link to="/products/mushi">Mushi</Link></li>
			</ul>
		</section>
	);

};

// Export
export default Products;