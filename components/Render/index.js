import React from "react";
import dynamic from "next/dynamic";

const components = {
	"Comp1": dynamic(() => import("../Comp1")),
	"Comp2": dynamic(() => import("../Comp2")),
	"Comp3": dynamic(() => import("../Comp3"))
};

const Render = ({ section }) => {
	const Component = components[section];
	return (
		<Component />
	);
};

export default Render;
