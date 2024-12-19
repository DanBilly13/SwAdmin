import React from "react";

type SectionCardProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
};

export const SectionCard = ({
  title,
  children,
  className = "",
  action,
}: SectionCardProps) => {
  return (
    <div
      className={`p-6 rounded-lg border border-border-secondary bg-surface-primary ${className}`}
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-title-l">{title}</h2>
        {action && <div>{action}</div>}
      </div>
      <div className="space-y-8">{children}</div>
    </div>
  );
};
