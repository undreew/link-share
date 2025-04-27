import React from "react";

interface Props {
	children: React.ReactNode;
}

const Page: React.FC<Props> = (props) => {
	const { children } = props;
	return (
		<div>
			<main>{children}</main>
		</div>
	);
};

export default Page;
