import React from "react";
import { cn } from "@lib/cn";

import type { OnlyIconButtonProps } from "./iconBtn.type";

export const OnlyIconButton = React.forwardRef<
  HTMLButtonElement,
  OnlyIconButtonProps
>(
  (
    { variant = "default", size = "md", icon, className, ...props },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-full font-medium select-none cursor-pointer";

    const variants = {
      default: "bg-gray-200 text-gray-900",
      secondary: "bg-gray-100 text-gray-700",
      outline: "border border-gray-300 text-gray-800 bg-transparent",
    };

    const sizes = {
      sm: "h-7 w-7 text-xs",
      md: "h-8 w-8 text-sm",
      lg: "h-10 w-10 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        <span className="flex items-center">{icon}</span>
      </button>
    );
  }
);

OnlyIconButton.displayName = "OnlyIconButton";
