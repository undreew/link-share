import { Lock, Mail } from "lucide-react";
import { useFormContext } from "react-hook-form";

import { LoginPayload } from "@/types/payload";

import { Input } from "@/components/input";
import { Label } from "@/components/ui/label";
import { FormItem, FormField } from "@/components/ui/form";
import { FormMessage, FormControl } from "@/components/ui/form";

const LoginFormFields = () => {
	const { control } = useFormContext<LoginPayload>();

	return (
		<div className="flex flex-col gap-5">
			<FormField
				name="email"
				control={control}
				render={({ field }) => (
					<FormItem>
						<Label htmlFor="email">Email</Label>
						<FormControl>
							<Input
								id="email"
								icon={<Mail size={12} />}
								placeholder="e.g. alex@email.com"
								{...field}
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
						<Label htmlFor="password">Password</Label>
						<FormControl>
							<Input
								id="password"
								type="password"
								icon={<Lock size={12} />}
								placeholder="Enter your password"
								{...field}
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
