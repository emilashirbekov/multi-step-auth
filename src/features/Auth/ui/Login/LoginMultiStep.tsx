import { useStep } from "../../context/FormStepContext";
import { LoginAuthForm } from "./LoginAuthForm";
import { StepTwo } from "./StepTwo";
import { VerifyCode } from "./VerifyCodeDemo";

enum LoginSteps {
  LOGIN = 1,
  STEP_TWO,
  VERIFY_CODE,
}
export const LoginMultiStep = () => {
  const { step } = useStep();

  switch (step) {
    case LoginSteps.LOGIN:
      return <LoginAuthForm />;
    case LoginSteps.STEP_TWO:
      return <StepTwo />;
    case LoginSteps.VERIFY_CODE:
      return <VerifyCode />;
    default:
      return null;
  }
};
