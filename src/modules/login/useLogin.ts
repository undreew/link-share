"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { LoginPayload } from "@/types/payload";
import { useAuth } from "@/contexts/AuthProvider";
import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "sonner";
import { object, string } from "yup";

const validationSchema = object({
  email: string()
    .required("This field is required.")
    .email("Must be a valid email address"),
  password: string()
    .min(8, "Password must be atleast 8 characters long.")
    .required("This field is required."),
});

const useLogin = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { authenticate } = useAuth();

  const formValues = useForm<LoginPayload>({
    resolver: yupResolver(validationSchema),
    defaultValues: { email: "", password: "" },
  });

  async function onSubmit(formData: LoginPayload) {
    setIsLoading(true);
    const data = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!data.ok) {
      const { message } = await data.json();
      toast.error(message);
    } else {
      const { access_token } = await data.json();
      authenticate(access_token);
      router.push("/links");
    }
    setIsLoading(false);
  }

  return {
    onSubmit,
    isLoading,
    formValues,
  };
};

export default useLogin;
