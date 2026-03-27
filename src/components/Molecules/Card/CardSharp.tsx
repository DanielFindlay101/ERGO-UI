import { HTMLAttributes, ReactNode, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva(
  "w-full border-l-4 overflow-hidden shadow-md dark:shadow-none rounded-none",
  {
    variants: {
      variant: {
        primary: "border-l-emerald-500 bg-gray-200 dark:bg-gray-500",
        secondary: "border-l-violet-700 bg-gray-200 dark:bg-gray-500",
        tertiary: "border-l-blue-500 bg-gray-200 dark:bg-gray-500",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

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
    defaultVariants: {
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
  ({ variant, title, children, headerIcon, ...props }, ref) => {
    const card = (
      <div
        ref={ref}
        className={cardVariants({ variant })}
        style={{ clipPath: SHARP_CARD_CLIP_PATH }}
        {...props}
      >
        <div className={headerVariants({ variant })}>
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

    return (
      <div
        className={wrapperVariants({ variant })}
        style={{ clipPath: SHARP_CARD_CLIP_PATH }}
      >
        {card}
      </div>
    );
  },
);

Card.displayName = "Card";

export default Card;
