import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  `w-full py-2 text-base bg-gray-900 border text-gray-200
  transition-colors placeholder:text-gray-500
  focus:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
  {
    variants: {
      variant: {
        primary: "",
        secondary: "",
        tertiary: "",
      },
      error: {
        true: "border-red-500",
        false: "",
      },
      sharp: {
        true: "rounded-none",
        false: "rounded-lg",
      },
      iconLeft: {
        true: "pl-10 pr-4",
        false: "pr-10 pl-4",
      },
    },
    compoundVariants: [
      { variant: "primary", error: false, className: "border-emerald-700 focus:ring-2 focus:ring-emerald-500" },
      { variant: "secondary", error: false, className: "border-violet-700 focus:ring-2 focus:ring-violet-500" },
      { variant: "tertiary", error: false, className: "border-blue-700 focus:ring-2 focus:ring-blue-500" },
    ],
    defaultVariants: {
      variant: "primary",
      error: false,
      sharp: false,
      iconLeft: false,
    },
  },
);

const SHARP_INPUT_CLIP_PATH =
  "polygon(0% 0%, 100% 0%, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0% 100%)";

const sharpWrapperVariants = cva("inline-block p-px", {
  variants: {
    variant: {
      primary: "",
      secondary: "",
      tertiary: "",
    },
    error: {
      true: "bg-red-500",
      false: "",
    },
  },
  compoundVariants: [
    { variant: "primary", error: false, className: "bg-emerald-700 focus-within:bg-emerald-500" },
    { variant: "secondary", error: false, className: "bg-violet-700 focus-within:bg-violet-500" },
    { variant: "tertiary", error: false, className: "bg-blue-700 focus-within:bg-blue-500" },
  ],
  defaultVariants: {
    variant: "primary",
    error: false,
  },
});

export interface InputProps
  extends
    InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  icon?: ReactNode;
  label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      error,
      sharp,
      iconLeft,
      icon,
      placeholder,
      style,
      label,
      ...props
    },
    ref,
  ) => {
    const hasIcon = icon !== undefined && icon !== null;

    const input = (
      <input
        ref={ref}
        placeholder={placeholder}
        className={inputVariants({
          variant,
          error,
          sharp,
          iconLeft: hasIcon ? iconLeft : undefined,
          className,
        })}
        style={sharp ? { clipPath: SHARP_INPUT_CLIP_PATH, ...style } : style}
        {...props}
      />
    );

    const iconEl = hasIcon && (
      <span
        className={`absolute top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none ${
          iconLeft ? "left-3" : "right-3"
        }`}
      >
        {icon}
      </span>
    );

    const inner = hasIcon ? (
      <div className="relative flex items-center">
        {input}
        {iconEl}
      </div>
    ) : (
      input
    );

    if (sharp) {
      return (
        <label className="flex flex-col gap-0">
          <span className="text-gray-300">{label}</span>
          <div
            className={sharpWrapperVariants({ variant, error })}
            style={{ clipPath: SHARP_INPUT_CLIP_PATH }}
          >
            {inner}
          </div>
        </label>
      );
    }

    return (
      <label>
        <span className="text-gray-300">{label}</span>
        {inner}
      </label>
    );
  },
);

Input.displayName = "Input";

export default Input;
