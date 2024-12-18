import React from "react";
import { CellContent } from "./CellContent";

interface ContentTextProps {
  titleSmall?: string;
  titleLarge?: string;
  description?: string;
}

/**
 * Renders text content with proper styling
 * @internal
 */
export const ContentText: React.FC<ContentTextProps> = ({ titleSmall, titleLarge, description }) => {
  if (!titleSmall && !titleLarge && !description) return null;
  return <CellContent titleSmall={titleSmall} titleLarge={titleLarge} description={description} />;
};
