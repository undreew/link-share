import React from "react";
import { Form as FormUi } from "../ui/form";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";

interface Props<T extends FieldValues> {
	className?: string;
	children: React.ReactNode;
	formValues: UseFormReturn<T>;
	onSubmit: (formData: T) => void;
}

const Form = <T extends FieldValues>(props: Props<T>) => {
	const { children, formValues, onSubmit, className } = props;
	return (
		<FormProvider {...formValues}>
			<FormUi {...formValues}>
				<form
					noValidate
					className={className}
					onSubmit={formValues.handleSubmit(onSubmit)}
				>
					{children}
				</form>
			</FormUi>
		</FormProvider>
	);
};

export default Form;
