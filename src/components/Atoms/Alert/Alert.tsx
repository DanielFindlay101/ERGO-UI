import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const iconPanelVariants = cva("flex justify-center items-center p-3", {
  variants: {
    variant: {
      complete: "bg-emerald-500",
      info: "bg-blue-500",
      secondary: "bg-violet-700",
      danger: "bg-red-500",
    },
    sharp: {
      true: "",
      false: "rounded-l-2xl",
    },
  },
  defaultVariants: { variant: "complete", sharp: false },
});

const headerVariants = cva("px-4 py-2", {
  variants: {
    variant: {
      complete: "bg-emerald-500",
      info: "bg-blue-500",
      secondary: "bg-violet-700",
      danger: "bg-red-500",
    },
    sharp: {
      true: "",
      false: "rounded-tr-2xl",
    },
  },
  defaultVariants: { variant: "complete", sharp: false },
});

const rightPanelVariants = cva("bg-gray-500 flex-1", {
  variants: {
    sharp: {
      true: "",
      false: "rounded-r-2xl",
    },
  },
  defaultVariants: { sharp: false },
});

const SHARP_ALERT_CLIP_PATH =
  "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)";

export interface AlertProps extends VariantProps<typeof iconPanelVariants> {
  alertIcon?: ReactNode;
  headingText: string;
  bodyText: string;
  customColour?: string;
}

export default function Alert({
  variant,
  sharp,
  alertIcon,
  headingText,
  bodyText,
  customColour,
}: AlertProps) {
  const colourStyle = customColour ? { backgroundColor: customColour } : undefined;

  return (
    <div
      role="alert"
      className="flex max-w-[600px]"
      style={sharp ? { clipPath: SHARP_ALERT_CLIP_PATH } : undefined}
    >
      <div className={iconPanelVariants({ variant, sharp })} style={colourStyle}>
        <span aria-hidden="true">{alertIcon}</span>
      </div>
      <div className={rightPanelVariants({ sharp })}>
        <div className={headerVariants({ variant, sharp })} style={colourStyle}>
          <span className="text-white text-lg font-semibold">{headingText}</span>
        </div>
        <div className="p-4">
          <p className="text-slate-200">{bodyText}</p>
        </div>
      </div>
    </div>
  );
}
