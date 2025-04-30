import React from "react";
import Image from "next/image";

const LinksCustomizePlaceholder = () => {
  return (
    <div className="bg-gray-light">
      <div className="flex flex-col justify-center items-center p-5 sm:p-7 lg:p-10">
        <Image
          width={250}
          height={100}
          alt="Started"
          src="/lets_get_you_started.svg"
        />

        <div className="max-w-lg text-center ">
          <h1 className="heading-md">Let&apos;s get you started</h1>
          <p className="body-md mt-5">
            Use the “Add new link” button to get started. Once you have more
            than one link, you can reorder and edit them. We&apos;re here to
            help you share your profiles with everyone!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LinksCustomizePlaceholder;
