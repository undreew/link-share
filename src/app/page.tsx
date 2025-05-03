"use client";

import React from "react";
import { redirect } from "next/navigation";
import { useAuth } from "@/contexts/AuthProvider";

const Page = () => {
	const { isAuth } = useAuth();

	if (!isAuth) return redirect("/login");

	return <div>Landing</div>;
};

export default Page;
