import { FC } from "react";
import { Lock, Mail } from "lucide-react";
import { useFormContext } from "react-hook-form";

import { LoginPayload } from "@/types/payload";

import { Input } from "@/components/input";
import { Label } from "@/components/ui/label";
import { FormItem, FormField } from "@/components/ui/form";
import { FormMessage, FormControl } from "@/components/ui/form";

interface Props {
	isMobile?: boolean;
	isLoading: boolean;
}

const LoginFormFields: FC<Props> = (props) => {
	const { isMobile = false, isLoading } = props;
	const { control } = useFormContext<LoginPayload>();

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
				name="password"
				control={control}
				render={({ field }) => (
					<FormItem>
						<Label htmlFor={generateId("password")}>Password</Label>
						<FormControl>
							<Input
								{...field}
								type="password"
								icon={<Lock size={12} />}
								id={generateId("password")}
								placeholder="Enter your password"
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

export default LoginFormFields;
