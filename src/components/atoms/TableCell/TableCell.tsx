import React from "react";
import classNames from "classnames";
import { Thumbnail, ThumbnailProps } from "../Thumbnail/Thumbnail";
import { Chip, ChipProps } from "../Chip/Chip";
import { Avatar, AvatarProps } from "../Avatar/Avatar";
import { BadgeProps } from "../Badge/Badge";
import { IconButton } from "../IconButton/IconButton";
import { Dropdown, DropdownProps } from "../Dropdown/Dropdown";
import { CellContent } from "./components/CellContent";

/**
 * Type definitions for TableCell configuration
 * These types control the appearance and behavior of table cells
 */
type TableCellAlign = "left" | "center" | "right"; // Controls text and content alignment
type TableCellPadding = "normal"; // Controls cell padding
type TableCellVariant = "body" | "header" | "footer"; // Different cell styles based on position
type TableSortDirection = "ascending" | "descending" | "none" | false; // For sortable columns

/**
 * Responsive boolean interface for properties that can change based on screen size
 * Example: A cell might be first in row on mobile but not on desktop
 */
interface ResponsiveBoolean {
  sm?: boolean; // Small screens (mobile)
  md?: boolean; // Medium screens (tablet)
  lg?: boolean; // Large screens (desktop)
}

/**
 * Base props that all table cells share regardless of content type
 */
interface TableCellBaseProps {
  className?: string;
  align?: TableCellAlign;
  padding?: TableCellPadding;
  variant?: TableCellVariant;
  sortDirection?: TableSortDirection;
  isFirst?: boolean | ResponsiveBoolean; // Is this the first cell in its wrapped row?
  isLast?: boolean | ResponsiveBoolean; // Is this the last cell in its wrapped row?
  isTopRow?: boolean; // Is this cell in the first row of the table?
}

/**
 * Props for simple table cells that just contain basic content
 * Example: A cell containing just text or a number
 */
interface TableCellSimpleProps extends TableCellBaseProps {
  children: React.ReactNode;
}

/**
 * Props for complex table cells that contain structured content
 * Example: A cell with an avatar, title, description, and badge
 */
