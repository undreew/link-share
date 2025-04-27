"use client";

import React, { useState } from "react";
import { redirect } from "next/navigation";

const Page = () => {
	const [isAuth] = useState(false);

	if (!isAuth) return redirect("/login");

	return <div>Landing</div>;
};

export default Page;
