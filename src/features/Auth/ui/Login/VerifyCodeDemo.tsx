import { Button } from "@/shared/components";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/shared/components/ui/input-otp";
import { useState } from "react";
import { useStep } from "../../context/FormStepContext";

export function VerifyCode() {
  const [code, setCode] = useState("");
  const { handlePreviousStep, data } = useStep();

  const handleSubmit = () => {
    alert(JSON.stringify([...data, code]));
  };
  return (
    <div className='flex flex-col justify-center items-center'>
      <InputOTP value={code} onChange={(value) => setCode(value)} maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <div className='text-center text-sm my-5'>
        {code === "" ? <>Enter your verification code.</> : <></>}
      </div>
      <div>
        <Button onClick={handlePreviousStep} className='mr-3'>
          Back
        </Button>
        {code.length === 6 && ( //подразумевается что будет проверка на код я тут просто накидал
          <Button onClick={handleSubmit}>Check Data</Button>
        )}
      </div>
    </div>
  );
}
