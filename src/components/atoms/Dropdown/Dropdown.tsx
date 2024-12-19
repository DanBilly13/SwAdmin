import React, { useState, useId } from "react";
import classNames from "classnames";
import { Radio } from "../Radio/Radio";
import { useMenu } from "../../../contexts/MenuContext";

export interface DropdownOption {
  value: string;
  label: string;
}

export type DropdownSize = "small" | "large";
export type MenuType = "action" | "select";

export interface DropdownProps {
  label?: string;
  value?: string;
  placeholder?: string;
  options: DropdownOption[];
  onChange?: (value: string) => void;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  className?: string;
  trailingIcon?: string;
  size?: DropdownSize;
  menuType?: MenuType;
}

export const Dropdown = ({
  label,
  value,
  placeholder = "Select an option",
  options,
  onChange,
  error,
  errorMessage,
  disabled,
  className,
  trailingIcon = "expand_more",
  size = "large",
  menuType = "action",
}: DropdownProps) => {
  const menuId = useId();
  const { openMenuId, setOpenMenuId } = useMenu();
  const isOpen = openMenuId === menuId;

  const containerClasses = classNames("relative w-full", className);

  const buttonClasses = classNames(
    "flex items-center w-full rounded-lg bg-surface-primary",
    "border border-border focus:border-primary transition-colors",
    {
      "h-9": size === "small",
      "h-12": size === "large",
      "opacity-50 cursor-not-allowed": disabled,
      "border-error": error,
    }
  );

  const iconClasses = classNames(
    "material-symbols-rounded select-none text-content",
    "text-base w-5 h-5 flex items-center justify-center"
  );

  const selectedOption = options.find((opt) => opt.value === value);

  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue);
    setOpenMenuId(null);
  };

  const handleToggle = () => {
    setOpenMenuId(isOpen ? null : menuId);
  };

  return (
    <div className={containerClasses}>
      <button
        type="button"
        className={buttonClasses}
        onClick={() => !disabled && handleToggle()}
        disabled={disabled}
      >
        {/* Label section */}
        {label && (
          <div className="flex items-center">
            <span className="text-label-m text-content pl-3.5">{label}</span>
          </div>
        )}

        {/* Value section */}
        <div className="flex-1">
          <div
            className={classNames("text-body-s px-3.5", {
              "text-right": label,
              "text-left": !label,
              "text-on-surface": !selectedOption,
            })}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </div>
        </div>

        {/* Trailing icon */}
        <div className="pr-3.5">
          <span className={iconClasses}>{trailingIcon}</span>
        </div>
      </button>

      {/* Dropdown menu */}
      {isOpen && !disabled && (
        <div className="absolute w-full mt-1 p-1 bg-surface-primary border border-border rounded-lg shadow-lg z-10">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className={classNames(
                "w-full pl-2.5 rounded-md hover:bg-bg py-2",
                "flex items-center justify-between gap-2",
                menuType === "select" ? "pr-2.5" : "pr-3.5"
              )}
              onClick={() => handleSelect(option.value)}
            >
              <span className="text-body-s text-content truncate">
                {option.label}
              </span>
              {menuType === "select" && (
                <Radio checked={option.value === value} />
              )}
            </button>
          ))}
        </div>
      )}
      {error && errorMessage && (
        <div className="text-error text-body-s mt-1">{errorMessage}</div>
      )}
    </div>
  );
};

export default Dropdown;
