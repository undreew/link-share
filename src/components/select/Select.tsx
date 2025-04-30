import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons/lib";
import { FieldPath, FieldValues } from "react-hook-form";
import React, { Fragment, useEffect, useState } from "react";
import { ControllerRenderProps, useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils";
import { keys, last, map } from "lodash";

import { SelectItem, SelectValue } from "@/components/ui/select";
import { SelectContent, SelectTrigger } from "@/components/ui/select";
import { Select as SelectUi, SelectSeparator } from "@/components/ui/select";

type Option = {
  value: string;
  label: string;
  icon: LucideIcon | IconType;
};

type Options = Option[];

interface SelectSource {
  [key: string]: { label: string; icon: LucideIcon | IconType };
}

type SelectProps<TFieldValues extends FieldValues = FieldValues> = {
  id?: string;
  error?: boolean;
  source: SelectSource;
} & ControllerRenderProps<TFieldValues, FieldPath<TFieldValues>>;

const Select = <TFieldValues extends FieldValues>(
  props: SelectProps<TFieldValues>
) => {
  const { id, source, onChange, value, error } = props;

  const [options, setOptions] = useState<Options>([]);
  const { formState } = useFormContext();
  const { isValid } = formState;

  useEffect(() => {
    if (source) {
      setOptions(createOptions());
    } else {
      setOptions([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [source]);

  function createOptions(): Options {
    return keys(source).map((key) => ({
      value: key,
      icon: source[key].icon,
      label: source[key].label,
    }));
  }

  return (
    <SelectUi {...props} onValueChange={onChange} defaultValue={value}>
      <SelectTrigger
        id={id}
        className={cn(
          "w-full cursor-pointer hover:border-purple-main shadow-purple-light transition-shadow hover:shadow-[0_0_10px_5px]",
          {
            "border-1 border-red-500 hover:shadow-none hover:border-red-500":
              error,
            "border-green-500": isValid,
          }
        )}
      >
        <SelectValue placeholder="Select a Link" />
      </SelectTrigger>

      <SelectContent className="max-h-[250px]">
        {map(options, (item, index) => {
          const { value, label, icon } = item;
          const isLast = last(options) === item;
          const Icon = icon;
          return (
            <Fragment key={index}>
              <SelectItem
                value={value}
                className="cursor-pointer hover:text-purple-main"
              >
                <Icon />
                <span>{label}</span>
              </SelectItem>
              {!isLast && <SelectSeparator />}
            </Fragment>
          );
        })}
      </SelectContent>
    </SelectUi>
  );
};

export default Select;
