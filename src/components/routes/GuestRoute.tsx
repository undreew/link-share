"use client ";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthProvider";

interface Props {
	children: React.ReactNode;
}

const GuestRoute: React.FC<Props> = (props) => {
	const { children } = props;

	const router = useRouter();
	const { isAuth } = useAuth();

	useEffect(() => {
		if (isAuth) {
			router.push("/links");
		}
	}, [isAuth, router]);

	if (isAuth) return;

	return <div>{children}</div>;
};

export default GuestRoute;
