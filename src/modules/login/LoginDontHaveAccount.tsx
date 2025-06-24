import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LoginDontHaveAccount = (props: { className?: string }) => {
	const { className } = props;
	return (
		<small className={cn("max-sm:body-md", className)}>
			Dont have an account?{" "}
			<Link href="/register">
				<b className="text-purple-main max-sm:block link">Create an Account</b>
			</Link>
		</small>
	);
};

export default LoginDontHaveAccount;
