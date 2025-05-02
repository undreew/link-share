import { Wallpaper } from "lucide-react";
import React, { Fragment, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import ImageUploader, { ImageListType } from "react-images-uploading";

import Image from "next/image";

import { isEmpty, keys, map } from "lodash";

import { Input } from "../input";

interface Props {
	register: UseFormRegisterReturn;
	onChange: (image: File | undefined) => void;
}

const ACCEPTED_IMAGE_FILES = {
	jpg: "jpg",
	jpeg: "jpeg",
	png: "png",
	webp: "webp",
	gif: "gif",
};

const acceptType = map(keys(ACCEPTED_IMAGE_FILES));

const ImageUpload: React.FC<Props> = (props) => {
	const { onChange, register } = props;

	const [image, setImage] = useState<ImageListType | undefined>();

	function handleChange(imageList: ImageListType) {
		setImage(imageList);
		onChange(imageList[0].file);
	}

	return (
		<div>
			<ImageUploader
				dataURLKey="dataURL"
				value={image as never}
				onChange={handleChange}
				acceptType={acceptType}
			>
				{({ imageList, onImageUpload, dragProps }) => (
					<Fragment>
						{isEmpty(image) && (
							<div className="flex flex-col xl:flex-row lg:items-center gap-2">
								<div
									className="max-h-50 max-w-50 h-50 w-50 bg-purple-light flex flex-col justify-center items-center rounded-2xl hover:shadow-lg hover:cursor-pointer transition-shadow ease-in-out"
									onClick={onImageUpload}
									{...dragProps}
								>
									<Wallpaper className="text-purple-main" />
									<p className="heading-sm text-purple-main">+ Upload Image</p>
								</div>

								<div className="lg:text-center">
									<p className="body-sm">Image must be below 1024x1024px.</p>
									<p className="body-sm">Use PNG or JPG format.</p>
								</div>
							</div>
						)}
						{imageList.map((image, index) => {
							const item = image.file as File;
							const _image = image["dataURL"];
							return (
								<div key={index} className="size-full">
									<Image
										width={100}
										height={100}
										src={_image as string}
										alt={`${item.name}-${item.type}-${index}`}
										className="h-50 w-50 object-cover rounded-2xl"
									/>
								</div>
							);
						})}

						<Input type="hidden" {...register} />
					</Fragment>
				)}
			</ImageUploader>
		</div>
	);
};

export default ImageUpload;
