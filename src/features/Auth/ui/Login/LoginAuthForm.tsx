import { Spinner } from "@/shared/components";
import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";
import Google from "@/shared/assets/google-icon.webp";
import { LoginForm } from "./LoginForm";
import { useMutation } from "react-query";
import { AuthService } from "../../api/auth.service";
import { IUser } from "../../model/user-types";
import { useStep } from "../../context/FormStepContext";

export function LoginAuthForm({ ...props }) {
  const { mutateAsync, isLoading, error } = useMutation((data: IUser) => {
    return AuthService.login(data);
  });
  const { handleData, handleNextStep } = useStep();

  const onSubmit = async (data: IUser) => {
    await mutateAsync(data);
    handleData(data);
    handleNextStep();
  };

  return (
    <div>
      <div className={cn("grid gap-6")} {...props}>
        <LoginForm onSubmit={onSubmit} isLoading={isLoading} error={error} />
        <div className='relative'>
          <div className='absolute inset-0 flex items-center'>
            <span className='w-full border-t' />
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-background px-2 text-muted-foreground'>
              Or continue with
            </span>
          </div>
        </div>

        <Button variant='outline' type='button' disabled={isLoading}>
          {isLoading ? (
            <Spinner />
          ) : (
            <img
              src={Google}
              alt='google icon'
              className='w-5 h-5 bg-transparent'
            />
          )}
          Google
        </Button>
      </div>
    </div>
  );
}
