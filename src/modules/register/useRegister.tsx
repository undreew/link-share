import { object, ref, string } from "yup";
import { useForm } from "react-hook-form";

import { RegisterPayload } from "@/types/payload";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { omit } from "lodash";

const useRegister = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const validationSchema = object({
		email: string()
			.required("This field is required.")
			.email("Must be a valid email address"),
		create_password: string()
			.min(8, "Password must be atleast 8 characters long.")
			.required("This field is required."),
		password: string()
			.min(8)
			.min(8, "Password must be atleast 8 characters long.")
			.required("This field is required.")
			.oneOf([ref("create_password")], "Passwords do not match"),
	});

	const formValues = useForm<RegisterPayload>({
		mode: "onChange", // needed for the oneOf to work
		resolver: yupResolver(validationSchema),
		defaultValues: { email: "", create_password: "", password: "" },
	});

	async function onSubmit(formData: RegisterPayload) {
		setIsLoading(true);
		try {
			const data = await fetch("http://localhost:5000/auth/register", {
				method: "POST",
				body: JSON.stringify(omit(formData, ["create_password"])),
				headers: {
					"Content-Type": "application/json",
				},
			});

			const { message } = await data.json();

			toast[!data.ok ? "error" : "success"](message);
			if (data.ok) router.push("/login"); // add timer of 3 seconds before redirecting
		} catch (error) {
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

export default useRegister;
