import React, { useState, useId } from 'react';
import classNames from 'classnames';
import { Radio } from '../Radio/Radio';
import { useMenu } from '../../../contexts/MenuContext';

export type MenuPosition = 'left' | 'center' | 'right';
export type MenuType = 'action' | 'select';

export interface MenuOption {
  value: string;
  label: string;
}

export interface IconButtonProps {
  icon: string;
  onClick?: (value?: string) => void;
  disabled?: boolean;
  className?: string;
  menuOptions?: MenuOption[];
  menuPosition?: MenuPosition;
  menuType?: MenuType;
  selectedValue?: string;
  variant?: 'ghost' | 'solid' | 'outline';
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  disabled = false,
  className,
  menuOptions,
  menuPosition = 'right',
  menuType = 'action',
  selectedValue,
  variant,
  size,
  children,
}) => {
  const menuId = useId();
  const { openMenuId, setOpenMenuId } = useMenu();
  const isOpen = openMenuId === menuId;

  const handleClick = (e: React.MouseEvent) => {
    if (menuOptions) {
      e.stopPropagation();
      setOpenMenuId(isOpen ? null : menuId);
    } else {
      onClick?.();
    }
  };

  const handleSelect = (value: string) => {
    if (menuType === 'select') {
      onClick?.(value);
    } else {
      onClick?.();
    }
    setOpenMenuId(null);
  };

  const menuPositionClasses = {
    left: 'left-0',
    center: 'left-1/2 -translate-x-1/2',
    right: 'right-0',
  };

  return (
    <div className="relative inline-block">
      <button
        type="button"
        className={classNames(
          "w-6 h-6 rounded-xl flex items-center justify-center",
          "bg-surface hover:bg-bg active:bg-bg transition-colors",
          {
            "opacity-50 cursor-not-allowed": disabled,
            "cursor-pointer": !disabled,
          },
          className
        )}
        onClick={handleClick}
        disabled={disabled}
      >
        {children ? (
          <span className="text-base text-content">{children}</span>
        ) : (
          <span className="material-symbols-rounded text-base text-content">
            {icon}
          </span>
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && menuOptions && (
        <div className={classNames(
          "absolute mt-1 p-1 bg-surface border border-secondary rounded-lg shadow-lg z-10",
          "min-w-[160px] w-max",
          menuPositionClasses[menuPosition]
        )}>
          {menuOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              className="w-full pl-2.5 pr-3.5 py-2 text-left text-body-s text-content rounded-md hover:bg-bg flex items-center justify-between"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
              {menuType === 'select' && (
                <Radio checked={option.value === selectedValue} readOnly />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default IconButton;
