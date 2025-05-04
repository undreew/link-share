"use client";

import React from "react";
import { ProtectedRoute } from "@/components/routes";

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return <ProtectedRoute>{children}</ProtectedRoute>;
};

export default Layout;
