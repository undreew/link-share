import React, { Fragment, useEffect, useState } from "react";
import { LucideIcon } from "lucide-react";

import { keys, last, map } from "lodash";

import { SelectItem, SelectValue } from "@/components/ui/select";
import { SelectContent, SelectTrigger } from "@/components/ui/select";
import { Select as SelectUi, SelectSeparator } from "@/components/ui/select";

type Option = {
	value: string;
	label: string;
	icon: LucideIcon;
};

type Options = Option[];

interface Props {
	id?: string;
	source: Record<string, { label: string; icon: LucideIcon }>;
}

const Select: React.FC<Props> = (props) => {
	const { id, source } = props;

	const [options, setOptions] = useState<Options>([]);

	useEffect(() => {
		if (source) {
			setOptions(createOptions());
		} else {
			setOptions([]);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [source]);

	function createOptions(): Options {
		return keys(source).map((key) => ({
			value: key,
			icon: source[key].icon,
			label: source[key].label,
		}));
	}

	return (
		<SelectUi name="country">
			<SelectTrigger
				id={id}
				className="w-full cursor-pointer hover:border-purple-main shadow-purple-light transition-shadow hover:shadow-[0_0_10px_5px]"
			>
				<SelectValue placeholder="Select a Link" />
			</SelectTrigger>

			<SelectContent className="max-h-[250px]">
				{/* <SelectGroup>
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
				</SelectGroup> */}

				{map(options, (item, index) => {
					const { value, label, icon } = item;
					const isLast = last(options) === item;
					const Icon = icon;
					return (
						<Fragment key={index}>
							<SelectItem
								value={value}
								className="cursor-pointer hover:text-purple-main"
							>
								<Icon />
								<span>{label}</span>
							</SelectItem>
							{!isLast && <SelectSeparator />}
						</Fragment>
					);
				})}
			</SelectContent>
		</SelectUi>
	);
};

export default Select;
