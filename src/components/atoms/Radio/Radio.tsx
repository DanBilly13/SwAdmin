import React from "react";
import classNames from "classnames";

export interface RadioProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  name?: string;
  value?: string;
  label?: string;
  readOnly?: boolean;
}

export const Radio = ({
  checked = false,
  onChange,
  disabled = false,
  className,
  name,
  value,
  label,
  readOnly,
}: RadioProps) => {
  return (
    <div className="flex items-center">
      <button
        type="button"
        name={name}
        value={value}
        className={classNames(
          "w-5 h-5 rounded-full flex items-center justify-center transition-colors",
          {
            "bg-fill-success text-fill-on": checked,
            "border border-secondary hover:border-primary": !checked,
            "opacity-50 cursor-not-allowed": disabled,
            "cursor-pointer": !disabled,
          },
          className
        )}
        onClick={() => !disabled && !readOnly && onChange?.(!checked)}
        disabled={disabled || readOnly}
      >
        {checked && (
          <span 
            className="material-symbols-rounded text-sm text-white"
            style={{
              fontVariationSettings: "'FILL' 1, 'wght' 700"
            }}
          >
            check
          </span>
        )}
      </button>
      {label && <span className="ml-2 text-sm">{label}</span>}
    </div>
  );
};

export default Radio;
