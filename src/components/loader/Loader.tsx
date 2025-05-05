import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface Props {
  isLoading: boolean;
}

const Loader: React.FC<Props> = (props) => {
  const { isLoading } = props;
  if (!isLoading) return false;
  return <Loader2 className={cn({ "animate-spin": isLoading })} />;
};

export default Loader;
