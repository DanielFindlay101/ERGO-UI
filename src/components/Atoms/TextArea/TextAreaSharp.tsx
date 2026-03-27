import { TextareaHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const textAreaVariants = cva(
  `block w-full px-4 py-2 bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-400 resize-none
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
    },
    defaultVariants: {
      variant: "primary",
      error: false,
    },
  },
);

const sharpWrapperVariants = cva("block p-[2px] border border-transparent", {
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

const SHARP_TEXTAREA_CLIP_PATH =
  "polygon(0% 0%, 100% 0%, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0% 100%)";

export interface TextAreaProps
  extends
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textAreaVariants> {
  label?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ variant, error, label, style, ...props }, ref) => {
    const textarea = (
      <textarea
        ref={ref}
        rows={4}
        aria-invalid={error === true ? true : undefined}
        className={textAreaVariants({ variant, error })}
        style={{ clipPath: SHARP_TEXTAREA_CLIP_PATH, ...style }}
        {...props}
      />
    );

    return (
      <label className="flex flex-col gap-0">
        <span className="text-gray-800 dark:text-gray-300">{label}</span>
        <div
          className={sharpWrapperVariants({ variant, error })}
          style={{ clipPath: SHARP_TEXTAREA_CLIP_PATH }}
        >
          {textarea}
        </div>
      </label>
    );
  },
);

TextArea.displayName = "TextArea";

export default TextArea;
