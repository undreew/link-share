import React from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  onAdd: () => void;
}

const LinksCustomizeAction: React.FC<Props> = (props) => {
  const { onAdd } = props;
  return (
    <div className="w-full mt-10">
      <Button
        size="lg"
        type="button"
        onClick={onAdd}
        className="w-full"
        variant="ls-secondary"
      >
        <Plus />
        Add new link
      </Button>
    </div>
  );
};

export default LinksCustomizeAction;
