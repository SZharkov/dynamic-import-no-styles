import React from "react";
import Nav from "../Nav";
import Comp3 from "../Comp3";
import Render from "../Render";

const Layout = ({ title, sections }) => {
	return (
		<>
			<Nav />
			<main>
				{sections.map((el, index) => <Render section={el} key={index} />)}
				<Comp3 />
			</main>
		</>
	);
};

export default Layout;
