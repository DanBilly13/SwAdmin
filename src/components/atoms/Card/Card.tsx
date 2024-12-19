import React from "react";
import classNames from "classnames";

export type CardVariant = "default" | "table";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: CardVariant;
}

const variantClasses: Record<CardVariant, string> = {
  default: "p-6",
  table: "px-6",
};

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = "default",
}) => {
  return (
    <div
      className={classNames(
        "rounded-lg border border-border-brand bg-surface-primary",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
