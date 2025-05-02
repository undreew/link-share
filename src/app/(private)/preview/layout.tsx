"use client";

import React from "react";
import { PageHeader } from "@/components/page";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	const router = useRouter();

	function handleBack() {
		router.push("/links");
	}

	return (
		<div className="p-5 overflow-auto h-screen">
			<PageHeader logo={false}>
				<div className="flex justify-between w-full">
					<Button variant="ls-secondary" onClick={handleBack}>
						Back to Editor
					</Button>
					<Button variant="ls-primary">Share Link</Button>
				</div>
			</PageHeader>
			<div className="bg-purple-main absolute top-0 left-0 w-full h-[350px] rounded-b-[35px] -z-10" />
			{children}
		</div>
	);
};

export default Layout;
