"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { LoginPayload } from "@/types/payload";
import { useAuth } from "@/contexts/AuthProvider";
import { yupResolver } from "@hookform/resolvers/yup";

import { object, string } from "yup";

const validationSchema = object({
	email: string()
		.required("This field is required.")
		.email("Must be a valid email address"),
	password: string()
		.min(8, "Password must be atleast 8 characters long.")
		.required("This field is required."),
});

const useLogin = () => {
	const router = useRouter();
	const { authenticate } = useAuth();
	const [isLoading, setIsLoading] = useState(false);

	const formValues = useForm<LoginPayload>({
		resolver: yupResolver(validationSchema),
		defaultValues: { email: "", password: "" },
	});

	async function onSubmit(formData: LoginPayload) {
		setIsLoading(true);
		try {
			const data = await fetch("http://localhost:5000/auth/login", {
				method: "POST",
				body: JSON.stringify(formData),
				headers: {
					"Content-Type": "application/json",
				},
			});

			const { access_token } = await data.json();
			authenticate(access_token);
			router.push("/links");
		} catch (error) {
			console.log(error);
			alert(error);
		} finally {
			setIsLoading(false);
		}
	}

	return {
		onSubmit,
		isLoading,
		formValues,
	};
};

export default useLogin;
