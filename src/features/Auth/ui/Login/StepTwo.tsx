import { Button, Input } from "@/shared/components";
import { useStep } from "../../context/FormStepContext";

export const StepTwo = () => {
  const { handleData, handleNextStep, handlePreviousStep } = useStep();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formValues = {
      username: formData.get("username") as string | null,
      phoneNumber: formData.get("phoneNumber") as string | null,
      date: formData.get("date") as string | null,
    };

    handleData(formValues);
    handleNextStep();
  };

  return (
    <div className='flex flex-col gap-4'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        <Input name='username' type='text' placeholder='username' />
        <Input name='phone number' type='number' placeholder='phone number' />
        <Input name='date' type='date' />
        <div className='flex justify-center items-center gap-3'>
          <Button onClick={handlePreviousStep} className='flex-1' type='submit'>
            Back
          </Button>
          <Button className='flex-1' type='submit'>
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
};
