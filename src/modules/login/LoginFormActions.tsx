import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import LoginDontHaveAccount from "./LoginDontHaveAccount";

interface Props {
	isLoading: boolean;
}

const LoginFormActions: FC<Props> = (props) => {
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
				{isLoading ? "Logging in" : "Login"}
			</Button>

			<LoginDontHaveAccount className="text-center" />
		</article>
	);
};

export default LoginFormActions;
