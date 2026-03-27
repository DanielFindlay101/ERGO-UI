import { HTMLAttributes, ReactNode, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const accordionVariants = cva(
  "w-full bg-gray-500 text-white shadow-md dark:shadow-none overflow-hidden rounded-none",
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

const summaryVariants = cva(
  "w-full flex list-none cursor-pointer select-none items-center justify-between px-4 py-3 font-semibold [&::-webkit-details-marker]:hidden",
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
  "border-l-4 px-4 pb-4 pt-3 text-slate-600 dark:text-slate-200 bg-gray-200 dark:bg-gray-500",
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

const SHARP_ACCORDION_CLIP_PATH =
  "polygon(22px 0%, 100% 0%, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0% 100%, 0% 22px)";

export interface AccordionProps
  extends
    Omit<HTMLAttributes<HTMLDetailsElement>, "title">,
    VariantProps<typeof accordionVariants> {
  title: ReactNode;
  defaultOpen?: boolean;
  icon?: ReactNode;
}

const Accordion = forwardRef<HTMLDetailsElement, AccordionProps>(
  ({ variant, title, children, defaultOpen, icon, ...props }, ref) => {
    const details = (
      <details
        ref={ref}
        open={defaultOpen}
        className={`group ${accordionVariants({ variant })}`}
        style={{ clipPath: SHARP_ACCORDION_CLIP_PATH }}
        {...props}
      >
        <summary className={summaryVariants({ variant })}>
          <div className="flex gap-2 items-center">
            {icon}
            <span>{title}</span>
          </div>
          <ChevronDownIcon
            aria-hidden="true"
            className="h-5 w-5 flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
          />
        </summary>
        <div className={bodyVariants({ variant })}>{children}</div>
      </details>
    );

    return (
      <div
        className={wrapperVariants({ variant })}
        style={{ clipPath: SHARP_ACCORDION_CLIP_PATH }}
      >
        {details}
      </div>
    );
  },
);

Accordion.displayName = "Accordion";

export default Accordion;
