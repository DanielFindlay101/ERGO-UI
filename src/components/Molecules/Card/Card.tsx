import { HTMLAttributes, ReactNode, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva("w-full overflow-hidden", {
  variants: {
    variant: {
      primary: "bg-emerald-500",
      secondary: "bg-violet-700",
      tertiary: "bg-blue-500",
    },
    sharp: {
      true: "rounded-none",
      false: "rounded-lg border-2",
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

const headerVariants = cva(
  "w-full px-4 py-3 flex justify-between items-center font-semibold text-white",
  {
    variants: {
      variant: {
        primary: "bg-emerald-500",
        secondary: "bg-violet-700",
        tertiary: "bg-blue-500",
      },
    },
  },
);

const bodyVariants = cva(
  "border-l-4 px-4 py-4 text-slate-600 dark:text-slate-200 bg-gray-200 dark:bg-gray-500",
  {
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
  },
);

const wrapperVariants = cva("block p-[2px]", {
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
  customColour?: string;
  headerIcon?: ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      sharp,
      variant,
      title,
      children,
      customColour,
      headerIcon,
      ...props
    },
    ref,
  ) => {
    const card = (
      <div
        ref={ref}
        className={cardVariants({ sharp, variant, className })}
        style={
          sharp
            ? { clipPath: SHARP_CARD_CLIP_PATH }
            : { borderColor: customColour }
        }
        {...props}
      >
        <div
          className={headerVariants({ variant })}
          style={{ backgroundColor: customColour }}
        >
          <h4 className="text-lg">{title}</h4>
          {headerIcon && (
            <span aria-hidden="true" className="text-white">
              {headerIcon}
            </span>
          )}
        </div>
        <div
          className={bodyVariants({ variant })}
          style={{ borderLeftColor: customColour }}
        >
          {children}
        </div>
      </div>
    );

    if (sharp) {
      return (
        <div
          className={wrapperVariants({ variant })}
          style={{
            backgroundColor: customColour,
            clipPath: SHARP_CARD_CLIP_PATH,
          }}
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
