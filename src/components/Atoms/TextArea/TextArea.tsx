import { TextareaHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const textAreaVariants = cva(
  `block w-full px-4 py-2 bg-gray-200 dark:bg-gray-900 border text-gray-800 dark:text-gray-400 resize-none
  transition-colors placeholder:text-gray-500
  focus:outline-none disabled:cursor-not-allowed disabled:opacity-50
  rounded-lg border-2`,
  {
    variants: {
      variant: {
        primary: "hover:border-emerald-600",
        secondary: "hover:border-violet-800",
        tertiary: "hover:border-blue-600",
      },
      error: {
        true: "border-red-500",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        error: false,
        className:
          "border-emerald-700 hover:border-emerald-800 focus:ring-2 focus:ring-emerald-500",
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
          "border-blue-700 hover:border-blue-800 focus:ring-2 focus:ring-blue-500",
      },
    ],
    defaultVariants: {
      variant: "primary",
      error: false,
    },
  },
);

export interface TextAreaProps
  extends
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textAreaVariants> {
  label?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ variant, error, label, style, ...props }, ref) => {
    return (
      <label className="flex flex-col gap-0">
        <span className="text-gray-800 dark:text-gray-300">{label}</span>
        <textarea
          ref={ref}
          rows={4}
          aria-invalid={error === true ? true : undefined}
          className={textAreaVariants({ variant, error })}
          style={style}
          {...props}
        />
      </label>
    );
  },
);

TextArea.displayName = "TextArea";

export default TextArea;
