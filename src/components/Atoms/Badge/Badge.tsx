import { HTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center justify-center font-semibold",
  {
    variants: {
      variant: {
        primary: "bg-emerald-500 text-white",
        secondary: "bg-violet-700 text-white",
        tertiary: "bg-blue-500 text-white",
        danger: "bg-red-500 text-white",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-1 text-sm",
        lg: "px-3 py-1.5 text-base",
      },
      sharp: {
        true: "rounded-none",
        false: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      sharp: false,
    },
  },
);

const SHARP_BADGE_CLIP_PATH =
  "polygon(6px 0%, 100% 0%, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0% 100%, 0% 6px)";

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
  customColour?: string;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, sharp, children, style, customColour, ...props }, ref) => {
    const colourStyle = customColour ? { backgroundColor: customColour } : undefined;
    return (
      <span
        ref={ref}
        className={badgeVariants({ variant, size, sharp, className })}
        style={sharp ? { clipPath: SHARP_BADGE_CLIP_PATH, ...colourStyle, ...style } : { ...colourStyle, ...style }}
        {...props}
      >
        {children}
      </span>
    );
  },
);

Badge.displayName = "Badge";

export default Badge;
