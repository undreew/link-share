"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthProvider";

const Page = () => {
	const { isAuth } = useAuth();
	const router = useRouter();

	function handleRedirect() {
		if (isAuth) {
			router.push("/links");
		} else {
			router.push("/login");
		}
	}

	return (
		<div className="h-screen w-full flex justify-center items-center">
			<div className="max-w-5xl mx-auto text-center">
				<h1 className="text-5xl font-extrabold tracking-wide leading-12">
					Welcome to <span className="text-purple-main ">Link Share</span>
				</h1>

				<p className="mt-1 body-md">
					A platform where individuals can share their own links from different
					platforms.
				</p>

				<div className="mt-5">
					<Button variant="ls-primary" onClick={handleRedirect}>
						Start Now
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Page;
