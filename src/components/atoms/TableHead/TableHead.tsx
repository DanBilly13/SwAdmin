import React from "react";
import classNames from "classnames";

export interface TableHeadProps {
  className?: string;
  children: React.ReactNode;
}

export const TableHead = ({ className, children }: TableHeadProps) => {
  return (
    <div className={classNames("-mx-6 rounded-t-lg border-b border-border bg-bg", className)}>
      <div className="px-6">{children}</div>
    </div>
  );
};

export default TableHead;
