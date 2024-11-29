import React from "react";
import { Avatar, AvatarProps } from "../../Avatar/Avatar";
import { Thumbnail, ThumbnailProps } from "../../Thumbnail/Thumbnail";
import { BadgeProps } from "../../Badge/Badge";

/**
 * Props for the CellImage component
 * @property {("thumbnail"|"avatar")} [imageType] - Type of image to display
 * @property {Omit<ThumbnailProps, "className">} [thumbnail] - Props for thumbnail image
 * @property {Omit<AvatarProps, "className"> | null} [avatar] - Props for avatar image
 * @property {Omit<BadgeProps, "className">} [badge] - Props for badge overlay
 */
export interface CellImageProps {
  imageType?: "thumbnail" | "avatar";
  thumbnail?: Omit<ThumbnailProps, "className">;
  avatar?: Omit<AvatarProps, "className"> | null;
  badge?: Omit<BadgeProps, "className">;
}

/**
 * Utility function to adjust avatar src path based on environment
 * @param avatar - Avatar props containing src path
 * @returns Adjusted avatar props with corrected src path
 */
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
 * Component for rendering either an Avatar or Thumbnail image in a table cell
 * Handles environment-specific path adjustments and proper sizing
 * 
 * @example
 * ```tsx
 * <CellImage
 *   imageType="avatar"
 *   avatar={{ src: "/path/to/avatar.jpg" }}
 *   badge={{ status: "online" }}
 * />
 * ```
 */
export const CellImage: React.FC<CellImageProps> = ({ 
  imageType = "thumbnail",
  thumbnail,
  avatar,
  badge
}) => {
  if (imageType === "avatar" && avatar) {
    return (
      <Avatar
        {...getAdjustedAvatarProps(avatar)}
        badge={badge}
        size="sm"
        className="flex-shrink-0"
      />
    );
  }

  if (imageType === "thumbnail" && thumbnail) {
    return <Thumbnail {...thumbnail} className="flex-shrink-0" />;
  }

  return null;
};
