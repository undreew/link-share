import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const RegisterAlreadyHaveAccount = (props: { className?: string }) => {
	const { className } = props;
	return (
		<small className={cn("max-sm:body-md", className)}>
			Already have an account?
			<Link href="/login">
				<b className="ml-1 text-purple-main max-sm:block link">Login</b>
			</Link>
		</small>
	);
};

export default RegisterAlreadyHaveAccount;
