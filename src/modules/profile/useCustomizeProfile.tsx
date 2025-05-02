import { useForm } from "react-hook-form";
import { mixed, object, string } from "yup";

import { ProfilePayload } from "@/types/payload";
import { yupResolver } from "@hookform/resolvers/yup";

import cleanDeep from "clean-deep";

const useCustomizeProfile = () => {
	const schema = object({
		first_name: string().required("This field is required"),
		last_name: string().required("This field is required"),
		email: string()
			.email("Must be a valid email")
			.required("This field is required"),
		profile_picture: mixed<File>()
			.required("This field is required") // not working
			.test("required", "This field is required", (value) => {
				return value instanceof File;
			})
			.test("fileSize", "File must be less than 4MB", (value) => {
				if (!(value instanceof File)) return true;
				return value.size <= 4 * 1024 * 1024;
			}),
	});

	const formValues = useForm<ProfilePayload>({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (formData: ProfilePayload) => {
		console.log(cleanDeep(formData));
	};

	return {
		onSubmit,
		formValues,
	};
};

export default useCustomizeProfile;
