import React, { FC } from "react";

import { Card } from "@/components/card";

import RegisterFormFields from "./RegisterFormFields";
import RegisterFormActions from "./RegisterFormActions";

interface Props {
	title: string;
	isLoading: boolean;
	description: string;
}

const RegisterDesktop: FC<Props> = (props) => {
	const { title, description, isLoading } = props;
	return (
		<Card title={title} className="hidden sm:flex" description={description}>
			<RegisterFormFields isLoading={isLoading} />
			<RegisterFormActions isLoading={isLoading} />
		</Card>
	);
};

export default RegisterDesktop;
