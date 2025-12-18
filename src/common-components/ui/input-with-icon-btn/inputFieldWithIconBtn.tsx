import React from "react";
import { cn } from "@lib/cn";
import type { InputFieldWithIconButtonProps } from "./inputFieldWithIconBtn.type";

export const InputFieldWithIconButton = React.forwardRef<
    HTMLInputElement,
    InputFieldWithIconButtonProps
>(
    (
        {
            variant = "default",
            inputSize = "md",
            rightButtonIcon,
            onRightButtonClick,
            className,
            ...props
        },
        ref
    ) => {
        const variants = {
            default: "border border-gray-300 bg-white text-gray-900",
            outline: "border border-gray-400 bg-transparent text-gray-900",
            subtle: "border border-gray-200 bg-gray-50 text-gray-800",
        };

        const sizes = {
            sm: "h-8 text-sm pl-8",
            md: "h-10 text-base pl-9",
            lg: "h-12 text-lg pl-10",
        };

        return (
            <div className="relative w-full">

                {/* INPUT FIELD */}
                <input
                    ref={ref}
                    className={cn(
                        "w-full rounded-md outline-none transition-all",
                        variants[variant],
                        sizes[inputSize],
                        rightButtonIcon && {
                            "pr-8": inputSize === "sm",
                            "pr-10": inputSize === "md",
                            "pr-12": inputSize === "lg",
                        },
                        className
                    )}
                    {...props}
                />

                {/* RIGHT ICON BUTTON */}
                {rightButtonIcon && (
                    <button
                        type="button"
                        onClick={onRightButtonClick}
                        className={cn(
                            "absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full cursor-pointer",
                            {
                                "size-6": inputSize === "sm",
                                "size-7": inputSize === "md",
                                "size-12": inputSize === "lg",
                            }
                        )}
                    >
                        {rightButtonIcon}
                    </button>
                )}
            </div>
        );
    }
);

InputFieldWithIconButton.displayName = "InputFieldWithIconButton";
