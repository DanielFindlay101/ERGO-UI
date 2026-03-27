import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  `w-full py-2 bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-400
  transition-colors placeholder:text-gray-500
  focus:outline-none disabled:cursor-not-allowed disabled:opacity-50
  rounded-none !border-0`,
  {
    variants: {
      variant: {
        primary: "",
        secondary: "",
        tertiary: "",
      },
      error: {
        true: "",
        false: "",
      },
      iconLeft: {
        true: "pl-10 pr-4",
        false: "pr-10 pl-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      error: false,
      iconLeft: false,
    },
  },
);

const SHARP_INPUT_CLIP_PATH =
  "polygon(0% 0%, 100% 0%, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0% 100%)";

const sharpWrapperVariants = cva("inline-block p-[2px]", {
  variants: {
    variant: {
      primary: "bg-emerald-700 focus-within:bg-emerald-500",
      secondary: "bg-violet-700 focus-within:bg-violet-500",
      tertiary: "bg-blue-700 focus-within:bg-blue-500",
    },
    error: {
      true: "bg-red-500 focus:ring-2 focus:ring-red-400",
      false: "",
    },
  },
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
      variant,
      error,
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
        aria-invalid={error === true ? true : undefined}
        className={inputVariants({
          variant,
          error,
          iconLeft: hasIcon ? iconLeft : undefined,
        })}
        style={{ clipPath: SHARP_INPUT_CLIP_PATH, ...style }}
        {...props}
      />
    );

    const iconEl = hasIcon && (
      <span
        aria-hidden="true"
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

    return (
      <label className="flex flex-col gap-0">
        <span className="text-gray-800 dark:text-gray-300">{label}</span>
        <div
          className={sharpWrapperVariants({ variant, error })}
          style={{ clipPath: SHARP_INPUT_CLIP_PATH }}
        >
          {inner}
        </div>
      </label>
    );
  },
);

Input.displayName = "Input";

export default Input;
