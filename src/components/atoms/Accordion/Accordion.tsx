import React, { useState } from "react";
import classNames from "classnames";

export interface AccordionProps {
  label: string;
  labelTrailing?: string;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  containerClasses?: string;
  className?: string;
  defaultOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
  variant?: "primary" | "secondary";
  isOpen?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  label,
  labelTrailing,
  children,
  size = "md",
  className,

  defaultOpen = false,
  onToggle,
  variant = "secondary",
  isOpen: controlledIsOpen,
  containerClasses,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen);
  const isOpen =
    controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const toggleAccordion = () => {
    const newOpenState = !isOpen;
    if (controlledIsOpen === undefined) {
      setInternalIsOpen(newOpenState);
    }
    onToggle?.(newOpenState);
  };

  const sizeClasses = {
    sm: "h-6 text-label-s rounded px-2",
    md: "h-9 text-label-m rounded-lg px-3.5",
    lg: "h-12 text-label-l rounded-lg px-3.5",
  };

  const containerSizeClasses = {
    sm: "mt-2 p-2 bg-surface rounded",
    md: "mt-2 p-2 bg-surface rounded-lg",
    lg: "mt-2 p-2 bg-surface rounded-lg",
  };

  const variantClasses = {
    primary: "bg-surface-secondary text-fill-primary border-none",
    secondary: classNames(
      "bg-surface text-content border",
      isOpen ? "border-active" : "border-secondary hover:border-active"
    ),
  };

  const iconStates = {
    false: {
      icon: "keyboard_arrow_down",
      weight: 800,
    },
    true: {
      icon: "keyboard_arrow_up",
      weight: 800,
    },
  };

  const textSizeClass = {
    sm: "text-label-s",
    md: "text-label-m",
    lg: "text-label-l",
  }[size];

  return (
    <div className={className}>
      <div
        className={classNames(
          "flex items-center justify-between",
          "w-full",
          "hover:bg-surface-hover",
          "cursor-pointer",
          "rounded-lg",
          "transition-colors",
          sizeClasses[size],
          variantClasses[variant]
        )}
        onClick={toggleAccordion}
      >
        <span className={textSizeClass}>{label}</span>
        <div
          className={classNames(
            "flex flex-row w-auto items-center justify-center"
          )}
        >
          <span className={textSizeClass}>{labelTrailing}</span>
          <div
            className={classNames(
              "flex items-center justify-center",
              "w-[20px] h-[20px]",
              "transition-transform duration-300"
            )}
          >
            <span
              style={{
                fontVariationSettings: `'FILL' 0, 'wght' ${
                  iconStates[isOpen ? "true" : "false"].weight
                }`,
              }}
              className={classNames(
                "material-symbols-rounded text-fill-primary",
                "w-4 h-4",
                "transform transition-transform duration-300",
                isOpen ? "rotate-180" : "rotate-0",
                "origin-center"
              )}
            >
              {iconStates[isOpen ? "true" : "false"].icon}
            </span>
          </div>
        </div>
      </div>
      {isOpen && children && (
        <div className={classNames(containerSizeClasses[size], containerClasses)}>
          {children}
        </div>
      )}
    </div>
  );
};
