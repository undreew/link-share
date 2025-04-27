import React from "react";
import { Input as InputUi } from "../ui/input";
import { cn } from "@/lib/utils";

interface Props {
	icon: React.ReactElement;
}

const Input: React.FC<React.ComponentProps<"input"> & Props> = (props) => {
	const { icon, className, ...rest } = props;

	return (
		<div className="relative flex items-center gap-2">
			<span className="absolute left-4 text-gray-dark">{icon}</span>
			<InputUi
				className={cn(
					"hover:border-purple-main text-dark pl-9 shadow-purple-light transition-shadow hover:shadow-[0_0_10px_5px]",
					className
				)}
				{...rest}
			/>
		</div>
	);
};

export default Input;
