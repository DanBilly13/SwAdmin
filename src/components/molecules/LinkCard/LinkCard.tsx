import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { Card } from "../../atoms/Card";
import Icon from "../../atoms/Icon";

export interface LinkCardProps {
  title: string;
  description: string;
  to?: string;
  icon: string;
  className?: string;
  variant?: "primary" | "secondary" | "success" | "warning" | "info";
}

const variantClasses = {
  primary: "bg-primary/5 border-border-secondary",
  secondary: "bg-secondary/5 border-border-secondary/20",
  success: "bg-success/5 border-border-success/20",
  warning: "bg-warning/5 border-border-error/20",
  info: "bg-info/5 border-border-focus/20",
};

export const LinkCard: React.FC<LinkCardProps> = ({
  title,
  description,
  to,
  icon,
  className,
  variant = "primary",
}) => {
  const CardContent = (
    <Card
      className={classNames(
        "transition-shadow duration-200 hover:shadow-lg border",
        variantClasses[variant],
        className
      )}
    >
      <div className="space-y-4">
        {/* head */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-title-m font-semibold">{title}</h3>
          </div>
          <Icon name={icon} size="xsm" color="text-content-secondary" />
        </div>
        {/* main */}
        <p className="text-gray-600">{description}</p>
      </div>
    </Card>
  );

  if (to) {
    return (
      <Link to={to} className="block">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
};

export default LinkCard;
