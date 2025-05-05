import React from "react";

import { Button } from "../ui/button";
import { CardTitle, CardHeader, Card as CardUi } from "../ui/card";
import { CardContent, CardDescription, CardFooter } from "../ui/card";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  className?: string;
  description: string;
  children?: React.ReactNode;

  // footer related
  actions?: boolean;
  isLoading?: boolean;
  okText?: string;
  okSubtext?: React.ReactNode;
}

const Card: React.FC<Props> = (props) => {
  const { okText = "Ok", okSubtext, isLoading } = props;
  const { title, description, children, actions = true, className } = props;

  return (
    <CardUi className={cn("py-10 px-3", className)}>
      <CardHeader className="mb-2">
        <CardTitle className="heading-md">{title}</CardTitle>
        <CardDescription className="body-md">{description}</CardDescription>
      </CardHeader>

      <CardContent>{children}</CardContent>

      {actions && (
        <CardFooter className="flex flex-col">
          <Button
            isLoading={isLoading}
            className="w-full mb-6"
            variant="ls-primary"
            type="submit"
          >
            {okText}
          </Button>

          {okSubtext}
        </CardFooter>
      )}
    </CardUi>
  );
};

export default Card;
