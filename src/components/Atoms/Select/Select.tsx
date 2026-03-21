import { SelectHTMLAttributes, ReactNode, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const selectVariants = cva(
  `w-full pl-4 pr-10 py-2 text-base bg-white dark:bg-gray-900 border text-gray-800 dark:text-gray-400 appearance-none
  transition-colors focus:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
  {
    variants: {
      error: {
        true: "border-red-500",
        false: "border-emerald-700 focus:ring-2 focus:ring-emerald-500",
      },
      sharp: {
        true: "rounded-none",
        false: "rounded-lg",
      },
    },
    defaultVariants: {
      error: false,
      sharp: false,
    },
  },
);

const sharpWrapperVariants = cva("inline-block p-px", {
  variants: {
    error: {
      true: "bg-red-500",
      false: "bg-emerald-700 focus-within:bg-emerald-500",
    },
  },
  defaultVariants: {
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
  customColour?: string;
  children: ReactNode;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { className, error, sharp, label, customColour, style, children, ...props },
    ref,
  ) => {
    const inner = (
      <div className="relative">
        <select
          ref={ref}
          aria-invalid={error === true ? true : undefined}
          className={selectVariants({ error, sharp, className })}
          style={
            sharp
              ? { clipPath: SHARP_SELECT_CLIP_PATH, ...style }
              : { borderColor: customColour, ...style }
          }
          {...props}
        >
          {children}
        </select>
        <span aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
          <ChevronDownIcon className="w-4 h-4" />
        </span>
      </div>
    );

    if (sharp) {
      return (
        <label className="flex flex-col gap-0">
          <span className="text-gray-800 dark:text-gray-300">{label}</span>
          <div
            className={sharpWrapperVariants({ error })}
            style={
              customColour
                ? {
                    backgroundColor: customColour,
                    clipPath: SHARP_SELECT_CLIP_PATH,
                  }
                : { clipPath: SHARP_SELECT_CLIP_PATH }
            }
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
