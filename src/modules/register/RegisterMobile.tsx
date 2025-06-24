import React, { FC } from "react";

import RegisterFormFields from "./RegisterFormFields";
import RegisterFormActions from "./RegisterFormActions";

interface Props {
	title: string;
	isLoading: boolean;
	description: string;
}

const RegisterMobile: FC<Props> = (props) => {
	const { title, description, isLoading } = props;

	return (
		<div className="block sm:hidden">
			<div className="mb-10">
				<h1 className="heading-md">{title}</h1>
				<p className="body-md">{description}</p>
			</div>

			<RegisterFormFields isLoading={isLoading} />
			<RegisterFormActions isLoading={isLoading} />
		</div>
	);
};

export default RegisterMobile;
