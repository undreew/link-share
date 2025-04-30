"use client";

import React, { useState } from "react";

import LinksCustomizeList from "./LinksCustomizeList";
import LinksCustomizeAction from "./LinksCustomizeAction";
import LinksCustomizeHeader from "./LinksCustomizeHeader";
import LinksCustomizePlaceholder from "./LinksCustomizePlaceholder";

import { Button } from "@/components/ui/button";

import { Form } from "@/components/form";
import { useForm } from "react-hook-form";

import { array, number, object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface Props {
  data?: [];
}

export interface Link {
  id: number;
}

export type Links = Link[];

export type LinksPayload = {
  links: {
    id: number;
    link: string;
    platform: string;
  }[];
};

const LinksCustomize: React.FC<Props> = () => {
  const [links, setLinks] = useState<Links>([]);

  function handleAddLink() {
    setLinks((prev) => [...prev, { id: prev.length + 1 }]);
  }

  function handleRemoveLink(id: number) {
    setLinks((prev) => prev.filter((item) => item.id !== id));
  }

  const schema = object({
    links: array()
      .of(
        object({
          id: number().required("This field is required"),
          link: string().required("This field is required"),
          platform: string().required("This field is required"),
        })
      )
      .required("Links are required"),
  });

  const formValues = useForm<LinksPayload>({
    resolver: yupResolver(schema),
  });

  return (
    <Form formValues={formValues} onSubmit={(e) => console.log(e)}>
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
