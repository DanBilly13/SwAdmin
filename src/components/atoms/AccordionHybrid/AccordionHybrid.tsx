import React, { useState } from "react";
import classNames from "classnames";

export interface AccordionHybridProps {
  label: string;
  labelTrailing?: string;
  children?: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
  removeRoundedLeft?: boolean;
  removeRoundedRight?: boolean;
}

export const AccordionHybrid: React.FC<AccordionHybridProps> = ({
  label,
  labelTrailing,
  children,
  className,
  isOpen: controlledIsOpen,
  onToggle,
  removeRoundedLeft,
  removeRoundedRight,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const toggleAccordion = () => {
    const newOpenState = !isOpen;
    if (controlledIsOpen === undefined) {
      setInternalIsOpen(newOpenState);
    }
    onToggle?.(newOpenState);
  };

  const buttonClasses = classNames(
    "flex items-center justify-between",
    "w-full",
    "hover:bg-surface-hover",
    "cursor-pointer",
    "transition-colors",
    "h-6 text-label-s px-2",
    "bg-surface-info text-fill-primary border-none",
    {
      "rounded": !removeRoundedLeft && !removeRoundedRight,
      "rounded-l": !removeRoundedLeft && removeRoundedRight,
      "rounded-r": removeRoundedLeft && !removeRoundedRight,
      "rounded-none": removeRoundedLeft && removeRoundedRight,
    }
  );

  const containerClasses = classNames(
    "mt-2 p-2 bg-surface w-full",
    {
      "rounded": !removeRoundedLeft && !removeRoundedRight,
      "rounded-l": !removeRoundedLeft && removeRoundedRight,
      "rounded-r": removeRoundedLeft && !removeRoundedRight,
      "rounded-none": removeRoundedLeft && removeRoundedRight,
    }
  );

  return (
    <div className={classNames("w-full", className)}>
      <div className={buttonClasses} onClick={toggleAccordion}>
        <span className="text-label-s">{label}</span>
        <div className="flex flex-row w-auto items-center justify-center">
          <span className="text-label-s">{labelTrailing}</span>
          <div className="flex items-center justify-center w-[20px] h-[20px] transition-transform duration-300">
            <span
              style={{
                fontVariationSettings: `'FILL' 0, 'wght' 800`,
              }}
              className={classNames(
                "material-symbols-rounded text-fill-primary",
                "w-4 h-4",
                "transform transition-transform duration-300",
                isOpen ? "rotate-180" : "rotate-0",
                "origin-center"
              )}
            >
              {isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
            </span>
          </div>
        </div>
      </div>
      {isOpen && children && (
        <div className={containerClasses}>
          {children}
        </div>
      )}
    </div>
  );
};
