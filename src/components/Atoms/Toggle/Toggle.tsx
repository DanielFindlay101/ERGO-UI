import { InputHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const toggleVariants = cva(
  "group relative inline-flex w-11 shrink-0 bg-gray-500 p-0.5 shadow-inner outline-offset-2 transition-colors duration-200 ease-in-out has-[:focus-visible]:outline-2",
  {
    variants: {
      variant: {
        primary: "has-[:checked]:bg-emerald-500 outline-emerald-500",
        secondary: "has-[:checked]:bg-violet-700 outline-violet-700",
        tertiary: "has-[:checked]:bg-blue-500 outline-blue-500",
      },
      sharp: {
        true: "rounded-none",
        false: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      sharp: false,
    },
  },
);

const slideVariants = cva(
  "size-5 rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-[:checked]:translate-x-5",
  {
    variants: {
      sharp: {
        true: "rounded-none",
        false: "rounded-full",
      },
    },
    defaultVariants: {
      sharp: false,
    },
  },
);

export interface ToggleProps
  extends
    InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof toggleVariants> {
  sharp?: boolean;
  customColour?: string;
}

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ variant, sharp, customColour }, ref) => {
    return (
      <div
        className={`${toggleVariants({ variant, sharp })}${customColour ? " has-[:checked]:[background-color:var(--toggle-color)]" : ""}`}
        style={customColour ? ({ "--toggle-color": customColour } as React.CSSProperties) : undefined}
      >
        <span id="slider" className={slideVariants({ sharp })} />
        <input
          ref={ref}
          name="track"
          type="checkbox"
          aria-label="Use setting"
          className="absolute inset-0 size-full appearance-none focus:outline-hidden"
        />
      </div>
    );
  },
);

Toggle.displayName = "Toggle";

export default Toggle;
