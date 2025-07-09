import { useForm } from "react-hook-form";
import { array, object, string } from "yup";

import { LinksPayload } from "@/types/payload";
import { yupResolver } from "@hookform/resolvers/yup";

import cleanDeep from "clean-deep";

const useCreateLinks = () => {
	const schema = object({
		links: array()
			.of(
				object({
					link: string().required("This field is required"),
					platform: string().required("This field is required"),
				})
			)
			.required("Links are required"),
	});

	const formValues = useForm<LinksPayload>({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (formData: LinksPayload) => {
		try {
			// console.log(cleanDeep(formData));
			const response = await fetch("http://localhost:5000/links", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${"eydwkajdlakj@djak"}`,
				},
				body: JSON.stringify(cleanDeep(formData)),
			});

			if (!response.ok) {
				throw new Error("Error creating links");
			}
		} catch (error) {
			console.log(error);
			alert(error);
		}
	};

	return {
		onSubmit,
		formValues,
	};
};

export default useCreateLinks;
