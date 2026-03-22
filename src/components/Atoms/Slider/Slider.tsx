import { InputHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const VARIANT_HEX: Record<string, string> = {
  primary: "#10b981",
  secondary: "#8b5cf6",
  tertiary: "#3b82f6",
};

const sliderVariants = cva(
  `w-full h-2 appearance-none cursor-pointer 
   bg-gray-200 dark:bg-gray-700
   [&::-webkit-slider-thumb]:appearance-none
   [&::-webkit-slider-thumb]:h-4
   [&::-webkit-slider-thumb]:w-4
   [&::-webkit-slider-thumb]:cursor-pointer
   [&::-webkit-slider-thumb]:bg-[var(--slider-color)]
   [&::-webkit-slider-thumb]:transition-transform
   [&::-webkit-slider-thumb]:hover:scale-110
   [&::-moz-range-thumb]:border-none
   [&::-moz-range-thumb]:h-4
   [&::-moz-range-thumb]:w-4
   [&::-moz-range-thumb]:cursor-pointer
   [&::-moz-range-thumb]:bg-[var(--slider-color)]
   [&::-moz-range-progress]:bg-[var(--slider-color)]
   [&::-moz-range-progress]:h-2
   disabled:opacity-50 disabled:cursor-not-allowed`,
  {
    variants: {
      variant: {
        primary: "",
        secondary: "",
        tertiary: "",
      },
      sharp: {
        true: "rounded-none [&::-webkit-slider-thumb]:rounded-none [&::-moz-range-thumb]:rounded-none",
        false:
          "rounded-full [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      sharp: false,
    },
  },
);

export interface SliderProps
  extends
    InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof sliderVariants> {
  label: string;
  customColour?: string;
}

const Slider = forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      className,
      variant = "primary",
      sharp,
      label,
      customColour,
      style,
      ...props
    },
    ref,
  ) => {
    const sliderColor =
      customColour ?? VARIANT_HEX[variant ?? "primary"] ?? VARIANT_HEX.primary;

    return (
      <label className="flex flex-col gap-2">
        <span className="text-sm text-gray-800 dark:text-gray-300">
          {label}
        </span>
        <input
          {...props}
          type="range"
          ref={ref}
          className={sliderVariants({ variant, sharp, className })}
          style={
            {
              "--slider-color": sliderColor,
              accentColor: sliderColor,
              ...style,
            } as React.CSSProperties
          }
        />
      </label>
    );
  },
);

Slider.displayName = "Slider";

export default Slider;
