import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const iconPanelVariants = cva(
  "flex justify-center items-center shadow-md dark:shadow-none p-3",
  {
    variants: {
      variant: {
        complete: "bg-emerald-500",
        info: "bg-blue-500",
        secondary: "bg-violet-700",
        danger: "bg-red-500",
      },
    },
    defaultVariants: { variant: "complete" },
  },
);

const headerVariants = cva("px-4 py-2", {
  variants: {
    variant: {
      complete: "bg-emerald-500",
      info: "bg-blue-500",
      secondary: "bg-violet-700",
      danger: "bg-red-500",
    },
  },
  defaultVariants: { variant: "complete" },
});

const bodyVariants = cva("bg-gray-200 dark:bg-gray-500 flex-1");

const SHARP_ALERT_CLIP_PATH =
  "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)";

export interface AlertProps extends VariantProps<typeof iconPanelVariants> {
  alertIcon?: ReactNode;
  headingText?: string;
  bodyText: string;
}

export default function Alert({
  variant,
  alertIcon,
  headingText,
  bodyText,
}: AlertProps) {
  return (
    <div
      role="alert"
      className={"flex max-w-[600px]"}
      style={{ clipPath: SHARP_ALERT_CLIP_PATH }}
    >
      <div className={iconPanelVariants({ variant })}>
        <span aria-hidden="true">{alertIcon}</span>
      </div>
      <div className={bodyVariants()}>
        <div className={headerVariants({ variant })}>
          {/* <span className="text-white text-lg font-semibold">
            {headingText}
          </span> */}
        </div>
        <div className="p-4">
          <h4 className="text-lg text-slate-black dark:text-white">
            {headingText}
          </h4>
          <p className="text-slate-800 dark:text-slate-200">{bodyText}</p>
        </div>
      </div>
    </div>
  );
}
