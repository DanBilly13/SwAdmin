import React from "react";
import classNames from "classnames";

export type ChipVariant = "primary" | "success" | "warning" | "error" | "info";

const variantClasses: Record<
  ChipVariant,
  { background: string; text: string }
> = {
  primary: {
    background: "bg-bg",
    text: "text-content",
  },
  success: {
    background: "bg-surface-success",
    text: "text-content-success",
  },
  warning: {
    background: "bg-surface-caution",
    text: "text-content-caution",
  },
  error: {
    background: "bg-surface-error",
    text: "text-content-error",
  },
  info: {
    background: "bg-bg",
    text: "text-content-secondary",
  },
};

export interface ChipProps {
  variant: ChipVariant;
  children: React.ReactNode;
  className?: string;
}

export const Chip = ({ variant, children, className }: ChipProps) => {
  const variantStyle = variantClasses[variant];

  return (
    <div
      className={classNames(
        "inline-flex items-center px-2 h-6 rounded-[10px] text-[13px] font-medium",
        variantStyle.background,
        variantStyle.text,
        className
      )}
    >
      {children}
    </div>
  );
};
