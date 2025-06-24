import React, { FC } from "react";

import LoginFormFields from "./LoginFormFields";
import LoginFormActions from "./LoginFormActions";

interface Props {
	title: string;
	isLoading: boolean;
	description: string;
}

const LoginMobile: FC<Props> = (props) => {
	const { title, description, isLoading } = props;

	return (
		<div className="block sm:hidden">
			<div className="mb-10">
				<h1 className="heading-md">{title}</h1>
				<p className="body-md">{description}</p>
			</div>

			<LoginFormFields isLoading={isLoading} />
			<LoginFormActions isLoading={isLoading} />
		</div>
	);
};

export default LoginMobile;
