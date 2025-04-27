"use client";

import React from "react";

import { Link, UserPen } from "lucide-react";

import { Logo } from "../logo";
import { Button } from "../ui/button";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { cn } from "@/lib/utils";

interface Props {
	isAuth?: boolean;
	className?: string;
}

const PageHeader: React.FC<Props> = (props) => {
	const { className, isAuth } = props;

	return (
		<header className={cn("p-5 bg-white shadow-sm rounded-sm", className)}>
			<nav className="flex justify-between items-center">
				<Logo link />

				{isAuth && (
					<>
						<Tabs defaultValue="account">
							<TabsList className="grid w-full grid-cols-2 bg-white">
								<TabsTrigger
									value="account"
									className="data-[state=active]:bg-purple-light data-[state=active]:text-purple-main cursor-pointer hover:text-purple-main"
								>
									<Link />
									Links
								</TabsTrigger>
								<TabsTrigger
									value="password"
									className=" data-[state=active]:bg-purple-light data-[state=active]:text-purple-main cursor-pointer hover:text-purple-main"
								>
									<UserPen />
									Profile Details
								</TabsTrigger>
							</TabsList>
						</Tabs>
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
