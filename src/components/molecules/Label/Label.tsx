import React from "react";
import classNames from "classnames";
import { Button } from "../../atoms/Button/Button";
import "./Label.css";

export interface LabelProps {
  /** The text content of the label */
  text: string;
  /** Optional button configuration */
  button?: {
    /** Leading icon name for the button */
    leadingIcon: string;
    /** Click handler for the button */
    onClick: () => void;
    /** Optional aria-label for the button */
    ariaLabel?: string;
  };
  /** Additional CSS class names */
  className?: string;
}

export const Label: React.FC<LabelProps> = ({ text, button, className }) => {
  return (
    <div className={classNames("label", className)}>
      <span className="text-label-m">{text}</span>
      {button && (
        <Button
          leadingIcon={button.leadingIcon}
          onClick={button.onClick}
          variant="primary"
          size="small"
          aria-label={button.ariaLabel}
        >
          {button.ariaLabel || "Action"}
        </Button>
      )}
    </div>
  );
};
