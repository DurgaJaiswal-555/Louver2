import React from "react";
import { cn } from "@lib/cn";

import type { TagLabelProps } from "./tagLabel.type";

export const TagLabel = React.forwardRef<HTMLDivElement, TagLabelProps>(
  (
    {
      variant = "default",
      size = "md",
      leftIcon,
      rightIcon,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium select-none";

    const variants = {
      default: "bg-gray-200 text-gray-900",
      secondary: "bg-gray-100 text-gray-700",
      outline: "border border-gray-300 text-gray-800",
    };

    const sizes = {
      sm: "h-7 px-3 text-xs",
      md: "h-8 px-4 text-sm",
      lg: "h-10 px-5 text-base",
    };

    return (
      <div
        ref={ref}
        aria-hidden
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
      </div>
    );
  }
);

TagLabel.displayName = "TagLabel";
