import { HTMLAttributes, ReactNode, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Button from "../../Atoms/Button/Button";

const cardVariants = cva("w-full bg-gray-600 text-white overflow-hidden", {
  variants: {
    variant: {
      primary: "bg-emerald-500",
      secondary: "bg-violet-700",
      tertiary: "bg-blue-500",
    },
    sharp: {
      true: "rounded-none",
      false: "rounded-lg border",
    },
  },
  compoundVariants: [
    { sharp: false, variant: "primary", className: "border-emerald-500" },
    { sharp: false, variant: "secondary", className: "border-violet-700" },
    { sharp: false, variant: "tertiary", className: "border-blue-500" },
  ],
  defaultVariants: {
    sharp: false,
    variant: "primary",
  },
});

const headerVariants = cva("w-full px-4 py-3 font-semibold text-white", {
  variants: {
    variant: {
      primary: "bg-emerald-500",
      secondary: "bg-violet-700",
      tertiary: "bg-blue-500",
    },
  },
});

const bodyVariants = cva("border-l-4 px-4 py-4 text-slate-200 bg-gray-500", {
  variants: {
    variant: {
      primary: "border-l-emerald-500",
      secondary: "border-l-violet-700",
      tertiary: "border-l-blue-500",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const footerVariants = cva("border-l-4 px-4 py-3 bg-gray-500", {
  variants: {
    variant: {
      primary: "border-l-emerald-500",
      secondary: "border-l-violet-700",
      tertiary: "border-l-blue-500",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const wrapperVariants = cva("block p-px", {
  variants: {
    variant: {
      primary: "bg-emerald-500",
      secondary: "bg-violet-700",
      tertiary: "bg-blue-500",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const SHARP_CARD_CLIP_PATH =
  "polygon(22px 0%, 100% 0%, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0% 100%, 0% 22px)";

export interface CardProps
  extends
    Omit<HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof cardVariants> {
  title: ReactNode;
  primaryLabel?: string;
  ghostLabel?: string;
  onPrimary?: () => void;
  onGhost?: () => void;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      sharp,
      variant,
      title,
      children,
      primaryLabel = "Confirm",
      ghostLabel = "Cancel",
      onPrimary,
      onGhost,
      ...props
    },
    ref,
  ) => {
    const card = (
      <div
        ref={ref}
        className={cardVariants({ sharp, variant, className })}
        style={sharp ? { clipPath: SHARP_CARD_CLIP_PATH } : undefined}
        {...props}
      >
        <div className={headerVariants({ variant })}>
          <span className="text-lg">{title}</span>
        </div>
        <div className={bodyVariants({ variant })}>{children}</div>
        <div className={footerVariants({ variant })}>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" sharp={sharp} onClick={onGhost}>
              {ghostLabel}
            </Button>
            <Button variant={variant} sharp={sharp} onClick={onPrimary}>
              {primaryLabel}
            </Button>
          </div>
        </div>
      </div>
    );

    if (sharp) {
      return (
        <div
          className={wrapperVariants({ variant })}
          style={{ clipPath: SHARP_CARD_CLIP_PATH }}
        >
          {card}
        </div>
      );
    }

    return card;
  },
);

Card.displayName = "Card";

export default Card;
