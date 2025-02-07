import { Button, FormField, Spinner } from "@/shared/components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserLoginSchema } from "../../model/user-schema";
import { AxiosError } from "axios";

import { LoginFormData } from "../../model/login-form.types";

interface LoginFormProps {
  onSubmit: any;
  isLoading: boolean;
  error: unknown;
}

export const LoginForm = ({ onSubmit, isLoading, error }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(UserLoginSchema),
  });

  if (error instanceof AxiosError)
    return (
      <span className='text-balance text-red-600 text-center'>
        {error.response?.data?.message}
      </span>
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid gap-2'>
        <div className='grid gap-1'>
          <FormField
            label='Email'
            type='email'
            placeholder='name@example.com'
            name='email'
            register={register}
            error={errors.email}
          />
          <FormField
            label='Password'
            type='password'
            placeholder='********'
            name='password'
            register={register}
            error={errors.password}
          />
        </div>
        <Button type='submit' disabled={isLoading}>
          {isLoading && <Spinner />}
          Continue
        </Button>
      </div>
    </form>
  );
};
