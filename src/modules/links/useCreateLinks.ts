import { useForm } from "react-hook-form";
import { array, object, string } from "yup";

import { LinksPayload } from "@/types/payload";
import { yupResolver } from "@hookform/resolvers/yup";

import cleanDeep from "clean-deep";

const useCreateLinks = () => {
  const schema = object({
    links: array()
      .of(
        object({
          link: string().required("This field is required"),
          platform: string().required("This field is required"),
        })
      )
      .required("Links are required"),
  });

  const formValues = useForm<LinksPayload>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formData: LinksPayload) => {
    console.log(cleanDeep(formData));
  };

  return {
    onSubmit,
    formValues,
  };
};

export default useCreateLinks;
