"use client";

import React, { useState } from "react";

import LinksCustomizeAction from "./LinksCustomizeAction";
import LinksCustomizeHeader from "./LinksCustomizeHeader";
import LinksCustomizePlaceholder from "./LinksCustomizePlaceholder";
import LinksCustomizeList from "./LinksCustomizeList";
import { Button } from "@/components/ui/button";

interface Props {
	data?: [];
}

export interface Link {
	id: number;
}

export type Links = Link[];

const LinksCustomize: React.FC<Props> = () => {
	const [links, setLinks] = useState<Links>([]);

	function handleAddLink() {
		setLinks((prev) => [...prev, { id: prev.length + 1 }]);
	}

	function handleRemoveLink(id: number) {
		setLinks((prev) => prev.filter((item) => item.id !== id));
	}

	return (
		<div className="p-5 sm:px-10 py-7 sm:py-12 h-full flex flex-col">
			<LinksCustomizeHeader />
			<LinksCustomizeAction onAdd={handleAddLink} />

			<div className="flex-1 mt-5">
				{links.length > 0 ? (
					<LinksCustomizeList
						data={links}
						onChange={setLinks}
						onRemove={handleRemoveLink}
					/>
				) : (
					<LinksCustomizePlaceholder />
				)}
			</div>

			{links.length > 0 && (
				<div className="flex justify-end mt-4">
					<Button variant="ls-primary">Save</Button>
				</div>
			)}
		</div>
	);
};

export default LinksCustomize;
