"use client";

import React from "react";

import { Tabs } from "@/components/ui/tabs";
import { PageHeader } from "@/components/page";
import { usePathname } from "next/navigation";

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	const path = usePathname().replace(/^\/+/, "");

	return (
		<Tabs defaultValue={path}>
			<div className="grid grid-rows-[auto_1fr] h-screen p-5 gap-4 overflow-auto">
				<PageHeader />
				{children}
			</div>
		</Tabs>
	);
};

export default Layout;
