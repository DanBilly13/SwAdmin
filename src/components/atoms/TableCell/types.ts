import React from "react";
import { ThumbnailProps } from "../Thumbnail/Thumbnail";
import { ChipProps } from "../Chip/Chip";
import { AvatarProps } from "../Avatar/Avatar";
import { BadgeProps } from "../Badge/Badge";
import { DropdownProps } from "../Dropdown/Dropdown";

/**
 * Type definitions for TableCell configuration
 * These types control the appearance and behavior of table cells
 */
export type TableCellAlign = "left" | "center" | "right"; // Controls text and content alignment
export type TableCellVariant = "body" | "header" | "footer"; // Different cell styles based on position
export type TableSortDirection = "ascending" | "descending" | "none" | false; // For sortable columns

/**
 * Responsive boolean interface for properties that can change based on screen size
 * Example: A cell might be first in row on mobile but not on desktop
 */
export interface ResponsiveBoolean {
  sm?: boolean; // Small screens (mobile)
  md?: boolean; // Medium screens (tablet)
  lg?: boolean; // Large screens (desktop)
}

/**
 * Responsive alignment interface for properties that can change based on screen size
 * Example: A cell might be left-aligned on mobile but right-aligned on desktop
 */
export interface ResponsiveAlign {
  xs?: TableCellAlign;
  sm?: TableCellAlign;
  md?: TableCellAlign;
  lg?: TableCellAlign;
}

/**
 * Base props that all table cells share regardless of content type
 */
export interface TableCellBaseProps {
  className?: string;
  align?: TableCellAlign | ResponsiveAlign;
  variant?: TableCellVariant;
  sortDirection?: TableSortDirection;
  isLast?: boolean | ResponsiveBoolean; // Is this the last cell in its wrapped row?
  isTopRow?: boolean; // Is this cell in the first row of the table?
}

/**
 * Props for simple table cells that just contain basic content
 * Example: A cell containing just text or a number
 */
export interface TableCellSimpleProps extends TableCellBaseProps {
  children: React.ReactNode;
}

/**
 * Props for complex table cells that contain structured content
 * Example: A cell with an avatar, title, description, and badge
 */
export interface TableCellStructuredProps extends TableCellBaseProps {
  title?: string; // Main text content
  description?: string; // Secondary text content
  imageType?: "thumbnail" | "avatar"; // Type of image to display
  thumbnail?: Omit<ThumbnailProps, "className">; // Image thumbnail config
  avatar?: Omit<AvatarProps, "className"> | null; // Avatar image config
  chip?: Omit<ChipProps, "className">; // Chip/tag config
  badge?: Omit<BadgeProps, "className">; // Status badge config
  dropdown?: Omit<DropdownProps, "className">;
  iconButton?: {
    icon: string;
    onClick?: () => void;
    menuOptions?: Array<{ value: string; label: string }>;
    menuPosition?: "left" | "center" | "right";
    menuType?: "action" | "select";
  };
  icon?: string;
  NotificationsCard?: {
    icon: string;
    title?: string;
    description?: string;
    date: string;
    variant?: "inline" | "stacked";
  };
}

/**
 * Interface for responsive grid spans in table columns
 */
export interface ResponsiveSpan {
  xs: number;
  sm: number;
  md: number;
  lg: number;
}

/**
 * Interface for table column definitions
 * Used to define the structure and behavior of table columns
 */
export interface ColumnDefinition {
  header: string;
  span: ResponsiveSpan;
  align: TableCellAlign | ResponsiveAlign;
  className?: string;
}

// Union type for all possible table cell props
export type TableCellProps = TableCellBaseProps & (TableCellSimpleProps | TableCellStructuredProps);
