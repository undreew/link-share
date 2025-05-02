import React from "react";
import LinksMockup from "../links/LinksMockup";
import { TabsContent } from "@/components/ui/tabs";
import ProfileCustomize from "./ProfileCustomize";

const Profile = () => {
	return (
		<>
			<TabsContent value="profile" className="page-container">
				<LinksMockup />
				<ProfileCustomize />
			</TabsContent>
		</>
	);
};

export default Profile;
