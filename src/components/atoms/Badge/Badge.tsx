import React from "react";
import classNames from "classnames";

export type BadgeVariant = "success" | "error" | "warning" | "info" | "neutral";

const variantClasses: Record<
  BadgeVariant,
  { background: string; icon: string; fill?: number; weight?: number }
> = {
  success: {
    background: "bg-content-success text-fill-on",
    icon: "check",
    fill: 1,
    weight: 700,
  },
  error: {
    background: "bg-content-error text-fill-on",
    icon: "priority_high",
    fill: 1,
    weight: 500,
  },
  warning: {
    background: "bg-content-caution text-fill-on",
    icon: "stat_0",
    fill: 1,
    weight: 700,
  },
  info: {
    background: "bg-content-info text-fill-on",
    icon: "info_i",
    fill: 0,
    weight: 600,
  },
  neutral: {
    background: "bg-content text-fill-on",
    icon: "circle",
    fill: 1,
    weight: 700,
  },
};

export interface BadgeProps {
  variant: BadgeVariant;
  className?: string;
  icon?: string | boolean;
}

export const Badge = ({ variant, className, icon }: BadgeProps) => {
  // Determine if we should show an icon and which one
  const showIcon = icon !== undefined && icon !== false;
  const iconName =
    typeof icon === "string" ? icon : variantClasses[variant].icon;

  const variantStyle = variantClasses[variant];

  return (
    <div
      className={classNames(
        "flex items-center justify-center rounded-full",
        {
          "w-6 h-6": !showIcon,
          "w-5 h-5": showIcon,
        },
        variantClasses[variant].background,
        className
      )}
    >
      {showIcon && (
        <span
          className="material-symbols-rounded text-xs text-white"
          style={{
            fontVariationSettings: `'FILL' ${variantStyle.fill || 0}, 'wght' ${
              variantStyle.weight || 400
            }`,
          }}
        >
          {iconName}
        </span>
      )}
    </div>
  );
};

export default Badge;
