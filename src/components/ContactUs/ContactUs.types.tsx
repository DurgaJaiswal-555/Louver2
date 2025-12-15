type FormFieldName = "name" | "email" | "contact";

export default interface FormState {
    name: string;
    email: string;
    contact: string;
}

export interface InputFieldConfig {
  id: FormFieldName;
  name: FormFieldName;
  type: string;
  placeholder: string;
  required?: boolean;
}
