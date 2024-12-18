import React from "react";
import { Button, Breadcrumb } from "../../atoms";
import type { BreadcrumbItem } from "../../atoms/Breadcrumb/Breadcrumb";
import classNames from "classnames";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

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
  const isMdScreen = useMediaQuery("(min-width: 768px)");

  return (
    <div className={classNames("space-y-6", className)}>
      {/* Container for responsive layout */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
        {/* Actions and menu button - top row on mobile, right side on desktop */}
        <div className="flex items-center justify-end sm:order-2 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              onClick={action.onClick}
              leadingIcon={isMdScreen ? action.leadingIcon : undefined}
              size={isMdScreen ? "medium" : "small"}
              variant="tertiary"
            >
              {action.label}
            </Button>
          ))}
          <button
            onClick={onMenuClick}
            className="xl:hidden p-2 rounded-md hover:bg-surface-hover"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* Breadcrumbs - bottom row on mobile, left side on desktop */}
        <div className="sm:order-1">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>
      {children && <div className="space-y-1">{children}</div>}
    </div>
  );
};

export default MainContentHead;
