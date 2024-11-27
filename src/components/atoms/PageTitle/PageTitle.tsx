import React from "react";
import classNames from "classnames";

interface PageTitleProps {
  title: string;
  description?: string;
  className?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({
  title,
  description,
  className = "",
}) => {
  return (
    <div className={classNames("space-y-1", className)}>
      <h1 className="text-headline-s text-content-primary">{title}</h1>
      {description && (
        <p className="text-body-m text-content-secondary">{description}</p>
      )}
    </div>
  );
};

export { PageTitle };
