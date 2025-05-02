import React from "react";
import { useFormContext } from "react-hook-form";

import { ProfilePayload } from "@/types/payload";

import { Input } from "@/components/input";
import { Label } from "@/components/ui/label";
import { FormField, FormItem } from "@/components/ui/form";
import { FormControl, FormMessage } from "@/components/ui/form";

import { ProfileCustomizeCard } from "./ProfileCustomize";

const INPUTS = [
	{
		name: "first_name",
		label: "First Name",
		placeholder: "e.g. John",
	},
	{
		name: "last_name",
		label: "Last Name",
		placeholder: "e.g. Appleseed",
	},
	{
		name: "email",
		label: "Email",
		placeholder: "e.g. email@example.com",
	},
];

const ProfileDetails = () => {
	const { control } = useFormContext<ProfilePayload>();

	return (
		<ProfileCustomizeCard className="flex flex-col gap-5">
			{INPUTS.map((input, index) => {
				const { name, placeholder, label } = input;
				const _name = name as keyof Omit<ProfilePayload, "profile_picture">;
				return (
					<FormField
						key={index}
						name={_name}
						control={control}
						render={({ field }) => (
							<FormItem className="grid-cols-1 lg:grid-cols-3 w-full">
								<Label
									htmlFor={_name}
									className="body-md font-normal text-[16px]"
								>
									{label}
								</Label>
								<div className="col-span-1 lg:col-span-2">
									<FormControl>
										<Input id={_name} placeholder={placeholder} {...field} />
									</FormControl>
									<FormMessage />
								</div>
							</FormItem>
						)}
					/>
				);
			})}
		</ProfileCustomizeCard>
	);
};

export default ProfileDetails;
