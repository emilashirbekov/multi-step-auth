/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FormFieldProps } from "@/features/Auth/model/login-form.types";
import { Input } from "./input";
import { Label } from "./label";

export const FormField = <T extends Record<string, any>>({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
  label,
  isLoading,
}: FormFieldProps<T>) => (
  <>
    <Label className='sr-only' htmlFor={label}>
      {label}
    </Label>
    <Input
      type={type}
      placeholder={placeholder}
      //@ts-ignore
      {...register(name, { valueAsNumber })}
      autoCapitalize='none'
      autoComplete='email'
      autoCorrect='off'
      disabled={isLoading}
    />
    {error && <span className='text-red-600 text-xs'>{error.message}</span>}
  </>
);
