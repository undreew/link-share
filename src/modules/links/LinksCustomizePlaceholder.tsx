import React from "react";
import Image from "next/image";

const LinksCustomizePlaceholder = () => {
	return (
		<div className="bg-gray-light flex flex-col h-full justify-center items-center p-5 sm:p-7 lg:p-10">
			<Image
				width={100}
				height={100}
				alt="Started"
				src="/lets_get_you_started.svg"
				className="w-auto h-auto object-cover"
			/>

			<div className="max-w-lg text-center ">
				<h1 className="heading-md">Let&apos;s get you started</h1>
				<p className="body-md mt-5">
					Use the “Add new link” button to get started. Once you have more than
					one link, you can reorder and edit them. We&apos;re here to help you
					share your profiles with everyone!
				</p>
			</div>
		</div>
	);
};

export default LinksCustomizePlaceholder;
