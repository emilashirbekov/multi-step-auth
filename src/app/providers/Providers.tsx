import { FormStepProvider } from "@/features/Auth";
import { Fallback } from "@/shared/components";
import { Toaster } from "@/shared/components/ui/toaster";
import { FC } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "react-query";

interface IProviders {
  readonly children: JSX.Element;
}

const queryClient = new QueryClient();

export const Providers: FC<IProviders> = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <QueryClientProvider client={queryClient}>
        <FormStepProvider>
          {children}
          <Toaster />
        </FormStepProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};
