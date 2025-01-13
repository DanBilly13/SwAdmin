import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  maxItems?: number;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  className = "",
  maxItems,
}) => {
  const displayItems =
    maxItems && items.length > maxItems
      ? [
          ...items.slice(0, 1),
          { label: "...", href: "#" },
          ...items.slice(items.length - (maxItems - 2)),
        ]
      : items;

  return (
    <nav className={classNames("flex items-center", className)}>
      {displayItems.map((item, index) => (
        <React.Fragment key={item.href}>
          {index > 0 && (
            <span className="material-symbols-rounded text-content-secondary select-none mx-1 text-sm">
              chevron_right
            </span>
          )}
          {item.href === "#" ? (
            <span className="text-body-s text-content-secondary">
              {item.label}
            </span>
          ) : (
            <Link
              to={item.href}
              className={classNames(
                "text-body-s",
                index === displayItems.length - 1
                  ? "text-content-primary"
                  : "text-content-secondary hover:text-content-primary"
              )}
            >
              {item.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
