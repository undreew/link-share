"use client";

import React, { useState } from "react";

import LinksCustomizeList from "./LinksCustomizeList";
import LinksCustomizeAction from "./LinksCustomizeAction";
import LinksCustomizeHeader from "./LinksCustomizeHeader";
import LinksCustomizePlaceholder from "./LinksCustomizePlaceholder";

import { Form } from "@/components/form";
import { Button } from "@/components/ui/button";

import useCreateLinks from "./useCreateLinks";

interface Props {
  data?: [];
}

export interface Link {
  id: number;
  chosen: boolean;
}

export type Links = Link[];

const LinksCustomize: React.FC<Props> = () => {
  const { formValues, onSubmit } = useCreateLinks();

  const [links, setLinks] = useState<Links>([]);

  function handleAddLink() {
    const nextId =
      links.length > 0 ? Math.max(...links.map((l) => l.id)) + 1 : 1;
    setLinks((prev) => [...prev, { id: nextId, chosen: false }]);
  }

  function handleRemoveLink(id: number) {
    setLinks((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <Form formValues={formValues} onSubmit={onSubmit}>
      <div className="p-5 sm:px-10 md:px-5 lg:px-10 py-7 sm:py-12 flex flex-col flex-1">
        <LinksCustomizeHeader />
        <LinksCustomizeAction onAdd={handleAddLink} />

        <div className="flex-1 mt-5">
          {links.length > 0 ? (
            <LinksCustomizeList
              data={links}
              onChange={setLinks}
              onRemove={handleRemoveLink}
            />
          ) : (
            <LinksCustomizePlaceholder />
          )}
        </div>
      </div>

      {links.length > 0 && (
        <>
          <hr className="border-t mt-0" />
          <div className="p-5 sm:px-10 py-2 sm:py-5">
            <div className="flex justify-end">
              <Button variant="ls-primary" type="submit">
                Save
              </Button>
            </div>
          </div>
        </>
      )}
    </Form>
  );
};

export default LinksCustomize;
