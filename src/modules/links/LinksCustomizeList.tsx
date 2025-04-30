import { ReactSortable } from "react-sortablejs";
import { useFormContext } from "react-hook-form";
import { GripHorizontal, Link } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";

import { map } from "lodash";

import { LINKS } from "@/constants/links";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { Label } from "@/components/ui/label";
import { FormField, FormItem } from "@/components/ui/form";
import { FormMessage, FormControl } from "@/components/ui/form";

import { Links } from "./LinksCustomize";
import { LinksPayload } from "@/types/payload";
import { cn } from "@/lib/utils";

interface Props {
  data: Links;
  onRemove: (id: number) => void;
  onChange: Dispatch<SetStateAction<Links>>;
}

const LinksCustomizeItem = ({
  item,
  onRemove,
}: {
  item: {
    id: number;
    chosen: boolean;
  };
  onRemove: (id: number) => void;
}) => {
  const { control, formState } = useFormContext<LinksPayload>();
  const { errors } = formState;
  const { id, chosen } = item;

  return (
    <div
      className={cn("bg-gray-light p-4 cursor-grab", {
        "cursor-grabbing": chosen,
      })}
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <GripHorizontal size={15} className="text-gray-dark" />
          <h1 className="text-[16px] font-bold text-gray-dark">Link# {id}</h1>
        </div>

        <span className="body-md cursor-pointer" onClick={() => onRemove(id)}>
          Remove
        </span>
      </div>

      <div className="mt-3 flex flex-col gap-3">
        <div>
          <FormField
            control={control}
            name={`links.${id}.platform`}
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="platform">Platform</Label>
                <Select
                  error={Boolean(errors?.links?.[id]?.platform?.message)}
                  source={LINKS}
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div>
          <FormField
            name={`links.${id}.link`}
            control={control}
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="link">Link</Label>
                <FormControl>
                  <Input
                    id="link"
                    icon={<Link size={12} />}
                    placeholder="e.g. alex@email.com"
                    isInvalid={Boolean(errors?.links?.[item.id]?.link)}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
};

const LinksCustomizeList: React.FC<Props> = ({ data, onChange, onRemove }) => {
  return (
    <ReactSortable
      list={data}
      animation={200}
      setList={onChange}
      className="flex flex-col gap-5 min-h-[345px] max-h-[345px] overflow-y-auto"
    >
      {map(data, (item) => {
        return (
          <LinksCustomizeItem key={item.id} item={item} onRemove={onRemove} />
        );
      })}
    </ReactSortable>
  );
};

export default LinksCustomizeList;
