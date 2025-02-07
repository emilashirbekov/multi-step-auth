import { LoginMultiStep, useStep } from "@/features/Auth";
import { buttonVariants } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const { step, steps } = useStep();
  const currentStep = step;

  const Steps = (
    <div className='flex justify-between'>
      {steps.map((step, i) => (
        <div key={step.label}>
          <span
            style={{
              fontWeight: i + 1 === currentStep ? "bold" : "normal",
            }}
          >
            {step.label}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className='h-screen flex justify-center items-center'>
      <Link
        to='/register'
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8"
        )}
      >
        Register
      </Link>

      <div className='lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col space-y-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Log in to your account
            </h1>
            <p className='text-sm text-muted-foreground'>
              Enter your email and password below to log in
            </p>
          </div>

          {Steps}
          <LoginMultiStep />
          <p className='px-8 text-center text-sm text-muted-foreground'>
            By clicking continue, you agree to our{" "}
            <Link
              to='/'
              className='underline underline-offset-4 hover:text-primary'
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to='/privacy'
              className='underline underline-offset-4 hover:text-primary'
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
