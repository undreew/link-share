"use client";

import React from "react";

import useRegister from "./useRegister";

import { Form } from "@/components/form";

import RegisterMobile from "./RegisterMobile";
import RegisterDesktop from "./RegisterDesktop";

const title = "Create Account";
const description = "Let's get you started sharing your links!";

const Register = () => {
	const { formValues, onSubmit, isLoading } = useRegister();

	return (
		<Form formValues={formValues} onSubmit={onSubmit}>
			<RegisterDesktop
				title={title}
				isLoading={isLoading}
				description={description}
			/>
			<RegisterMobile
				title={title}
				isLoading={isLoading}
				description={description}
			/>
		</Form>
	);
};

export default Register;
