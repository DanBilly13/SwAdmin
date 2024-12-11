import React from "react";
import { Thumbnail } from "../../Thumbnail/Thumbnail";
import { Chip } from "../../Chip/Chip";
import { Avatar } from "../../Avatar/Avatar";
import { ContentText } from "./ContentText";
import { ActionButtons } from "./ActionButtons";
import { getAdjustedAvatarProps } from "../utils/helpers";
import type { TableCellStructuredProps } from "../types";

/**
 * Renders structured content within a table cell
 * This component handles different layouts based on the content type
 */
export const StructuredContent: React.FC<TableCellStructuredProps> = ({
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
  // Render image (either thumbnail or avatar)
  const renderImage = () => {
    if (!thumbnail && !avatar) return null;

    if (imageType === "thumbnail" && thumbnail) {
      return <Thumbnail {...thumbnail} className="mr-3" />;
    }

    if (imageType === "avatar" && avatar) {
      const adjustedAvatarProps = getAdjustedAvatarProps(avatar);
      return <Avatar {...adjustedAvatarProps} className="mr-3" />;
    }

    return null;
  };

  return (
    <>
      {renderImage()}
      <div className="flex-1 min-w-0">
        <ContentText title={title} description={description} />
        {chip && <Chip {...chip} className="mt-1" />}
      </div>
      <ActionButtons iconButton={iconButton} dropdown={dropdown} />
    </>
  );
};
