import { HTMLAttributes, ReactNode, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const accordionVariants = cva("w-full bg-gray-500 text-white overflow-hidden", {
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

const contentVariants = cva(
  "border-l-4 px-4 pb-4 pt-3 text-gray-300 bg-gray-500",
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

const SHARP_ACCORDION_CLIP_PATH =
  "polygon(22px 0%, 100% 0%, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0% 100%, 0% 22px)";

export interface AccordionProps
  extends
    Omit<HTMLAttributes<HTMLDetailsElement>, "title">,
    VariantProps<typeof accordionVariants> {
  title: ReactNode;
  defaultOpen?: boolean;
  customColour?: string;
}

const Accordion = forwardRef<HTMLDetailsElement, AccordionProps>(
  (
    { className, sharp, variant, title, children, defaultOpen, customColour, ...props },
    ref,
  ) => {
    const details = (
      <details
        ref={ref}
        open={defaultOpen}
        className={`group ${accordionVariants({ sharp, variant, className })}`}
        style={sharp ? { clipPath: SHARP_ACCORDION_CLIP_PATH } : { borderColor: customColour }}
        {...props}
      >
        <summary className={summaryVariants({ variant })} style={{ backgroundColor: customColour }}>
          <span>{title}</span>
          <ChevronDownIcon className="h-5 w-5 flex-shrink-0 transition-transform duration-200 group-open:rotate-180" />
        </summary>
        <div className={contentVariants({ variant })} style={{ borderLeftColor: customColour }}>{children}</div>
      </details>
    );

    if (sharp) {
      return (
        <div
          className={wrapperVariants({ variant })}
          style={{ backgroundColor: customColour, clipPath: SHARP_ACCORDION_CLIP_PATH }}
        >
          {details}
        </div>
      );
    }

    return details;
  },
);

Accordion.displayName = "Accordion";

export default Accordion;
