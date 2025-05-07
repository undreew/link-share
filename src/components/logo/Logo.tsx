import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
	link: boolean;
}

const Logo: React.FC<Props> = (props) => {
	const { link } = props;

	const logo = (
		<div className="flex items-center">
			<Image
				height={40}
				width={40}
				src="/devlinks_mobile.png"
				alt="Dev Links Logo"
				priority
			/>
			<span className="heading-md text-purple-main ml-1 hidden sm:block">
				Link Share
			</span>
		</div>
	);

	if (link) {
		return <Link href="/">{logo}</Link>;
	}

	return logo;
};

export default Logo;
