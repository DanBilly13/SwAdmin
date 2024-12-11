import React from "react";
import { IconButton } from "../../IconButton/IconButton";
import { Dropdown } from "../../Dropdown/Dropdown";
import type { TableCellStructuredProps } from "../types";

type ActionButtonsProps = Pick<TableCellStructuredProps, "iconButton" | "dropdown">;

/**
 * Component for rendering action buttons (IconButton or Dropdown)
 */
export const ActionButtons: React.FC<ActionButtonsProps> = ({ iconButton, dropdown }) => {
  return (
    <>
      {iconButton && <IconButton {...iconButton} className="ml-auto" />}
      {dropdown && <Dropdown {...dropdown} className="ml-auto" size="small" />}
    </>
  );
};
