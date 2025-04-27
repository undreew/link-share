import React from "react";

import LinksMockup from "./LinksMockup";
import LinksCustomize from "./LinksCustomize";

const Links = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 h-full min-h-full rounded-sm">
			<div className="col-span-1 bg-white py-12 hidden md:flex justify-center items-center shadow-md rounded-sm">
				<LinksMockup />
			</div>

			<div className="col-span-1 xl:col-span-2 bg-white flex flex-col shadow-md h-full min-h-full rounded-sm">
				<LinksCustomize />
			</div>
		</div>
	);
};

export default Links;
