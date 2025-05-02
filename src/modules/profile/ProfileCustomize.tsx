"use client";

import React from "react";

import { cn } from "@/lib/utils";

import { Form } from "@/components/form";
import { Button } from "@/components/ui/button";

import useCustomizeProfile from "./useCustomizeProfile";

import ProfileDetails from "./ProfileDetails";
import ProfilePicture from "./ProfilePicture";

export const ProfileCustomizeCard = (props: {
	className?: string;
	children: React.ReactNode;
}) => {
	const { children, className } = props;
	return (
		<div
			className={cn(
				"bg-gray-light h-fit p-5 flex justify-between items-center rounded-2xl",
				className
			)}
		>
			{children}
		</div>
	);
};

const ProfileCustomize = () => {
	const { formValues, onSubmit } = useCustomizeProfile();

	return (
		<div className="page-card flex flex-col h-full">
			<Form
				onSubmit={onSubmit}
				formValues={formValues}
				className="h-full flex flex-col"
			>
				<div className="flex flex-col gap-5 h-full p-10">
					<div>
						<h1 className="heading-md">Profile Details</h1>
						<p className="body-md">
							Add your details to create a personal touch to your profile.
						</p>
					</div>
					<ProfilePicture />
					<ProfileDetails />
				</div>

				<>
					<hr className="border-t mt-10" />
					<div className="py-5 px-10">
						<div className="flex justify-end">
							<Button variant="ls-primary" type="submit">
								Save
							</Button>
						</div>
					</div>
				</>
			</Form>
		</div>
	);
};

export default ProfileCustomize;
