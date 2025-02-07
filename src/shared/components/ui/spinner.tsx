import React from "react";
import { Button } from "./button";
import { cn } from "@/shared/lib/utils";

interface SpinnerProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  size?: "default" | "sm" | "lg";
  variant?: "default" | "secondary" | "destructive" | "outline";
}

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = "default", variant = "default", ...props }, ref) => (
    <div
      ref={ref}
      role='status'
      className={cn("inline-flex items-center", className)}
      {...props}
    >
      <Button
        variant={variant}
        size={size}
        className={cn(
          "relative overflow-hidden cursor-wait",
          size === "sm"
            ? "w-6 h-6 p-0"
            : size === "lg"
            ? "w-10 h-10 p-0"
            : "w-8 h-8 p-0"
        )}
        disabled
      >
        <svg
          className='animate-spin h-full w-full'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
        >
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            strokeWidth='4'
          ></circle>
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          ></path>
        </svg>
        <span className='sr-only'>Loading...</span>
      </Button>
    </div>
  )
);

Spinner.displayName = "Spinner";
