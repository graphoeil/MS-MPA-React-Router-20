// Imports
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Component
const Products = () => {

	// Imperative navigation, replace useHistory
	const [time, setTime] = useState(5);
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			// Redirect, or navigate(-1) for previous etc...
			navigate('/',{ replace:true });
		},5000);
		const timer = setInterval(() => {
			setTime((oldState) => {
				return oldState - 1;
			})
		},1000);
		return () => {
			clearInterval(timer);
		}
	},[navigate]);

	// Return
	return(
		<section>
			<h1>The Products Page</h1>
			<h2>Redirect to Welcome page in { time }s</h2>
			<ul style={ { listStyleType:'none' } }>
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