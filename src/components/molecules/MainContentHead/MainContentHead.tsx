import React from "react";
import { Button, Breadcrumb } from "../../atoms";
import type { BreadcrumbItem } from "../../atoms/Breadcrumb/Breadcrumb";
import classNames from "classnames";

export interface MainContentHeadAction {
  label: string;
  onClick: () => void;
  leadingIcon?: string;
}

export interface MainContentHeadProps {
  breadcrumbs: BreadcrumbItem[];
  actions?: MainContentHeadAction[];
  className?: string;
  children?: React.ReactNode;
  onMenuClick?: () => void;
}

export const MainContentHead: React.FC<MainContentHeadProps> = ({
  breadcrumbs,
  actions = [],
  className = "",
  children,
  onMenuClick,
}) => {
  return (
    <div className={classNames("space-y-6", className)}>
      <div className="h-9 flex items-center justify-between">
        <Breadcrumb items={breadcrumbs} />
        <div className="flex items-center gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              onClick={action.onClick}
              leadingIcon={action.leadingIcon}
              size="medium"
              variant="tertiary"
            >
              {action.label}
            </Button>
          ))}
          <button
            onClick={onMenuClick}
            className="xl:hidden p-2 rounded-md hover:bg-surface-hover"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {children && (
        <div className="space-y-1">
          {children}
        </div>
      )}
    </div>
  );
};

export default MainContentHead;
