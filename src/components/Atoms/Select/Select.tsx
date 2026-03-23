import { SelectHTMLAttributes, ReactNode, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const selectVariants = cva(
  `w-full pl-4 pr-10 py-2 text-base bg-gray-200 dark:bg-gray-900 border-2 text-gray-800 dark:text-gray-400 appearance-none
  transition-colors hover:cursor-pointer focus:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
  {
    variants: {
      variant: {
        primary: "",
        secondary: "",
        tertiary: "",
      },
      error: {
        true: "border-red-500 hover:border-red-600 focus:ring-2 focus:ring-red-400",
        false: "",
      },
      sharp: {
        true: "rounded-none",
        false: "rounded-lg",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        error: false,
        className:
          "border-emerald-700 hover:border-emerald-600 focus:ring-2 focus:ring-emerald-500",
      },
      {
        variant: "secondary",
        error: false,
        className:
          "border-violet-700 hover:border-violet-800 focus:ring-2 focus:ring-violet-500",
      },
      {
        variant: "tertiary",
        error: false,
        className:
          "border-blue-700 hover:border-blue-600 focus:ring-2 focus:ring-blue-500",
      },
    ],
    defaultVariants: {
      variant: "primary",
      error: false,
      sharp: false,
    },
  },
);

const sharpWrapperVariants = cva("inline-block p-[2px]", {
  variants: {
    variant: {
      primary: "",
      secondary: "",
      tertiary: "",
    },
    error: {
      true: "bg-red-500 focus:ring-2 focus:ring-red-400",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: "primary",
      error: false,
      className: "bg-emerald-700 focus-within:bg-emerald-500",
    },
    {
      variant: "secondary",
      error: false,
      className: "bg-violet-700 focus-within:bg-violet-500",
    },
    {
      variant: "tertiary",
      error: false,
      className: "bg-blue-700 focus-within:bg-blue-500",
    },
  ],
  defaultVariants: {
    variant: "primary",
    error: false,
  },
});

const SHARP_SELECT_CLIP_PATH =
  "polygon(0% 0%, 100% 0%, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0% 100%)";

export interface SelectProps
  extends
    SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof selectVariants> {
  label: string;
  children: ReactNode;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ variant, error, sharp, label, style, children, ...props }, ref) => {
    const inner = (
      <div className="relative">
        <select
          ref={ref}
          aria-invalid={error === true ? true : undefined}
          className={selectVariants({ variant, error, sharp })}
          style={sharp ? { clipPath: SHARP_SELECT_CLIP_PATH, ...style } : style}
          {...props}
        >
          {children}
        </select>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
        >
          <ChevronDownIcon className="w-4 h-4" />
        </span>
      </div>
    );

    if (sharp) {
      return (
        <label className="flex flex-col gap-0">
          <span className="text-gray-800 dark:text-gray-300">{label}</span>
          <div
            className={sharpWrapperVariants({ variant, error })}
            style={{ clipPath: SHARP_SELECT_CLIP_PATH }}
          >
            {inner}
          </div>
        </label>
      );
    }

    return (
      <label className="flex flex-col gap-0">
        <span className="text-gray-800 dark:text-gray-300">{label}</span>
        {inner}
      </label>
    );
  },
);

Select.displayName = "Select";

export default Select;
