import React from "react";
import { useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Input as InputUi } from "../ui/input";

interface Props {
  icon?: React.ReactElement;
}

const Input: React.FC<React.ComponentProps<"input"> & Props> = (props) => {
  const { icon, className, name, ...rest } = props;

  const { formState } = useFormContext();
  const { errors, isValid } = formState;

  return (
    <div className="relative flex items-center gap-2">
      {icon && <span className="absolute left-4 text-gray-dark">{icon}</span>}
      <InputUi
        name={name}
        className={cn(
          "hover:border-purple-main text-dark pl-9 shadow-purple-light transition-shadow hover:shadow-[0_0_10px_5px]",
          { "hover:shadow-none": errors[name!], "border-green-500": isValid },
          className
        )}
        {...rest}
      />
    </div>
  );
};

export default Input;
