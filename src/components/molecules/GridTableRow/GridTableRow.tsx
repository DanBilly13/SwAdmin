import React from "react";
import classNames from "classnames";

export interface GridTableRowProps {
  className?: string;
  children?: React.ReactNode;
  hasBorder?: boolean;
}

export const GridTableRow: React.FC<GridTableRowProps> = ({
  className,
  children,
  hasBorder = true,
}) => {
  return (
    <div
      className={classNames(
        "grid gap-0 md:gap-4", // No gap on mobile, 16px gap on md and up
        "grid-cols-16", // Default 16 columns for all breakpoints
        hasBorder && "border-b border-border",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GridTableRow;
