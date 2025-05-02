"use client";

import React from "react";
import { Eye, Link, UserPen } from "lucide-react";

import NextLink from "next/link";
import { useRouter } from "next/navigation";

import { Logo } from "../logo";
import { Button } from "../ui/button";
import { TabsList, TabsTrigger } from "../ui/tabs";

import { cn } from "@/lib/utils";

interface Props {
	logo?: boolean;
	isAuth?: boolean;
	className?: string;
	children?: React.ReactNode;
}

const NAVS = [
	{
		icon: Link,
		label: "Links",
		value: "links",
	},
	{
		icon: UserPen,
		value: "profile",
		label: "Profile Details",
	},
];

const PageHeader: React.FC<Props> = (props) => {
	const { className, isAuth, children, logo = true } = props;

	const router = useRouter();

	function handleRedirect() {
		router.push("/preview");
	}

	return (
		<header className={cn("p-5 bg-white shadow-sm rounded-sm", className)}>
			<nav className="flex justify-between items-center">
				{logo && <Logo link />}

				{isAuth && (
					<>
						<TabsList className="w-fit grid grid-cols-2 gap-2 bg-white">
							{NAVS.map((nav, index) => {
								const { icon, label, value } = nav;
								const Icon = icon;
								return (
									<TabsTrigger
										key={index}
										value={value}
										className="data-[state=active]:bg-purple-light data-[state=active]:text-purple-main cursor-pointer hover:text-purple-main p-0"
									>
										<NextLink
											href={{ pathname: value }}
											className="flex items-center justify-center size-full px-4 sm:px-5 gap-1"
										>
											<Icon className="size-5" />
											<span className="max-md:hidden">{label}</span>
										</NextLink>
									</TabsTrigger>
								);
							})}
						</TabsList>

						<div>
							<Button variant="ls-secondary" size="lg" onClick={handleRedirect}>
								<Eye className="block sm:hidden" />
								<span className="hidden sm:block">Preview</span>
							</Button>
						</div>
					</>
				)}

				{children}
			</nav>
		</header>
	);
};

export default PageHeader;
