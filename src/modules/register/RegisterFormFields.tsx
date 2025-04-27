import { Lock, Mail } from "lucide-react";
import { useFormContext } from "react-hook-form";

import { RegisterPayload } from "@/types/payload";

import { Input } from "@/components/input";
import { Label } from "@/components/ui/label";
import { FormItem, FormField } from "@/components/ui/form";
import { FormMessage, FormControl } from "@/components/ui/form";

const RegisterFormFields = () => {
	const { control } = useFormContext<RegisterPayload>();

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
				name="create_password"
				control={control}
				render={({ field }) => (
					<FormItem>
						<Label htmlFor="create_password">Password</Label>
						<FormControl>
							<Input
								type="password"
								id="create_password"
								icon={<Lock size={12} />}
								placeholder="At least 8 characters"
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				name="confirm_password"
				control={control}
				render={({ field }) => (
					<FormItem>
						<Label htmlFor="confirm_password">Password</Label>
						<FormControl>
							<Input
								type="password"
								id="confirm_password"
								icon={<Lock size={12} />}
								placeholder="At least 8 characters"
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

export default RegisterFormFields;
