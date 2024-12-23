import React from "react";
import classNames from "classnames";
import { Thumbnail, ThumbnailProps } from "../Thumbnail/Thumbnail";
import { Chip, ChipProps } from "../Chip/Chip";
import { Avatar, AvatarProps } from "../Avatar/Avatar";
import { BadgeProps } from "../Badge/Badge";
import { IconButton } from "../IconButton/IconButton";
import { Dropdown, DropdownProps } from "../Dropdown/Dropdown";
import { CellContent } from "./components/CellContent";
import { AccordionHybrid } from "../AccordionHybrid/AccordionHybrid";

/**
 * Type definitions for TableCell configuration
 * These types control the appearance and behavior of table cells
 */
type TableCellAlign = "left" | "center" | "right"; // Controls text and content alignment
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
 * Responsive alignment interface for properties that can change based on screen size
 * Example: A cell might be left-aligned on mobile but right-aligned on desktop
 */
interface ResponsiveAlign {
  xs?: TableCellAlign;
  sm?: TableCellAlign;
  md?: TableCellAlign;
  lg?: TableCellAlign;
}

/**
 * Base props that all table cells share regardless of content type
 */
interface TableCellBaseProps {
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
interface TableCellSimpleProps extends TableCellBaseProps {
  children: React.ReactNode;
}

/**
 * Props for complex table cells that contain structured content
 * Example: A cell with an avatar, title, description, and badge
 */
interface TableCellStructuredProps extends TableCellBaseProps {
  titleSmall?: string; // Small title text
  titleLarge?: string; // Large title text
  description?: string; // Additional description text
  imageType?: "thumbnail" | "avatar"; // Type of image to display
  thumbnail?: Omit<ThumbnailProps, "className">; // Image thumbnail config
  avatar?: Omit<AvatarProps, "className"> | null; // Avatar image config
  chip?: Omit<ChipProps, "className">; // Chip component config
  badge?: Omit<BadgeProps, "className">; // Badge component config
  dropdown?: Omit<DropdownProps, "className">; // Dropdown component config
  iconButton?: {
    icon: string;
    onClick?: () => void;
    menuOptions?: Array<{ value: string; label: string }>;
    menuPosition?: "left" | "center" | "right";
    menuType?: "action" | "select";
  }; // Icon button config
  icon?: string; // Icon name for the cell
  NotificationsCard?: {
    icon: string;
    title?: string;
    description?: string;
    date: string;
    variant?: "inline" | "stacked";
  }; // Notifications card config
  accordion?: {
    label: string;
    labelTrailing?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onToggle?: (isOpen: boolean) => void;
    removeRoundedLeft?: boolean;
    removeRoundedRight?: boolean;
  }; // Accordion config
}

// Union type for all possible table cell props
type TableCellProps = TableCellSimpleProps | TableCellStructuredProps;

/**
 * Generates Tailwind classes for table cell styling based on props
 * Handles responsive design, alignment, padding, and variants
 */
const getTableCellClasses = (
  align: TableCellAlign | ResponsiveAlign = "left",
  variant: TableCellVariant = "body",
  isLast: boolean | ResponsiveBoolean = false,
  isTopRow: boolean = false,
  className?: string
) => {
  const isLastBool = typeof isLast === "object" ? true : isLast === true;

  // Handle responsive alignment
  const alignClasses =
    typeof align === "object"
      ? {
          // Base styles (xs breakpoint)
          "justify-start text-left":
            align.xs === "left" ||
            (!align.xs && !align.sm && !align.md && !align.lg),
          "justify-center text-center": align.xs === "center",
          "justify-end text-right": align.xs === "right",

          // Responsive styles
          "sm:justify-start sm:text-left": align.sm === "left",
          "sm:justify-center sm:text-center": align.sm === "center",
          "sm:justify-end sm:text-right": align.sm === "right",
          "md:justify-start md:text-left": align.md === "left",
          "md:justify-center md:text-center": align.md === "center",
          "md:justify-end md:text-right": align.md === "right",
          "lg:justify-start lg:text-left": align.lg === "left",
          "lg:justify-center lg:text-center": align.lg === "center",
          "lg:justify-end lg:text-right": align.lg === "right",
        }
      : {
          "justify-start text-left": align === "left",
          "justify-center text-center": align === "center",
          "justify-end text-right": align === "right",
        };

  return classNames(
    "flex items-center",
    alignClasses,
    {
      "pl-0": true, // All cells have no left padding
      "pr-4": !isLastBool, // Right padding if not last
      "pr-0": isLastBool, // No right padding if last
      "pt-0": !isTopRow, // No top padding for wrapped rows
      "pt-4": isTopRow, // Top padding for first row
      "pb-4": true,
      "text-label-s": variant === "header",
      "border-t border-secondary": variant === "footer",
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
const ContentText: React.FC<
  Pick<TableCellStructuredProps, "titleSmall" | "titleLarge" | "description">
> = ({ titleSmall, titleLarge, description }) => {
  return (
    <>
      {titleSmall && (
        <div className="text-body-s text-content">{titleSmall}</div>
      )}
      {titleLarge && (
        <div className="text-body-l font-300 text-content">{titleLarge}</div>
      )}
      {description && (
        <div className="text-body-s text-content-secondary">{description}</div>
      )}
    </>
  );
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
  titleSmall,
  titleLarge,
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
  accordion,
}) => {
  // If only chip is present, render it alone
  if (chip && !titleSmall && !titleLarge && !thumbnail && !avatar) {
    return <Chip {...chip} />;
  }

  // If NotificationsCard is present, use CellContent
  if (NotificationsCard) {
    return (
      <CellContent
        titleSmall={titleSmall}
        titleLarge={titleLarge}
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

  // If accordion is present, use AccordionHybrid
  if (accordion) {
    return (
      <div className="w-full">
        <AccordionHybrid
          label={accordion.label}
          labelTrailing={accordion.labelTrailing}
          children={accordion.children}
          isOpen={accordion.isOpen}
          onToggle={accordion.onToggle}
          removeRoundedLeft={accordion.removeRoundedLeft}
          removeRoundedRight={accordion.removeRoundedRight}
          className="w-full"
        />
      </div>
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
        <ContentText
          titleSmall={titleSmall}
          titleLarge={titleLarge}
          description={description}
        />
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
const TableCell: React.FC<TableCellProps> = ({
  className,
  align = "left",
  variant = "body",
  sortDirection,
  isLast = false,
  isTopRow = false,
  ...props
}) => {
  const cellClasses = getTableCellClasses(
    align,
    variant,
    isLast,
    isTopRow,
    className
  );

  if ("children" in props) {
    return (
      <div className={classNames(cellClasses, "py-4 px-6")} role="cell">
        {props.children}
      </div>
    );
  }

  return (
    <div
      className={classNames(
        cellClasses,
        "py-4 px-6",
        props.accordion ? "w-full" : ""
      )}
      role={variant === "header" ? "columnheader" : "cell"}
      aria-sort={
        variant === "header" ? getAriaSortValue(sortDirection) : undefined
      }
    >
      <StructuredContent {...(props as TableCellStructuredProps)} />
    </div>
  );
};

export type { TableCellProps };
export default TableCell;
