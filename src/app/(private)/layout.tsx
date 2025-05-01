import React from "react";
import { PageHeader } from "@/components/page";
import LinksMockup from "@/modules/links/LinksMockup";

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div className="grid grid-rows-[auto_1fr] h-screen p-5 gap-4 overflow-auto">
			<PageHeader isAuth />

			<main className="page-container">
				<div className="page-card hidden md:block">
					<LinksMockup />
				</div>
				{children}
			</main>
		</div>
	);
};

export default Layout;
