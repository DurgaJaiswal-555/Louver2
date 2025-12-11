// src/components/ui/button/button.tsx
import React from "react";
import { cn } from "@lib/cn";

import type { ButtonProps } from "./button.type";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      isLoading,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-all disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
      outline: "border border-gray-300 text-gray-900 hover:bg-gray-100",
      ghost: "text-gray-900 hover:bg-gray-100",
    };

    const sizes = {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 text-sm",
      lg: "h-12 px-6 text-base",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {/* Left Icon */}
        {leftIcon && !isLoading && (
          <span className="mr-1 flex items-center">{leftIcon}</span>
        )}

        {/* Loading Text */}
        {isLoading ? "Loading..." : children}

        {/* Right Icon */}
        {rightIcon && !isLoading && (
          <span className="ml-1 flex items-center">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
