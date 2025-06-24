"use client";

import React from "react";

import useLogin from "./useLogin";

import { Form } from "@/components/form";

import LoginDesktop from "./LoginDesktop";
import LoginMobile from "./LoginMobile";

const title = "Login";
const description = "Add your details below to get back into the app";

const Login = () => {
	const { formValues, onSubmit, isLoading } = useLogin();

	return (
		<Form formValues={formValues} onSubmit={onSubmit}>
			<LoginDesktop
				title={title}
				isLoading={isLoading}
				description={description}
			/>
			<LoginMobile
				title={title}
				isLoading={isLoading}
				description={description}
			/>
		</Form>
	);
};

export default Login;
