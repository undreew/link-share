"use client";

import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginPayload } from "@/types/payload";

const useLogin = () => {
	const validationSchema = object({
		email: string()
			.required("This field is required.")
			.email("Must be a valid email address"),
		password: string()
			.min(8, "Password must be atleast 8 characters long.")
			.required("This field is required."),
	});

	const formValues = useForm<LoginPayload>({
		resolver: yupResolver(validationSchema),
		defaultValues: { email: "", password: "" },
	});

	function onSubmit(formData: LoginPayload) {
		console.log(formData);
	}

	return {
		onSubmit,
		formValues,
	};
};

export default useLogin;
