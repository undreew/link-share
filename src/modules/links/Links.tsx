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
		</>
	);
};

export default Links;
