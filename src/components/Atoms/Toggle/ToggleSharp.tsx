import { InputHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const toggleVariants = cva(
  "group relative inline-flex w-11 shrink-0 bg-gray-500 p-0.5 shadow-inner outline-offset-2 transition-colors duration-200 ease-in-out has-[:focus-visible]:outline-2 rounded-none",
  {
    variants: {
      variant: {
        primary: "has-[:checked]:bg-emerald-500 outline-emerald-500",
        secondary: "has-[:checked]:bg-violet-700 outline-violet-700",
        tertiary: "has-[:checked]:bg-blue-500 outline-blue-500",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

const slideVariants = cva(
  "size-5 rounded-none bg-white shadow-sm ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-[:checked]:translate-x-5",
);

export interface ToggleProps
  extends
    InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof toggleVariants> {}

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ variant, "aria-label": ariaLabel, className, ...props }, ref) => {
    return (
      <div className={twMerge(toggleVariants({ variant }), className)}>
        <span aria-hidden="true" className={slideVariants()} />
        <input
          ref={ref}
          name="track"
          type="checkbox"
          aria-label={ariaLabel ?? "Toggle"}
          className="absolute inset-0 size-full appearance-none focus:outline-hidden"
          {...props}
        />
      </div>
    );
  },
);

Toggle.displayName = "Toggle";

export default Toggle;
