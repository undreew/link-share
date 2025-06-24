import React from "react";

import { CardTitle, CardHeader, Card as CardUi } from "../ui/card";
import { CardContent, CardDescription, CardFooter } from "../ui/card";
import { cn } from "@/lib/utils";

interface Props {
	title: string;
	className?: string;
	description: string;
	children?: React.ReactNode;
}

const Card: React.FC<Props> = (props) => {
	const { title, description, children, className } = props;

	const [firstChildren, lastChild] = Array(children);

	return (
		<CardUi className={cn("py-10 px-3", className)}>
			<CardHeader className="mb-2">
				<CardTitle className="heading-md">{title}</CardTitle>
				<CardDescription className="body-md">{description}</CardDescription>
			</CardHeader>

			<CardContent>{firstChildren}</CardContent>

			{lastChild && <CardFooter>{lastChild}</CardFooter>}
		</CardUi>
	);
};

export default Card;
