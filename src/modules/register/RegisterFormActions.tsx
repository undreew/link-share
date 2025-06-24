import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import RegisterAlreadyHaveAccount from "./RegisterAlreadyHaveAccount";

interface Props {
	isLoading: boolean;
}

const RegisterFormActions: FC<Props> = (props) => {
	const { isLoading } = props;

	return (
		<article className="mt-6 flex flex-col gap-6">
			<Button
				type="submit"
				className="w-full"
				variant="ls-primary"
				disabled={isLoading}
				isLoading={isLoading}
			>
				{isLoading ? "Creating account" : "Create new account"}
			</Button>

			<RegisterAlreadyHaveAccount className="text-center" />
		</article>
	);
};

export default RegisterFormActions;
