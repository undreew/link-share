"use client";

import React from "react";
import { Logo } from "@/components/logo";
import { PageHeader } from "@/components/page";
import { GuestRoute } from "@/components/routes";

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<GuestRoute>
			<PageHeader className="block sm:hidden shadow-none bg-gray-light max-w-md mx-auto" />
			<div className="max-sm:mt-25 sm:min-h-screen flex justify-center items-center">
				<div className="w-md md:w-lg max-sm:px-5">
					<div className="hidden sm:flex justify-center mb-5 ">
						<Logo link />
					</div>
					{children}
				</div>
			</div>
		</GuestRoute>
	);
};

export default Layout;
