import classNames from "classnames";
import { TableCellAlign, TableCellVariant, ResponsiveAlign, ResponsiveBoolean } from "../types";

/**
 * Generates Tailwind classes for table cell styling based on props
 * Handles responsive design, alignment, padding, and variants
 */
export const getTableCellClasses = (
  align: TableCellAlign | ResponsiveAlign = "left",
  variant: TableCellVariant = "body",
  isLast: boolean | ResponsiveBoolean = false,
  isTopRow: boolean = false,
  className?: string
) => {
  const isLastBool = typeof isLast === 'object' ? true : isLast === true;

  // Handle responsive alignment
  const alignClasses = typeof align === 'object' ? {
    // Base styles (xs breakpoint)
    'justify-start text-left': align.xs === 'left' || (!align.xs && !align.sm && !align.md && !align.lg),
    'justify-center text-center': align.xs === 'center',
    'justify-end text-right': align.xs === 'right',
    
    // Responsive styles
    'sm:justify-start sm:text-left': align.sm === 'left',
    'sm:justify-center sm:text-center': align.sm === 'center',
    'sm:justify-end sm:text-right': align.sm === 'right',
    'md:justify-start md:text-left': align.md === 'left',
    'md:justify-center md:text-center': align.md === 'center',
    'md:justify-end md:text-right': align.md === 'right',
    'lg:justify-start lg:text-left': align.lg === 'left',
    'lg:justify-center lg:text-center': align.lg === 'center',
    'lg:justify-end lg:text-right': align.lg === 'right',
  } : {
    'justify-start text-left': align === 'left',
    'justify-center text-center': align === 'center',
    'justify-end text-right': align === 'right',
  };

  return classNames(
    "flex items-center",
    alignClasses,
    {
      "pb-4": true,
      "pl-0": true, // All cells have no left padding
      
      // Right padding - only apply if not last
      "pr-4": !isLastBool,
      "pr-0": isLastBool,

      "text-label-s bg-surface-secondary": variant === "header",
      "border-t border-secondary": variant === "footer",
    },
    className
  );
};
