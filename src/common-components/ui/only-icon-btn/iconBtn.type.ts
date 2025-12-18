import React from "react";

export interface OnlyIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon: React.ReactNode;
}
