import React, { forwardRef } from "react";
import classNames from "classnames";

export interface InlineInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  leadingIcon?: string;
  trailingIcon?: string;
  error?: boolean;
  className?: string;
  onLeadingIconClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onTrailingIconClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const InlineInput = forwardRef<HTMLInputElement, InlineInputProps>(
  (
    { 
      label, 
      leadingIcon, 
      trailingIcon, 
      error, 
      className, 
      disabled,
      onLeadingIconClick,
      onTrailingIconClick,
      ...props 
    },
    ref
  ) => {
    const containerClasses = classNames(
      "flex items-center h-12 w-full rounded-lg bg-surface",
      "border border-border focus-within:border-primary transition-colors",
      {
        "opacity-50 cursor-not-allowed": disabled,
        "border-error": error,
      },
      className
    );

    const iconClasses = classNames(
      "material-symbols-rounded select-none text-content",
      "text-base w-5 h-5 flex items-center justify-center",
      {
        "cursor-pointer": !disabled && (onLeadingIconClick || onTrailingIconClick),
      }
    );

    return (
      <div className={containerClasses}>
        {/* Leading section with icon and/or label */}
        {(leadingIcon || label) && (
          <div className="flex items-center gap-3.5">
            {leadingIcon && (
              <div 
                className={classNames("pl-3.5")}
                onClick={!disabled ? onLeadingIconClick : undefined}
              >
                <span className={iconClasses}>{leadingIcon}</span>
              </div>
            )}
            {label && !leadingIcon && (
              <span className="text-label-m text-content pl-3.5">{label}</span>
            )}
            {label && leadingIcon && (
              <span className="text-label-m text-content">{label}</span>
            )}
          </div>
        )}

        {/* Input */}
        <input
          ref={ref}
          disabled={disabled}
          className={classNames(
            "flex-1 bg-transparent px-3.5 text-content outline-none",
            "text-body-s placeholder:text-body-s",
            "placeholder:text-content-tertiary",
            {
              "text-right placeholder:text-right":
                leadingIcon || trailingIcon || label,
              "text-left placeholder:text-left":
                !leadingIcon && !trailingIcon && !label,
              "cursor-not-allowed": disabled,
            }
          )}
          {...props}
        />

        {/* Trailing icon */}
        {trailingIcon && (
          <div 
            className="pr-3.5"
            onClick={!disabled ? onTrailingIconClick : undefined}
          >
            <span className={iconClasses}>{trailingIcon}</span>
          </div>
        )}
      </div>
    );
  }
);

InlineInput.displayName = "InlineInput";

export default InlineInput;
