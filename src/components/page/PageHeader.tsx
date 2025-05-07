"use client";

import React from "react";

import { Logo } from "../logo";

import { cn } from "@/lib/utils";
import PageHeaderPrivate from "./PageHeaderPrivate";
interface Props {
	logo?: boolean;
	hasNav?: boolean;
	className?: string;
	children?: React.ReactNode;
}

const PageHeader: React.FC<Props> = (props) => {
	const { className, children, logo = true, hasNav = true } = props;

	return (
		<header className={cn("p-5 bg-white shadow-sm rounded-sm", className)}>
			<nav className="flex justify-between items-center">
				{logo && <Logo link />}

				{hasNav && <PageHeaderPrivate />}

				{children}
			</nav>
		</header>
	);
};

export default PageHeader;
