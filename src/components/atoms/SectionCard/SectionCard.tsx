import React from "react";

type SectionCardProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
};

export const SectionCard = ({
  title,
  description,
  children,
  className = "",
  action,
}: SectionCardProps) => {
  return (
    <div
      className={`p-8 rounded-lg border border-secondary bg-surface-primary ${className}`}
    >
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-title-l">{title}</h2>
          {description && (
            <p className="text-body-m text-content-secondary mt-3">
              {description}
            </p>
          )}
        </div>
        {action && <div>{action}</div>}
      </div>
      <div className="space-y-8">{children}</div>
    </div>
  );
};
