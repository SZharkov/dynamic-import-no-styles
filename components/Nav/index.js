import React from "react";
import Link from "next/link";

const Nav = () => {
	return (
		<ul>
			<li>
				<Link href="/">
					<a>Homepage</a>
				</Link>
				<Link href="/page1">
					<a>Page 1</a>
				</Link>
				<Link href="/page2">
					<a>Page 2</a>
				</Link>
			</li>
		</ul>
	);
};

export default Nav;
