"use client";

import React from "react";

import LinksMockup from "./LinksMockup";
import LinksCustomize from "./LinksCustomize";

const Links = () => {
  return (
    <div className="page-container">
      <div className="col-span-1 bg-white py-12 hidden md:flex justify-center items-center shadow-md rounded-sm">
        <LinksMockup />
      </div>

      <div className="col-span-1 xl:col-span-2 bg-white flex flex-col shadow-md h-full min-h-full rounded-sm">
        <LinksCustomize />
      </div>
    </div>
  );
};

export default Links;
