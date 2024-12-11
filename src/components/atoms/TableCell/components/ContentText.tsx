import React from "react";
import { CellContent } from "./CellContent";

interface ContentTextProps {
  title?: string;
  description?: string;
}

/**
 * Renders text content with proper styling
 * @internal
 */
export const ContentText: React.FC<ContentTextProps> = ({ title, description }) => {
  if (!title && !description) return null;
  return <CellContent title={title} description={description} />;
};
