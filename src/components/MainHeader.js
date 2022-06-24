// Imports
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Component
const MainHeader = () => {

	// Return
	return(
		<Wrapper>
			<nav>
				<ul>
					{/* NavLink add .active class to the link matching current page */}
					<li><NavLink activeClassName="active" to="/welcome">Welcome</NavLink></li>
					<li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
				</ul>
			</nav>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.header`
	width: 100%;
	height: 5rem;
	background-color: #044599;
	padding: 0 10%;
	nav{
		height: 100%;
		ul{
			height: 100%;
			list-style: none;
			display: flex;
			padding: 0;
			margin: 0;
			align-items: center;
			justify-content: center;
			li{
				margin: 0 1rem;
				width: 5rem;
				a{
					color: white;
					text-decoration: none;
					transition: 0.35s all ease-in-out;
					&:hover, &:active, &.active{
						color: #95bcf0;
						padding-bottom: 0.25rem;
						border-bottom: 4px solid #95bcf0;
					}
				}
			}
		}
	}
`;

// Export
export default MainHeader;