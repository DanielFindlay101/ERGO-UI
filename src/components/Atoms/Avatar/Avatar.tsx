import { ImgHTMLAttributes, forwardRef } from "react";
import { cva } from "class-variance-authority";

const avatarVariants = cva("relative inline-block shrink-0", {
  variants: {
    sharp: {
      true: "rounded-none",
      false: "rounded-full",
    },
  },
  defaultVariants: {
    sharp: false,
  },
});

const imageVariants = cva("w-full h-full object-cover", {
  variants: {
    sharp: {
      true: "rounded-none",
      false: "rounded-full",
    },
  },
  defaultVariants: {
    sharp: false,
  },
});

const indicatorVariants = cva("absolute  block border border-gray-900", {
  variants: {
    status: {
      online: "bg-emerald-500",
      away: "bg-amber-400",
      offline: "bg-red-500",
    },
    sharp: {
      true: "rounded-none top-[-5px] right-[-5px]",
      false: "rounded-full top-0 right-0",
    },
  },
  defaultVariants: {
    sharp: false,
  },
});

export type AvatarStatus = "online" | "away" | "offline";

export interface AvatarProps extends Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "width" | "height"
> {
  sharp?: boolean;
  status?: AvatarStatus;
  size?: number;
  customColour?: string;
}

const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  ({ sharp, status, size = 48, src, alt, className, customColour, ...props }, ref) => {
    const indicatorSize = Math.max(8, Math.round(size * 0.22));

    return (
      <div
        className={avatarVariants({ sharp, className })}
        style={{ width: size, height: size }}
      >
        <img
          ref={ref}
          src={src}
          alt={alt ?? "avatar"}
          className={imageVariants({ sharp })}
          style={{ width: size, height: size }}
          {...props}
        />
        {status && (
          <span
            role="img"
            aria-label={status}
            className={indicatorVariants({ status, sharp })}
            style={{ width: indicatorSize, height: indicatorSize, ...(customColour ? { backgroundColor: customColour } : {}) }}
          />
        )}
      </div>
    );
  },
);

Avatar.displayName = "Avatar";

export default Avatar;
