import React from "react";
import { useFormContext } from "react-hook-form";

import { ProfilePayload } from "@/types/payload";

import { InputImage } from "@/components/input";
import {
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { ProfileCustomizeCard } from "./ProfileCustomize";

const ProfilePicture = () => {
	const { control } = useFormContext<ProfilePayload>();

	return (
		<ProfileCustomizeCard className="grid grid-cols-1 lg:grid-cols-3 gap-5">
			<div className="col-span-1">
				<p className="body-md">Profile Picture</p>
			</div>

			<div className="lg:col-span-2">
				{/* <div className="flex flex-col xl:flex-row lg:items-center gap-2"> */}
				<FormField
					control={control}
					name="profile_picture"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<InputImage {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* </div> */}
			</div>
		</ProfileCustomizeCard>
	);
};

export default ProfilePicture;
