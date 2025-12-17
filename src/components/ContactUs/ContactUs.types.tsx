export default interface FormState {
  name: string;
  email: string;
  contact: string;
}

export interface InputFieldConfig {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}
