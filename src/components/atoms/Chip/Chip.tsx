import React from "react";
import classNames from "classnames";

export type ChipVariant =
  | "success"
  | "error"
  | "warning"
  | "info"
  | "neutral"
  | "primary";

const variantClasses: Record<
  ChipVariant,
  { background: string; text: string }
> = {
  success: {
    background: "bg-surface-success",
    text: "text-content-success",
  },
  error: {
    background: "bg-surface-error",
    text: "text-content-error",
  },
  warning: {
    background: "bg-surface-caution",
    text: "text-content-caution",
  },
  info: {
    background: "bg-surface-secondary",
    text: "text-content-info",
  },
  neutral: {
    background: "bg-bg",
    text: "text-content",
  },
  primary: {
    background: "bg-surface-primary",
    text: "text-content-primary",
  },
};

export interface ChipProps {
  variant: ChipVariant;
  children: React.ReactNode;
  className?: string;
  leadingIcon?: string;
  onClose?: () => void;
  disabled?: boolean;
}

export const Chip = ({
  variant,
  children,
  className,
  leadingIcon,
  onClose,
  disabled = false,
}: ChipProps) => {
  const variantStyle = variantClasses[variant];

  return (
    <div
      className={classNames(
        "inline-flex items-center px-2 h-6 rounded-[10px] text-[13px] font-medium",
        variantStyle.background,
        variantStyle.text,
        {
          "opacity-50 cursor-not-allowed": disabled,
          "cursor-default": !disabled,
        },
        className
      )}
    >
      {leadingIcon && (
        <span className="material-symbols-rounded mr-1.5 text-[16px]">
          {leadingIcon}
        </span>
      )}
      {children}
      {onClose && !disabled && (
        <button
          onClick={onClose}
          className={classNames(
            "material-symbols-rounded ml-1 text-[16px] hover:opacity-80",
            "cursor-pointer focus:outline-none"
          )}
          type="button"
        >
          close
        </button>
      )}
    </div>
  );
};
