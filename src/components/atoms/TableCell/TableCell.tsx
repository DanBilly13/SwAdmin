import React from "react";
import classNames from "classnames";
import { Thumbnail, ThumbnailProps } from "../Thumbnail/Thumbnail";
import { Chip, ChipProps } from "../Chip/Chip";
import { Avatar, AvatarProps } from "../Avatar/Avatar";
import { BadgeProps } from "../Badge/Badge";
import { IconButton } from "../IconButton/IconButton";

/**
 * Type definitions for TableCell configuration
 * These types control the appearance and behavior of table cells
 */
type TableCellAlign = "left" | "center" | "right";  // Controls text and content alignment
type TableCellPadding = "normal" | "compact" | "none";  // Controls cell padding
type TableCellVariant = "body" | "header" | "footer";  // Different cell styles based on position
type TableCellSize = "small" | "medium";  // Controls text size
type TableSortDirection = "ascending" | "descending" | "none" | false;  // For sortable columns

/**
 * Responsive boolean interface for properties that can change based on screen size
 * Example: A cell might be first in row on mobile but not on desktop
 */
interface ResponsiveBoolean {
  sm?: boolean;  // Small screens (mobile)
  md?: boolean;  // Medium screens (tablet)
  lg?: boolean;  // Large screens (desktop)
}

/**
 * Base props that all table cells share regardless of content type
 */
