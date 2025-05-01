"use client";

import React from "react";

import { Link, UserPen } from "lucide-react";

import { Logo } from "../logo";
import { Button } from "../ui/button";
import { TabsList, TabsTrigger } from "../ui/tabs";

import { cn } from "@/lib/utils";

interface Props {
	isAuth?: boolean;
	className?: string;
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
	const { className, isAuth } = props;

	return (
		<header className={cn("p-5 bg-white shadow-sm rounded-sm", className)}>
			<nav className="flex justify-between items-center">
				<Logo link />

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
										className="data-[state=active]:bg-purple-light data-[state=active]:text-purple-main cursor-pointer hover:text-purple-main"
									>
										<Icon />
										{label}
									</TabsTrigger>
								);
							})}
						</TabsList>

						<div>
							<Button variant="ls-secondary" size="lg">
								Preview
							</Button>
						</div>
					</>
				)}
			</nav>
		</header>
	);
};

export default PageHeader;
