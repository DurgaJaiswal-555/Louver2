import React from "react";

export interface InputFieldWithIconButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "outline" | "subtle";
  inputSize?: "sm" | "md" | "lg";
  rightButtonIcon?: React.ReactNode;
  onRightButtonClick?: () => void;
}

