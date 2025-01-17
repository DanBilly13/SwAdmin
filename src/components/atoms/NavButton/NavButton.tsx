import React from "react";
import { Link, LinkProps, useLocation } from "react-router-dom";
import classNames from "classnames";
import { useDrawerControl } from "../../templates";

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
  const { setIsDrawerOpen } = useDrawerControl();
  const isActive = location.pathname === to;

  const buttonClasses = classNames(
    "h-9 px-3.5 rounded-lg transition-colors duration-200",
    "flex items-center gap-2 no-underline w-full",
    "text-content-primary hover:bg-surface-secondary active:bg-surface-secondary",
    "text-label-m",
    isActive && "bg-surface-secondary text-content",
    className
  );

  const iconClasses = classNames(
    "material-symbols-rounded select-none text-base",
    "w-5 h-5 flex items-center justify-center"
  );

  const handleClick = () => {
    // Close drawer on mobile when navigating
    if (window.innerWidth < 1280) {
      // 1280px is xl breakpoint
      setIsDrawerOpen(false);
    }
  };

  return (
    <Link to={to} className={buttonClasses} onClick={handleClick} {...props}>
      {icon && <span className={iconClasses}>{icon}</span>}
      {children}
    </Link>
  );
};

export default NavButton;