interface TableCellBaseProps {
  className?: string;
  align?: TableCellAlign;
  padding?: TableCellPadding;
  size?: TableCellSize;
  variant?: TableCellVariant;
  sortDirection?: TableSortDirection;
  isFirst?: boolean | ResponsiveBoolean;  // Is this the first cell in its row?
  isLast?: boolean | ResponsiveBoolean;   // Is this the last cell in its row?
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
  title?: string;              // Main text content
  description?: string;        // Secondary text content
  imageType?: "thumbnail" | "avatar";  // Type of image to display
  thumbnail?: Omit<ThumbnailProps, "className">;  // Image thumbnail config
  avatar?: Omit<AvatarProps, "className"> | null;  // Avatar image config
  chip?: Omit<ChipProps, "className">;  // Chip/tag config
  badge?: Omit<BadgeProps, "className">;  // Status badge config
  iconButton?: {
    icon: string;
    onClick?: () => void;
    menuOptions?: Array<{ value: string; label: string }>;
    menuPosition?: "left" | "center" | "right";
    menuType?: "action" | "select";
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
  size: TableCellSize = "medium",
  variant: TableCellVariant = "body",
  isFirst: boolean | ResponsiveBoolean = false,
  isLast: boolean | ResponsiveBoolean = false,
  className?: string
) => {
  const isFirstBool = typeof isFirst === "boolean" ? isFirst : false;
  const isLastBool = typeof isLast === "boolean" ? isLast : false;
  const isFirstResponsive = typeof isFirst === "object" ? isFirst : {};
  const isLastResponsive = typeof isLast === "object" ? isLast : {};

  return classNames(
    "flex items-center min-h-[40px]",
    {
      // Alignment
      "justify-start text-left": align === "left",
      "justify-center text-center": align === "center",
      "justify-end text-right": align === "right",

      // Padding - Default (sm)
      "py-4": padding === "normal",
      "py-2": padding === "compact",
      "px-4": padding === "normal" && !isFirstBool && !isLastBool,
      "pl-0 pr-4":
        padding === "normal" &&
        (isFirstBool || isFirstResponsive.sm) &&
        !isLastBool,
      "pr-0 pl-4":
        padding === "normal" &&
        !isFirstBool &&
        (isLastBool || isLastResponsive.sm),
      "px-0":
        (padding === "normal" &&
          ((isFirstBool && isLastBool) ||
            (isFirstResponsive.sm && isLastResponsive.sm))) ||
        (padding === "compact" &&
          ((isFirstBool && isLastBool) ||
            (isFirstResponsive.sm && isLastResponsive.sm))),
      "px-2": padding === "compact" && !isFirstBool && !isLastBool,
      "pl-0 pr-2":
        padding === "compact" &&
        (isFirstBool || isFirstResponsive.sm) &&
        !isLastBool,
      "pr-0 pl-2":
        padding === "compact" &&
        !isFirstBool &&
        (isLastBool || isLastResponsive.sm),
      "p-0": padding === "none",

      // Responsive Padding - md
      "md:px-4":
        padding === "normal" && !isFirstResponsive.md && !isLastResponsive.md,
      "md:pl-0 md:pr-4":
        padding === "normal" && isFirstResponsive.md && !isLastResponsive.md,
      "md:pr-0 md:pl-4":
        padding === "normal" && !isFirstResponsive.md && isLastResponsive.md,
      "md:px-0":
        padding === "normal" && isFirstResponsive.md && isLastResponsive.md,

      // Responsive Padding - lg
      "lg:px-4":
        padding === "normal" && !isFirstResponsive.lg && !isLastResponsive.lg,
      "lg:pl-0 lg:pr-4":
        padding === "normal" && isFirstResponsive.lg && !isLastResponsive.lg,
      "lg:pr-0 lg:pl-4":
        padding === "normal" && !isFirstResponsive.lg && isLastResponsive.lg,
      "lg:px-0":
        padding === "normal" && isFirstResponsive.lg && isLastResponsive.lg,

      // Size
      "text-body-s": size === "medium",
      "text-label-s": size === "small",

      // Variant
      "font-medium bg-surface-secondary": variant === "header",
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

/**
 * Renders structured content within a table cell
 * This component handles two main layouts:
 * 1. Avatar Layout: Avatar + Title + Description + Optional Badge
 * 2. Simple Layout: Title + Description + Optional Thumbnail/Chip
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
}) => {
  // Avatar layout: Used for cells that show user information
  if (imageType === "avatar" && avatar) {
    const isDev = import.meta.env.DEV;
    // Handle avatar src path differences between dev and prod
    const adjustedAvatar = {
      ...avatar,
      src: avatar.src
        ? isDev
          ? avatar.src.replace("/SwAdmin/", "/")
          : avatar.src
        : undefined,
    };

    return (
      <div className="flex items-center gap-4">
        <Avatar
          {...adjustedAvatar}
          badge={badge}
          size="sm"
          className="flex-shrink-0"
        />
        <div className="flex flex-col">
          <span className="text-body-s text-content-primary">{title}</span>
          {description && (
            <span className="text-body-s text-content-secondary">
              {description}
            </span>
          )}
        </div>
      </div>
    );
  }

  // Simple layout: Used for cells with basic content or thumbnails
  if (chip && !title && !description && !thumbnail && !iconButton) {
    return <Chip {...chip} />;
  }

  return (
    <div className="flex items-center gap-4">
      {imageType === "thumbnail" && thumbnail && (
        <Thumbnail {...thumbnail} className="flex-shrink-0" />
      )}
      <div className="flex flex-col min-h-[32px] justify-center">
        {title && <div className="text-body-s text-content">{title}</div>}
        {description && (
          <div className="text-body-s text-content-secondary">{description}</div>
        )}
        {chip && (
          <div className="mt-1">
            <Chip {...chip} />
          </div>
        )}
      </div>
      {iconButton && (
        <IconButton
          icon={iconButton.icon}
          onClick={iconButton.onClick}
          menuOptions={iconButton.menuOptions}
          menuPosition={iconButton.menuPosition}
          menuType={iconButton.menuType}
          className="ml-auto"
        />
      )}
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
export const TableCell = (props: TableCellProps) => {
  const {
    align = "left",
    padding = "normal",
    size = "medium",
    variant = "body",
    className,
    sortDirection,
    isFirst = false,
    isLast = false,
  } = props;

  const cellClasses = classNames(
    // Base styles
    "py-4 pl-0 pr-4",
    {
      // Only override right padding for last item
      "pr-0": typeof isLast === "boolean" ? isLast : false,
      
      // Responsive padding
      "sm:pr-0": typeof isLast === "object" && isLast.sm,
      "md:pr-0": typeof isLast === "object" && isLast.md,
      "lg:pr-0": typeof isLast === "object" && isLast.lg,
    },
    // Alignment
    {
      "text-left": align === "left",
      "text-center": align === "center",
      "text-right": align === "right",
      "justify-start": align === "left",
      "justify-center": align === "center",
      "justify-end": align === "right",
    },
    className
  );

  return (
    <div className={cellClasses} role="cell">
      {"children" in props ? (
        props.children
      ) : (
        <StructuredContent
          title={props.title}
          description={props.description}
          imageType={props.imageType}
          thumbnail={props.thumbnail}
          avatar={props.avatar}
          chip={props.chip}
          badge={props.badge}
          iconButton={props.iconButton}
        />
      )}
    </div>
  );
};

export type { TableCellProps };
export default TableCell;
