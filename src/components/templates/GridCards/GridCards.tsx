import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

export interface GridCardsProps {
  children: React.ReactNode;
  className?: string;
}

export const GridCards: React.FC<GridCardsProps> = ({
  children,
  className,
}) => {
  return (
    <div className={classNames("grid grid-cols-12 gap-6 p-6", className)}>
      {children}
    </div>
  );
};

export interface CardProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
  colSpan?: number;
  to?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  children,
  className,
  colSpan = 4,
  to,
}) => {
  const CardWrapper = to ? Link : "div";

  return (
    <CardWrapper
      to={to || ""}
      className={classNames(
        "bg-surface rounded-lg border border-border-secondary p-6",
        `col-span-12 md:col-span-6 lg:col-span-${colSpan}`,
        to &&
          "hover:border-border-primary hover:shadow-sm transition-all cursor-pointer",
        className
      )}
    >
      <h3 className="text-title-l mb-4 text-content-primary">{title}</h3>
      {children && (
        <div className="text-body-m text-content-secondary">{children}</div>
      )}
    </CardWrapper>
  );
};

export default GridCards;
