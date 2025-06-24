import React, { FC } from "react";

import { Card } from "@/components/card";

import LoginFormFields from "./LoginFormFields";
import LoginFormActions from "./LoginFormActions";

interface Props {
	title: string;
	isLoading: boolean;
	description: string;
}

const LoginDesktop: FC<Props> = (props) => {
	const { title, description, isLoading } = props;
	return (
		<Card title={title} className="hidden sm:flex" description={description}>
			<LoginFormFields isLoading={isLoading} />
			<LoginFormActions isLoading={isLoading} />
		</Card>
	);
};

export default LoginDesktop;
