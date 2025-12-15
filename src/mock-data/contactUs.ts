import type { InputFieldConfig } from "@components/ContactUs/ContactUs.types";

export const INPUT_FIELDS: InputFieldConfig[] = [
  {
    id: "name",
    name: "name",
    type: "text",
    placeholder: "Your name",
    required: true,
  },
  {
    id: "email",
    name: "email",
    type: "email",
    placeholder: "Email address",
    required: true,
  },
  {
    id: "contact",
    name: "contact",
    type: "text",
    placeholder: "Contact number",
    required: true,
  },
];
