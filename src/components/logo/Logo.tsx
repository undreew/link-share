import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
	link: boolean;
}

const Logo: React.FC<Props> = (props) => {
	const { link } = props;

	const logo = (
		<Image
			height={40}
			width={180}
			src="/devlinks.png"
			alt="Dev Links Logo"
			className="max-sm:w-40"
			priority
		/>
	);

	if (link) {
		return <Link href="/">{logo}</Link>;
	}

	return logo;
};

export default Logo;
