import React from "react";
import Layout from "../components/Layout";

const Page = ({ sections }) => {
	return (
		<div>
			<Layout sections={sections} />
		</div>
	);
};

export async function getStaticPaths () {
	return {
		paths: [
			{ params: { page: "page1" } },
			{ params: { page: "page2" } }
		],
		fallback: false,
	};
}

// This also gets called at build time
export async function getStaticProps({ params }) {
	return {
		props: { title: params.page, sections: ["Comp1", "Comp2"] }
	};
}

export default Page;
