import React, { Dispatch, SetStateAction } from "react";
import { map } from "lodash";

import { LINKS } from "@/constants/links";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { Button } from "@/components/ui/button";

import { Links } from "./LinksCustomize";
import { GripHorizontal, Link } from "lucide-react";

import { ReactSortable } from "react-sortablejs";

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
  };
  onRemove: (id: number) => void;
}) => {
  return (
    <div className="bg-gray-light p-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <GripHorizontal size={15} className="text-gray-dark cursor-grab" />
          <h1 className="text-[16px] font-bold text-gray-dark">
            Link# {item.id}
          </h1>
        </div>

        <Button variant="ghost" onClick={() => onRemove(item.id)}>
          Remove
        </Button>
      </div>

      <div className="mt-3 flex flex-col gap-3">
        <div>
          <p className="body-sm">Platform</p>
          <Select source={LINKS} />
        </div>

        <div>
          <p className="body-sm">Link</p>
          <Input
            icon={<Link size={12} />}
            placeholder="e.g. https://www.github.com/johnappleseed"
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
      className="flex flex-col gap-5 h-fit min-h-[400px] max-h-[400px] overflow-y-auto"
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
