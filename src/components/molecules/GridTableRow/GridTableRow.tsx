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
        "grid gap-4",
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
