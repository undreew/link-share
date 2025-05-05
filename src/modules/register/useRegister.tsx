import { object, ref, string } from "yup";
import { useForm } from "react-hook-form";

import { RegisterPayload } from "@/types/payload";
import { yupResolver } from "@hookform/resolvers/yup";

const useRegister = () => {
  const validationSchema = object({
    email: string()
      .required("This field is required.")
      .email("Must be a valid email address"),
    create_password: string()
      .min(8, "Password must be atleast 8 characters long.")
      .required("This field is required."),
    confirm_password: string()
      .min(8)
      .min(8, "Password must be atleast 8 characters long.")
      .required("This field is required.")
      .oneOf([ref("create_password")], "Passwords do not match"),
  });

  const formValues = useForm<RegisterPayload>({
    mode: "onChange", // needed for the oneOf to work
    resolver: yupResolver(validationSchema),
    defaultValues: { email: "", create_password: "", confirm_password: "" },
  });

  function onSubmit(formData: RegisterPayload) {
    console.log(formData);
  }

  return {
    onSubmit,
    formValues,
  };
};

export default useRegister;
