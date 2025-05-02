"use client";

import React, { useState } from "react";

import LinksCustomizeList from "./LinksCustomizeList";
import LinksCustomizeAction from "./LinksCustomizeAction";
import LinksCustomizeHeader from "./LinksCustomizeHeader";
import LinksCustomizePlaceholder from "./LinksCustomizePlaceholder";

import { Form } from "@/components/form";
import { Button } from "@/components/ui/button";

import useCreateLinks from "./useCreateLinks";

interface Props {
	data?: [];
}

export interface Link {
	id: number;
	chosen: boolean;
}

export type Links = Link[];

const LinksCustomize: React.FC<Props> = () => {
	const { formValues, onSubmit } = useCreateLinks();

	const [links, setLinks] = useState<Links>([]);

	function handleAddLink() {
		const nextId =
			links.length > 0 ? Math.max(...links.map((l) => l.id)) + 1 : 1;
		setLinks((prev) => [...prev, { id: nextId, chosen: false }]);
	}

	function handleRemoveLink(id: number) {
		setLinks((prev) => prev.filter((item) => item.id !== id));
	}

	return (
		<div className="flex flex-col h-full page-card">
			<Form
				onSubmit={onSubmit}
				formValues={formValues}
				className="h-full flex flex-col"
			>
				<div className="flex flex-col gap-5 h-full p-5 md:p-10">
					<div>
						<LinksCustomizeHeader />
						<LinksCustomizeAction onAdd={handleAddLink} />
					</div>

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
					<>
						<hr className="border-t mt-0" />
						<div className="py-5 px-10">
							<div className="flex justify-end">
								<Button
									type="submit"
									variant="ls-primary"
									className="max-sm:w-full"
								>
									Save
								</Button>
							</div>
						</div>
					</>
				)}
			</Form>
		</div>
	);
};

export default LinksCustomize;
