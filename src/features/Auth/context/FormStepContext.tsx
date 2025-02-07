import { createContext, ReactNode, useContext, useState } from "react";

type FormStep = { label: string };

interface FormStepContextType {
  step: number;
  steps: FormStep[];
  data: unknown[];
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  handleData: (newData: unknown) => void;
}

const FormStepContext = createContext<FormStepContextType | undefined>(
  undefined
);

export const FormStepProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState<number>(1);
  const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }];
  const [data, setData] = useState<unknown[]>([]);
  const handleNextStep = () => setStep((prev) => prev + 1);
  const handlePreviousStep = () => setStep((prev) => prev - 1);

  const handleData = (newData: unknown) =>
    setData((prev) => [...prev, newData]);
  return (
    <FormStepContext.Provider
      value={{
        step,
        steps,
        data,
        handleNextStep,
        handleData,
        handlePreviousStep,
      }}
    >
      {children}
    </FormStepContext.Provider>
  );
};

export const useStep = () => {
  const context = useContext(FormStepContext);
  if (!context) {
    throw new Error("useStep must be used within a StepProvider");
  }
  return context;
};
