import React from "react";
import classNames from "classnames";

interface ContentContainerSlotsProps {
  header?: React.ReactNode;
  filters?: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

export const ContentContainerSlots: React.FC<ContentContainerSlotsProps> = ({
  header,
  filters,
  content,
  className = "",
}) => {
  return (
    <div
      className={classNames(
        // Base spacing - mobile first
        "space-y-6 pt-3 px-6 pb-6",
        // Tablet (md)
        "md:space-y-8",
        // Desktop (lg)
        "lg:space-y-9",
        className
      )}
    >
      {header && (
        <div className="content-header space-y-12 gap-y-4">{header}</div>
      )}

      {filters && <div className="content-filters">{filters}</div>}

      <div className="content-main">{content}</div>
    </div>
  );
};

export default ContentContainerSlots;
