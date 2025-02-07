import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";

export interface BaseFormData {
  email: string;
  password: string;
}

export interface RegisterFormData extends BaseFormData {
  name: string;
  confirmPassword: string;
}

export type LoginFormData = BaseFormData;

export type FormFieldProps<T extends FieldValues> = {
  type: string;
  placeholder: string;
  name: keyof T;
  register: UseFormRegister<T>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
  label?: string;
  isLoading?: boolean;
};
