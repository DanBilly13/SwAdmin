import React from "react";
import classNames from "classnames";
import { IconButton } from "../../IconButton/IconButton";
import { Dropdown, DropdownProps } from "../../Dropdown/Dropdown";

/**
 * Props for the action buttons section
 * @property {Object} [iconButton] - Props for the icon button
 * @property {Omit<DropdownProps, "className">} [dropdown] - Props for the dropdown
 */
export interface CellActionsProps {
  iconButton?: {
    icon: string;
    onClick?: () => void;
    menuOptions?: Array<{ value: string; label: string }>;
    menuPosition?: "left" | "center" | "right";
    menuType?: "action" | "select";
    className?: string;
  };
  dropdown?: Omit<DropdownProps, "className">;
}

/**
 * Component for rendering action buttons (IconButton and/or Dropdown)
 * Handles proper spacing and alignment
 * 
 * @example
 * ```tsx
 * <CellActions
 *   iconButton={{ icon: "edit", onClick: () => {} }}
 *   dropdown={{
 *     options: [{ value: "1", label: "Option 1" }],
 *     value: "1",
 *     onChange: (value) => {}
 *   }}
 * />
 * ```
 */
export const CellActions: React.FC<CellActionsProps> = ({ 
  iconButton, 
  dropdown 
}) => {
  if (!iconButton && !dropdown) return null;

  return (
    <div className="ml-auto flex items-center gap-2">
      {iconButton && (
        <IconButton
          {...iconButton}
          className={classNames("flex-shrink-0", iconButton.className)}
        />
      )}
      {dropdown && (
        <Dropdown
          {...dropdown}
          className="flex-shrink-0"
          size="small"
        />
      )}
    </div>
  );
};
