"use client";

import React from "react";
import Link from "next/link";

import useRegister from "./useRegister";
import RegisterFormFields from "./RegisterFormFields";

import { Card } from "@/components/card";
import { Form } from "@/components/form";
import { Button } from "@/components/ui/button";

const RegisterSubtext = (props: { className?: string }) => {
	const { className } = props;
	return (
		<small className={className}>
			Already have an account?{" "}
			<Link href="/login">
				<b className="text-purple-main max-sm:block">Login</b>
			</Link>
		</small>
	);
};

const Register = () => {
	const { formValues, onSubmit } = useRegister();

	return (
		<Form formValues={formValues} onSubmit={onSubmit}>
			<Card
				title="Create Account"
				className="hidden sm:flex"
				okText="Create new account"
				description="Let's get you started sharing your links!"
				okSubtext={<RegisterSubtext />}
			>
				<RegisterFormFields />
			</Card>

			<div className="block sm:hidden">
				<div className="mb-10">
					<h1 className="heading-md">Create Account</h1>
					<p className="body-md">
						Let&apos;s get you started sharing your links!
					</p>
				</div>

				<RegisterFormFields />

				<Button type="submit" variant="ls-primary" className="mt-5 w-full">
					Create new account
				</Button>

				<div className="mt-5 text-center">
					<RegisterSubtext className="body-md" />
				</div>
			</div>
		</Form>
	);
};

export default Register;
