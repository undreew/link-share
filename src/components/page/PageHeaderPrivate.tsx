import React from "react";
import { Eye, Link, UserPen } from "lucide-react";

import NextLink from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "../ui/button";
import { TabsList, TabsTrigger } from "../ui/tabs";

import { useAuth } from "@/contexts/AuthProvider";

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

const PageHeaderPrivate = () => {
	const router = useRouter();
	const { isAuth } = useAuth();

	function handleRedirect() {
		router.push("/preview");
	}

	if (!isAuth) return;

	return (
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
	);
};

export default PageHeaderPrivate;
