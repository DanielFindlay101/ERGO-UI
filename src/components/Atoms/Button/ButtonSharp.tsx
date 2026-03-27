import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  `font-semibold transition-colors focus:outline-none focus-visible:outline-none
   focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2
   rounded-none active:opacity-75`,
  {
    variants: {
      variant: {
        primary: "focus:ring-emerald-400",
        secondary: "focus:ring-violet-500",
        tertiary: "focus:ring-blue-500",
        ghost: "",
        danger: "focus:ring-red-400",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      outline: {
        true: "border",
        false: "border-transparent",
      },
    },
    compoundVariants: [
      {
        outline: true,
        className: "bg-gray-950 border-transparent hover:bg-gray-800",
      },
      {
        outline: true,
        variant: "primary",
        className:
          "text-emerald-500 hover:text-emerald-600 border-emerald-500 hover:border-emerald-600",
      },
      {
        outline: true,
        variant: "secondary",
        className:
          "text-violet-700 hover:text-violet-800 border-violet-700 hover:border-violet-800",
      },
      {
        outline: true,
        variant: "tertiary",
        className:
          "text-blue-500 hover:text-blue-600 border-blue-500 hover:border-blue-600",
      },
      {
        outline: true,
        variant: "danger",
        className:
          "text-red-500 hover:text-red-600 border-red-500 hover:border-red-600",
      },
      {
        outline: false,
        variant: "primary",
        className: "bg-emerald-500 text-white hover:bg-emerald-600",
      },
      {
        outline: false,
        variant: "secondary",
        className: "bg-violet-700 text-white hover:bg-violet-800",
      },
      {
        outline: false,
        variant: "ghost",
        className:
          "bg-transparent text-gray-800 dark:text-slate-200 hover:text-white hover:bg-gray-600 focus:ring-gray-400",
      },
      {
        outline: false,
        variant: "tertiary",
        className: "bg-blue-500 text-white hover:bg-blue-600",
      },
      {
        outline: false,
        variant: "danger",
        className: "bg-red-500 text-white hover:bg-red-600",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      outline: false,
    },
  },
);

const sharpOutlineWrapperVariants = cva("inline-block p-px", {
  variants: {
    variant: {
      primary: "bg-emerald-500",
      secondary: "bg-violet-700",
      tertiary: "bg-blue-500",
      ghost: "bg-slate-400",
      danger: "bg-red-500",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const SHARP_BUTTON_CLIP_PATH =
  "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)";

export interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      outline,
      icon,
      iconPosition = "left",
      children,
      style,
      loading,
      ...props
    },
    ref,
  ) => {
    const button = (
      <button
        disabled={loading}
        aria-busy={loading}
        ref={ref}
        className={twMerge(
          buttonVariants({ variant, size, outline }),
          loading && "opacity-50 cursor-not-allowed",
          className,
        )}
        style={{ clipPath: SHARP_BUTTON_CLIP_PATH, ...style }}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <span className="inline-flex" aria-hidden="true">
            {icon}
          </span>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span className="inline-flex" aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    );

    if (outline) {
      return (
        <div
          className={sharpOutlineWrapperVariants({ variant })}
          style={{ clipPath: SHARP_BUTTON_CLIP_PATH }}
        >
          {button}
        </div>
      );
    }

    return button;
  },
);

Button.displayName = "Button";

export default Button;
