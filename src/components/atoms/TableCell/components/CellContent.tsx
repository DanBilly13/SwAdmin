import React from "react";
import { Chip, ChipProps } from "../../Chip/Chip";

/**
 * Props for the cell title section
 * @property {string} [title] - Main text content
 * @property {string} [description] - Secondary text content
 */
interface CellTitleProps {
  title?: string;
  description?: string;
}

/**
 * Props for the cell content section
 * @extends CellTitleProps
 * @property {Omit<ChipProps, "className">} [chip] - Props for the chip component
 */
export interface CellContentProps extends CellTitleProps {
  chip?: Omit<ChipProps, "className">;
}

/**
 * Renders the title and description text
 * @internal
 */
const CellTitle: React.FC<CellTitleProps> = ({ 
  title, 
  description 
}) => {
  if (!title && !description) return null;
  
  return (
    <>
      {title && <div className="text-body-s text-content">{title}</div>}
      {description && (
        <div className="text-body-s text-content-secondary">{description}</div>
      )}
    </>
  );
};

/**
 * Renders a chip with proper spacing
 * @internal
 */
const CellChip: React.FC<Pick<CellContentProps, 'chip'>> = ({ chip }) => {
  if (!chip) return null;
  
  return (
    <div className="mt-1">
      <Chip {...chip} />
    </div>
  );
};

/**
 * Component for rendering the content section of a table cell
 * Includes title, description, and optional chip
 * 
 * @example
 * ```tsx
 * <CellContent
 *   title="User Name"
 *   description="user@example.com"
 *   chip={{ children: "Active", variant: "success" }}
 * />
 * ```
 */
export const CellContent: React.FC<CellContentProps> = ({ 
  title, 
  description, 
  chip 
}) => {
  if (!title && !description && !chip) return null;

  return (
    <div className="flex flex-col flex-grow min-h-[32px] justify-center">
      <CellTitle title={title} description={description} />
      <CellChip chip={chip} />
    </div>
  );
};
