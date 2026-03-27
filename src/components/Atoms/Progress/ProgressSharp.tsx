import { HTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const progressVariants = cva("", {
  variants: {
    variant: {
      primary: "",
      secondary: "",
      tertiary: "",
    },
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

const VARIANT_HEX: Record<string, string> = {
  primary: "#10b981",
  secondary: "#8b5cf6",
  tertiary: "#3b82f6",
};

const BAR_TRACK_HEIGHT = { sm: "h-1.5", md: "h-3", lg: "h-5" };
const CIRCULAR_DIAMETER = { sm: 64, md: 96, lg: 128 };

export interface ProgressProps
  extends
    Omit<HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof progressVariants> {
  value: number;
  type?: "bar" | "circular";
  showLabel?: boolean;
  label?: string;
}

const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      variant = "primary",
      size = "md",
      value,
      type = "bar",
      showLabel = false,
      label,
      style,
      ...props
    },
    ref,
  ) => {
    const clampedValue = Math.max(0, Math.min(100, value));
    const color = VARIANT_HEX[variant ?? "primary"] ?? VARIANT_HEX.primary;

    if (type === "circular") {
      const diameter = CIRCULAR_DIAMETER[size ?? "md"];
      const strokeWidth = Math.max(6, Math.round(diameter * 0.1));
      const radius = (diameter - strokeWidth) / 2;
      const circumference = 2 * Math.PI * radius;
      const dashOffset = circumference * (1 - clampedValue / 100);
      const center = diameter / 2;

      return (
        <div className="flex flex-col space-y-2">
          <span className="text-base text-gray-800 dark:text-gray-300">
            {label}
          </span>
          <div
            ref={ref}
            role="progressbar"
            aria-valuenow={clampedValue}
            aria-valuemin={0}
            aria-valuemax={100}
            className="relative inline-flex items-center justify-center"
            style={{ width: diameter, height: diameter, ...style }}
            {...props}
          >
            <svg
              width={diameter}
              height={diameter}
              style={{ transform: "rotate(-90deg)" }}
            >
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                className="stroke-gray-200 dark:stroke-gray-700"
                strokeWidth={strokeWidth}
              />
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                strokeLinecap="butt"
                style={{ transition: "stroke-dashoffset 0.5s ease" }}
              />
            </svg>
            {showLabel && (
              <span
                className="absolute text-gray-800 dark:text-gray-300 font-semibold tabular-nums"
                style={{ fontSize: Math.round(diameter * 0.2) }}
              >
                {clampedValue}%
              </span>
            )}
          </div>
        </div>
      );
    }

    // Bar type
    const heightClass = BAR_TRACK_HEIGHT[size ?? "md"];

    return (
      <div className="space-y-1">
        <span className="text-sm text-gray-800 dark:text-gray-300">
          {label}
        </span>
        <div
          ref={ref}
          className="flex items-center gap-2"
          style={style}
          {...props}
        >
          <div
            role="progressbar"
            aria-valuenow={clampedValue}
            aria-valuemin={0}
            aria-valuemax={100}
            className={`flex-1 overflow-hidden bg-gray-200 dark:bg-gray-700 ${heightClass} rounded-none`}
          >
            <div
              className="h-full rounded-none transition-all duration-500"
              style={{ width: `${clampedValue}%`, backgroundColor: color }}
            />
          </div>
          {showLabel && (
            <span className="text-sm text-gray-800 dark:text-gray-300 tabular-nums min-w-[3ch] text-right">
              {clampedValue}%
            </span>
          )}
        </div>
      </div>
    );
  },
);

Progress.displayName = "Progress";

export default Progress;
