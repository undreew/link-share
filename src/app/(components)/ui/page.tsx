import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Apple, Link, Linkedin, Youtube } from "lucide-react";
import React from "react";

const Page = () => {
	const error = {
		name: "This input is required.",
	};
	return (
		<div className="pl-2">
			<h1 className="heading-md">Instrument Sans</h1>
			<h2 className="heading-sm">This is heading sm</h2>
			<p className="body-md">This is body md</p>
			<p className="body-sm">This is body sm</p>

			{/* PRIMARY BUTTONS */}
			<div className="flex gap-5">
				<Button className="mt-5 cursor-pointer" variant="ls-primary">
					This is a default primary button
				</Button>

				<Button className="mt-5 cursor-pointer" variant="ls-primary">
					This is an active primary button
				</Button>

				<Button className="mt-5 cursor-pointer" variant="ls-primary" disabled>
					This is a disabled primary button
				</Button>
			</div>

			{/* SECONDARY BUTTONS */}
			<div className="flex gap-5">
				<Button className="mt-5 cursor-pointer" variant="ls-secondary">
					This is a default secondary button
				</Button>

				<Button className="mt-5 cursor-pointer" variant="ls-secondary">
					This is an active secondary button
				</Button>

				<Button className="mt-5 cursor-pointer" variant="ls-secondary" disabled>
					This is a disabled secondary button
				</Button>
			</div>

			{/* INPUTS */}
			<div className="max-w-sm mt-5">
				<p>This is a valid input</p>
				<div className="relative flex items-center gap-2">
					<Link size="12" className="text-gray-dark absolute left-4" />
					<Input
						className="hover:border-purple-main text-dark pl-9 shadow-purple-light transition-shadow hover:shadow-[0_0_10px_5px]"
						placeholder="Text Field Empty"
					/>
				</div>

				<p>This is an invalid input</p>
				<div className="relative flex items-center gap-2">
					<Link size="12" className="text-gray-dark absolute left-4" />
					<Input
						className={cn(
							"hover:border-purple-main text-dark pl-9 shadow-purple-light transition-shadow hover:shadow-[0_0_10px_5px]",
							`${
								error.name &&
								"border-red hover:border-red hover:shadow-none text-red"
							}`
						)}
						placeholder="Text Field Empty"
					/>
				</div>
				<small className="text-red body-sm">{error.name}</small>
			</div>

			{/* SELECTS */}
			<div className="mt-5">
				<div className="relative flex items-center">
					<Link size="12" className="text-gray-dark absolute left-4" />
					<Select name="country">
						<SelectTrigger className="w-[280px] pl-9 cursor-pointer">
							<SelectValue placeholder="Select a fruit" />
						</SelectTrigger>

						<SelectContent>
							<SelectGroup>
								<SelectItem value="apple" className="cursor-pointer">
									<Apple /> Apple
								</SelectItem>
								<SelectSeparator />
								<SelectItem
									value="youtube"
									className="cursor-pointer text-purple-main hover:text-purple-main"
								>
									<Youtube /> Banana
								</SelectItem>
								<SelectSeparator />
								<SelectItem value="linkedin" className="cursor-pointer">
									<Linkedin /> LinkedIn
								</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
			</div>

			{/* TABS */}
			<div className="mt-5 max-w-sm">
				<Tabs defaultValue="account">
					<TabsList className="grid w-full grid-cols-2 bg-white">
						<TabsTrigger
							value="account"
							className="data-[state=active]:bg-purple-light data-[state=active]:text-purple-main cursor-pointer hover:text-purple-main"
						>
							<Link />
							Account
						</TabsTrigger>
						<TabsTrigger
							value="password"
							className=" data-[state=active]:bg-purple-light data-[state=active]:text-purple-main cursor-pointer hover:text-purple-main"
						>
							<Link />
							Password
						</TabsTrigger>
					</TabsList>
				</Tabs>
			</div>

			{/* MOBILE MOCKUP */}

			{/*  */}
		</div>
	);
};

export default Page;
