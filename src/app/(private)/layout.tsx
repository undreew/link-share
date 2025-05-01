import React from "react";

import { Tabs } from "@/components/ui/tabs";
import { PageHeader } from "@/components/page";

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<Tabs defaultValue="links">
			<div className="grid grid-rows-[auto_1fr] h-screen p-5 gap-4 overflow-auto">
				<PageHeader isAuth />
				{children}
			</div>
		</Tabs>
	);
};

export default Layout;
