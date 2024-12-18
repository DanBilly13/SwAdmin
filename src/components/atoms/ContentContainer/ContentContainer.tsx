import React from "react";
import classNames from "classnames";

interface ContentContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const ContentContainer: React.FC<ContentContainerProps> = ({
  children,
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
        "lg:space-y-12",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
