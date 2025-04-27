import { PageHeader } from "@/components/page";
import React from "react";

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div className="flex flex-col h-full min-h-screen gap-5 bg-gray-light p-5">
			<PageHeader isAuth />
			{children}
		</div>
	);
};

export default Layout;
