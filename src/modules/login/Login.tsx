"use client";

import React from "react";
import Link from "next/link";

import useLogin from "./useLogin";
import LoginFormFields from "./LoginFormFields";

import { Card } from "@/components/card";
import { Form } from "@/components/form";
import { Button } from "@/components/ui/button";

const LoginSubtext = (props: { className?: string }) => {
  const { className } = props;
  return (
    <small className={className}>
      Dont have an account?{" "}
      <Link href="/register">
        <b className="text-purple-main max-sm:block link">Create an Account</b>
      </Link>
    </small>
  );
};

const Login = () => {
  const { formValues, onSubmit, isLoading } = useLogin();

  return (
    <Form formValues={formValues} onSubmit={onSubmit}>
      <Card
        title="Login"
        okText="Login"
        isLoading={isLoading}
        className="hidden sm:flex"
        okSubtext={<LoginSubtext />}
        description="Add your details below to get back into the app"
      >
        <LoginFormFields />
      </Card>

      <div className="block sm:hidden">
        <div className="mb-10">
          <h1 className="heading-md">Login</h1>
          <p className="body-md">
            Add your details below to get back into the app
          </p>
        </div>

        <LoginFormFields isMobile />

        <Button
          type="submit"
          variant="ls-primary"
          className="mt-5 w-full"
          isLoading={isLoading}
        >
          Login
        </Button>

        <div className="mt-5 text-center">
          <LoginSubtext className="body-md" />
        </div>
      </div>
    </Form>
  );
};

export default Login;
