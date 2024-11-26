import React from "react";
import { Link, LinkProps, useLocation } from "react-router-dom";
import classNames from "classnames";

type NavButtonBaseProps = {
  to: string;
  icon?: string;
  children: React.ReactNode;
  className?: string;
};

export type NavButtonProps = NavButtonBaseProps &
  Omit<LinkProps, keyof NavButtonBaseProps>;

export const NavButton = ({
  to,
  icon,
  children,
  className,
  ...props
}: NavButtonProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const buttonClasses = classNames(
    "h-9 px-3.5 rounded-lg transition-colors duration-200",
    "flex items-center gap-2 no-underline w-full",
    "text-content hover:bg-bg active:bg-bg",
    "text-label-m",
    isActive && "bg-bg text-content",
    className
  );

  const iconClasses = classNames(
    "material-symbols-rounded select-none text-base",
    "w-5 h-5 flex items-center justify-center"
  );

  return (
    <Link to={to} className={buttonClasses} {...props}>
      {icon && <span className={iconClasses}>{icon}</span>}
      {children}
    </Link>
  );
};

export default NavButton;
