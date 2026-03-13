import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  `font-semibold transition-colors border-transparent focus:outline-none focus-visible:outline-none
   focus:ring-2 focus:ring-gray-900 disabled:opacity-50 inline-flex items-center justify-center gap-2`,
  {
    variants: {
      variant: {
        primary: "bg-emerald-500 text-white hover:bg-emerald-600",
        secondary: "bg-violet-700 text-white hover:bg-violet-800",
        tertiary: "bg-blue-500 text-white hover:bg-blue-600",
        ghost: "bg-transparent text-slate-200 hover:bg-gray-600",
        danger: "bg-red-500 text-white hover:bg-red-600",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      sharp: {
        true: "rounded-none active:opacity-75",
        false: "rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      sharp: false,
    },
  },
);

const SHARP_BUTTON_CLIP_PATH =
  "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)";

export interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      sharp,
      icon,
      iconPosition = "left",
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, sharp, className })}
        style={sharp ? { clipPath: SHARP_BUTTON_CLIP_PATH } : undefined}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <span className="inline-flex">{icon}</span>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span className="inline-flex">{icon}</span>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
