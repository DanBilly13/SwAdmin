import React, { forwardRef } from "react";
import classNames from "classnames";
import { Link, LinkProps } from "react-router-dom";

export type ButtonSize = 'small' | 'medium' | 'large' | (string & {});
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

type ButtonBaseProps = {
  size?: ButtonSize;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  leadingIcon?: string;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  as?: typeof Link;
  to?: string;
};

type ButtonAsButtonProps = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps>;

type ButtonAsLinkProps = ButtonBaseProps &
  Omit<LinkProps, keyof ButtonBaseProps>;

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const defaultSizeClasses: Record<string, string> = {
  small: 'h-6 text-label-s',
  medium: 'h-9 text-label-m',
  large: 'h-12 text-label-m',
};

const paddingClasses: Record<string, string> = {
  small: "px-3",
  medium: "px-4",
  large: "px-6",
};

const iconPaddingClasses: Record<string, string> = {
  small: "pl-2 pr-3",
  medium: "pl-3 pr-4",
  large: "pl-4 pr-6",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-fill-primary text-fill-on hover:bg-opacity-90 active:bg-opacity-100",
  secondary:
    "bg-surface border border-border text-content hover:bg-bg active:bg-surface",
  tertiary: "text-content border border-border hover:bg-bg active:bg-surface",
};

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      size = "medium",
      variant = "primary",
      fullWidth = false,
      leadingIcon,
      className,
      children,
      disabled,
      as: Component = "button",
      to,
      ...props
    },
    ref
  ) => {
    const iconClasses = classNames(
      "material-symbols-rounded select-none text-base",
      { "opacity-50": disabled }
    );

    const commonClasses = classNames(
      "rounded-lg font-medium transition-colors duration-200 flex items-center gap-2",
      defaultSizeClasses[size as string],
      variantClasses[variant],
      leadingIcon ? iconPaddingClasses[size as string] : paddingClasses[size as string],
      {
        "w-full": fullWidth,
        "opacity-50 cursor-not-allowed": disabled,
      },
      className
    );

    if (to) {
      const { to: propsTo, ...restProps } = props as LinkProps;
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          to={to}
          className={classNames(commonClasses, "no-underline")}
          {...restProps}
        >
          {leadingIcon && <span className={iconClasses}>{leadingIcon}</span>}
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={commonClasses}
        disabled={disabled}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {leadingIcon && <span className={iconClasses}>{leadingIcon}</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
