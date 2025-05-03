"use client";

import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginPayload } from "@/types/payload";
import { useAuth } from "@/contexts/AuthProvider";
import { useRouter } from "next/navigation";

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

	const formValues = useForm<LoginPayload>({
		resolver: yupResolver(validationSchema),
		defaultValues: { email: "", password: "" },
	});

	async function onSubmit(formData: LoginPayload) {
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
		}
	}

	return {
		onSubmit,
		formValues,
	};
};

export default useLogin;