interface TableCellStructuredProps extends TableCellBaseProps {
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

// Union type for all possible table cell props
type TableCellProps = TableCellSimpleProps | TableCellStructuredProps;

/**
 * Generates Tailwind classes for table cell styling based on props
 * Handles responsive design, alignment, padding, and variants
 */
const getTableCellClasses = (
  align: TableCellAlign = "left",
  padding: TableCellPadding = "normal",
  variant: TableCellVariant = "body",
  isFirst: boolean | ResponsiveBoolean = false,
  isLast: boolean | ResponsiveBoolean = false,
  isTopRow: boolean = false,
  className?: string
) => {
  // Handle isFirst/isLast values for mobile-first approach
  // If the value is a boolean, use it directly
  // If it's a ResponsiveBoolean object, use the sm breakpoint value
  // This ensures mobile layout uses sm breakpoint values for first/last detection
  const isFirstBool =
    typeof isFirst === "boolean" ? isFirst : isFirst?.sm || false;
  const isLastBool = typeof isLast === "boolean" ? isLast : isLast?.sm || false;

  // For md/lg breakpoints, if the value is a ResponsiveBoolean object, use it
  // Otherwise create an empty object (no responsive overrides)
  const isFirstResponsive = typeof isFirst === "object" ? isFirst : {};
  const isLastResponsive = typeof isLast === "object" ? isLast : {};

  return classNames(
    "flex items-center",
    {
      // Alignment classes
      "justify-start text-left": align === "left",
      "justify-center text-center": align === "center",
      "justify-end text-right": align === "right",

      // Mobile-First Base Padding
      // All cells get bottom padding only
      "pb-4": padding === "normal",
      // Horizontal padding - no left padding, right padding except for last cell
      "pl-0 pr-4": padding === "normal" && !isLastBool,
      "px-0": padding === "normal" && isLastBool,

      // Variant-specific styles
      "text-label-s bg-surface-secondary": variant === "header",
      "border-t border-border": variant === "footer",
    },
    className
  );
};

/**
 * Returns the ARIA sort value for a table cell based on its sort direction
 */
const getAriaSortValue = (sortDirection?: TableSortDirection) => {
  if (!sortDirection) return "none";
  return sortDirection;
};

// Utility function to adjust avatar src path based on environment
const getAdjustedAvatarProps = (avatar: Omit<AvatarProps, "className">) => {
  const isDev = import.meta.env.DEV;
  return {
    ...avatar,
    src: avatar.src
      ? isDev
        ? avatar.src.replace("/SwAdmin/", "/")
        : avatar.src
      : undefined,
  };
};

/**
 * Renders text content with proper styling
 * @internal
 */
const ContentText: React.FC<{
  title?: string;
  description?: string;
}> = ({ title, description }) => {
  if (!title && !description) return null;
  return <CellContent title={title} description={description} />;
};

// Component for rendering action buttons (IconButton or Dropdown)
const ActionButtons: React.FC<
  Pick<TableCellStructuredProps, "iconButton" | "dropdown">
> = ({ iconButton, dropdown }) => {
  return (
    <>
      {iconButton && <IconButton {...iconButton} className="ml-auto" />}
      {dropdown && <Dropdown {...dropdown} className="ml-auto" size="small" />}
    </>
  );
};

/**
 * Renders structured content within a table cell
 * This component handles different layouts based on the content type
 */
const StructuredContent: React.FC<TableCellStructuredProps> = ({
  title,
  description,
  imageType = "thumbnail",
  thumbnail,
  avatar,
  chip,
  badge,
  iconButton,
  dropdown,
  icon,
  NotificationsCard,
}) => {
  // If only chip is present, render it alone
  if (chip && !title && !description && !thumbnail && !avatar) {
    return <Chip {...chip} />;
  }

  // If NotificationsCard is present, use CellContent
  if (NotificationsCard) {
    return (
      <CellContent
        title={title}
        description={description}
        chip={chip}
        badge={badge}
        thumbnail={thumbnail}
        avatar={avatar}
        iconButton={iconButton}
        dropdown={dropdown}
        icon={icon}
        NotificationsCard={NotificationsCard}
      />
    );
  }

  // Otherwise, use the original detailed rendering
  return (
    <div className="flex items-center gap-4">
      {/* Image (Avatar or Thumbnail) */}
      {imageType === "avatar" && avatar && (
        <Avatar
          {...getAdjustedAvatarProps(avatar)}
          badge={badge}
          size="sm"
          className="flex-shrink-0"
        />
      )}
      {imageType === "thumbnail" && thumbnail && (
        <Thumbnail {...thumbnail} className="flex-shrink-0" />
      )}

      {/* Content (Title, Description and optional Chip) */}
      <div className="flex flex-col flex-grow">
        <ContentText title={title} description={description} />
        {chip && (
          <div className="mt-1">
            <Chip {...chip} />
          </div>
        )}
      </div>

      {/* Actions */}
      <ActionButtons iconButton={iconButton} dropdown={dropdown} />
    </div>
  );
};

/**
 * Main TableCell component
 * Renders either simple content (children) or structured content based on props
 * Handles:
 * - Alignment and padding
 * - Responsive design
 * - Different content layouts (avatar, thumbnail, simple text)
 * - Accessibility roles
 */
const TableCell: React.FC<TableCellProps> = (props) => {
  const {
    align = "left",
    padding = "normal",
    variant = "body",
    className,
    sortDirection,
    isFirst = false,
    isLast = false,
    isTopRow = false,
    ...rest
  } = props;

  // Get base classes for the cell
  const cellClasses = getTableCellClasses(
    align,
    padding,
    variant,
    isFirst,
    isLast,
    isTopRow,
    className
  );

  // Get ARIA attributes for sorting
  const ariaSortValue = getAriaSortValue(sortDirection);
  const ariaSort = ariaSortValue ? { "aria-sort": ariaSortValue } : {};

  // Render either simple content (children) or structured content
  return (
    <div className={cellClasses} {...ariaSort}>
      {"children" in rest ? (
        rest.children
      ) : (
        <StructuredContent {...(rest as TableCellStructuredProps)} />
      )}
    </div>
  );
};

export type { TableCellProps };
export default TableCell;
