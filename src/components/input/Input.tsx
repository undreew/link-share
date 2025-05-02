import React from "react";
import { useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Input as InputUi } from "../ui/input";

interface Props {
	icon?: React.ReactElement;
	wrapperClass?: string;
	isInvalid?: boolean;
}

const Input: React.FC<React.ComponentProps<"input"> & Props> = (props) => {
	const { icon, className, name, value, isInvalid, wrapperClass, ...rest } =
		props;

	const { formState } = useFormContext();
	const { errors, isValid } = formState;

	return (
		<div className={cn("relative flex items-center gap-2", wrapperClass)}>
			{icon && <span className="absolute left-4 text-gray-dark">{icon}</span>}
			<InputUi
				name={name}
				value={value || ""}
				className={cn(
					"hover:border-purple-main text-dark shadow-purple-light transition-shadow hover:shadow-[0_0_10px_5px]",
					{
						"pl-9": icon,
						"hover:shadow-none": errors[name!] || isInvalid,
						"border-green-500": isValid,
					},
					className
				)}
				{...rest}
			/>
		</div>
	);
};

export default Input;
