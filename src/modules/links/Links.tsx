"use client";

import React from "react";

import LinksMockup from "./LinksMockup";
import LinksCustomize from "./LinksCustomize";

import { TabsContent } from "@/components/ui/tabs";

const Links = () => {
	return (
		<>
			<TabsContent value="links" className="page-container">
				<LinksMockup />
				<LinksCustomize />
			</TabsContent>

			<TabsContent value="profile" className="page-container">
				<LinksMockup />
				<div className="page-card p-10">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
						excepturi optio dignissimos enim ab et iure perferendis voluptatibus
						numquam nulla, atque consequatur fuga, sequi assumenda doloribus?
						Consequuntur fuga minima laboriosam quisquam quam iure tenetur vero
						veniam, facere, officia quo temporibus illo accusamus perferendis,
						error aliquam! Facere laborum nulla neque dolore!
					</p>
				</div>
			</TabsContent>
		</>
	);
};

export default Links;
