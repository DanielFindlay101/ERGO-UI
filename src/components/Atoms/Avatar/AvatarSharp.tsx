import { ImgHTMLAttributes, forwardRef } from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const avatarVariants = cva("relative inline-block shrink-0 rounded-none");

const imageVariants = cva("w-full h-full object-cover rounded-none");

const indicatorVariants = cva(
  "absolute block border border-gray-900 rounded-none top-[-5px] right-[-5px]",
  {
    variants: {
      status: {
        online: "bg-emerald-500",
        away: "bg-amber-400",
        offline: "bg-red-500",
      },
    },
  },
);

export type AvatarStatus = "online" | "away" | "offline";

export interface AvatarProps extends Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "width" | "height"
> {
  status?: AvatarStatus;
  size?: number;
}

const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  ({ status, size = 48, src, alt, className, ...props }, ref) => {
    const indicatorSize = Math.max(8, Math.round(size * 0.22));

    return (
      <div
        className={twMerge(avatarVariants(), className)}
        style={{ width: size, height: size }}
      >
        <img
          ref={ref}
          src={src}
          alt={alt ?? "avatar"}
          className={imageVariants()}
          style={{ width: size, height: size }}
          {...props}
        />
        {status && (
          <span
            role="img"
            aria-label={status}
            className={indicatorVariants({ status })}
            style={{ width: indicatorSize, height: indicatorSize }}
          />
        )}
      </div>
    );
  },
);

Avatar.displayName = "Avatar";

export default Avatar;
