import { Lock, Mail } from "lucide-react";
import { useFormContext } from "react-hook-form";

import { RegisterPayload } from "@/types/payload";

import { Input } from "@/components/input";
import { Label } from "@/components/ui/label";
import { FormItem, FormField } from "@/components/ui/form";
import { FormMessage, FormControl } from "@/components/ui/form";
import { FC } from "react";

interface Props {
	isMobile?: boolean;
	isLoading: boolean;
}

const RegisterFormFields: FC<Props> = (props) => {
	const { isMobile, isLoading } = props;
	const { control } = useFormContext<RegisterPayload>();

	function generateId(id: string) {
		return `${id}${isMobile ? "-mobile" : ""}`;
	}

	return (
		<div className="flex flex-col gap-5">
			<FormField
				name="email"
				control={control}
				render={({ field }) => (
					<FormItem>
						<Label htmlFor={generateId("email")}>Email</Label>
						<FormControl>
							<Input
								{...field}
								id={generateId("email")}
								icon={<Mail size={12} />}
								placeholder="e.g. alex@email.com"
								disabled={field.disabled || isLoading}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				name="create_password"
				control={control}
				render={({ field }) => (
					<FormItem>
						<Label htmlFor={generateId("create_password")}>
							Create Password
						</Label>
						<FormControl>
							<Input
								{...field}
								type="password"
								icon={<Lock size={12} />}
								id={generateId("create_password")}
								placeholder="At least 8 characters"
								disabled={field.disabled || isLoading}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				name="password"
				control={control}
				render={({ field }) => (
					<FormItem>
						<Label htmlFor={generateId("password")}>Confirm Password</Label>
						<FormControl>
							<Input
								{...field}
								type="password"
								icon={<Lock size={12} />}
								id={generateId("password")}
								placeholder="At least 8 characters"
								disabled={field.disabled || isLoading}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		</div>
	);
};

export default RegisterFormFields;
