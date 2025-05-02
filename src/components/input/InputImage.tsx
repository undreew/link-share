import React from "react";
import { FieldValues, useFormContext } from "react-hook-form";

import ImageUpload from "../image/ImageUpload";

interface Props {
	name: string;
}

const InputImage: React.FC<Props> = (props) => {
	const { name, ...rest } = props;
	const { register, setValue } = useFormContext<FieldValues>();

	function handleChange(image: File | undefined) {
		setValue(name, image);
	}

	return (
		<ImageUpload register={register(name)} onChange={handleChange} {...rest} />
	);
};

export default InputImage;
