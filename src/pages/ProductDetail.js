// Imports
import React from "react";
import { useParams } from "react-router-dom";

// Component
const ProductDetail = () => {

	// Get id from url
	const { productId } = useParams();

	// Return
	return(
		<section>
			<h1>Product detail</h1>
			<p>Product ID : { productId }</p>
		</section>
	);

};

// Export
export default ProductDetail;