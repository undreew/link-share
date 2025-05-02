import React from "react";
import { Logo } from "@/components/logo";
import { PageHeader } from "@/components/page";

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<PageHeader
				className="block sm:hidden shadow-none bg-gray-light max-w-md mx-auto"
				isAuth={false}
			/>
			<div className="max-sm:mt-25 sm:min-h-screen flex justify-center items-center">
				<div className="w-md md:w-lg max-sm:px-5">
					<div className="hidden sm:flex justify-center mb-5 ">
						<Logo link />
					</div>
					{children}
				</div>
			</div>
		</>
	);
};

export default Layout;
