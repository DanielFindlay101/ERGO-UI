import { HTMLAttributes, ReactNode, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva(
  "w-full border-l-4 overflow-hidden shadow-md dark:shadow-none",
  {
    variants: {
      variant: {
        primary: "border-l-emerald-500",
        secondary: "border-l-violet-700",
        tertiary: "border-l-blue-500",
      },
      sharp: {
        true: "rounded-none",
        false: "rounded-lg border-2",
      },
    },
    compoundVariants: [
      {
        sharp: false,
        variant: "primary",
        className: "border-emerald-500",
      },
      {
        sharp: false,
        variant: "secondary",
        className: " border-violet-700",
      },
      {
        sharp: false,
        variant: "tertiary",
        className: "border-blue-500",
      },
      {
        sharp: true,
        variant: "primary",
        className: "bg-gray-200 dark:bg-gray-500",
      },
      {
        sharp: true,
        variant: "secondary",
        className: "bg-gray-200 dark:bg-gray-500",
      },
      {
        sharp: true,
        variant: "tertiary",
        className: "bg-gray-200 dark:bg-gray-500",
      },
    ],
    defaultVariants: {
      sharp: false,
      variant: "primary",
    },
  },
);

const headerVariants = cva(
  "w-full px-4 py-3 flex justify-between items-center font-semibold text-white",
  {
    variants: {
      variant: {
        primary: "",
        secondary: "",
        tertiary: "",
      },
      sharp: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      { sharp: true, variant: "primary", className: "bg-emerald-500/10" },
      { sharp: true, variant: "secondary", className: "" },
      { sharp: true, variant: "tertiary", className: "" },
      { sharp: false, variant: "primary", className: "bg-emerald-500/50" },
      { sharp: false, variant: "secondary", className: "bg-violet-700/50" },
      { sharp: false, variant: "tertiary", className: "bg-blue-500/50" },
    ],
    defaultVariants: {
      sharp: false,
      variant: "primary",
    },
  },
);

const bodyVariants = cva(
  "px-4 py-4 text-slate-600 dark:text-slate-200 bg-gray-200 dark:bg-gray-500",
  {
    variants: {
      variant: {
        primary: "",
        secondary: "",
        tertiary: "",
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
  headerIcon?: ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ sharp, variant, title, children, headerIcon, ...props }, ref) => {
    const card = (
      <div
        ref={ref}
        className={cardVariants({ sharp, variant })}
        style={sharp ? { clipPath: SHARP_CARD_CLIP_PATH } : undefined}
        {...props}
      >
        <div className={headerVariants({ variant, sharp })}>
          <h4 className="text-lg">{title}</h4>
          {headerIcon && (
            <span aria-hidden="true" className="text-white">
              {headerIcon}
            </span>
          )}
        </div>
        <div className={bodyVariants({ variant })}>{children}</div>
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
