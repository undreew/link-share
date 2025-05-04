"use client";

import { useAuth } from "@/contexts/AuthProvider";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface Props {
	children: React.ReactNode;
}

const ProtectedRoute: React.FC<Props> = (props) => {
	const { children } = props;

	const router = useRouter();
	const { isAuth } = useAuth();

	useEffect(() => {
		if (!isAuth) {
			router.push("/login");
		} else {
			router.push("/links");
		}
	}, [isAuth, router]);

	if (!isAuth) return;

	return <div>{children}</div>;
};

export default ProtectedRoute;
