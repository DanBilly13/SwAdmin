import React from "react";
import classNames from "classnames";
import { Thumbnail } from "../../atoms";
import type { ThumbnailSize } from "../../atoms/Thumbnail/Thumbnail";
import { getAssetPath } from "../../../utils/paths";

export type TeamProfileSize = "large" | "medium" | "small";

const thumbnailSizes: Record<TeamProfileSize, ThumbnailSize> = {
  large: "lg",
  medium: "md",
  small: "sm",
};

const nameTextClasses: Record<TeamProfileSize, string> = {
  large: "text-headline-s",
  medium: "text-title-m",
  small: "text-title-m",
};

const divisionClasses: Record<TeamProfileSize, string> = {
  large: "mt-1",
  medium: "mt-0.5 text-label-s",
  small: "mt-0.5 text-label-s",
};

export interface TeamProfileProps {
  name: string;
  division: string;
  badgeSrc?: string;
  size?: TeamProfileSize;
  className?: string;
}

export const TeamProfile: React.FC<TeamProfileProps> = ({
  name,
  division,
  badgeSrc,
  size = "large",
  className = "",
}) => {
  return (
    <div className={classNames("flex items-center", className)}>
      <div className="relative flex-shrink-0">
        <Thumbnail
          size={thumbnailSizes[size]}
          type="teamBadge"
          src={badgeSrc ? getAssetPath(badgeSrc) : undefined}
        />
      </div>
      <div className={classNames(
        "flex flex-col min-w-0",
        size === "large" ? "ml-4" : "ml-3"
      )}>
        <h3
          className={classNames("text-content-primary truncate", nameTextClasses[size])}
        >
          {name}
        </h3>
        <span
          className={classNames(
            "text-content-secondary truncate",
            divisionClasses[size]
          )}
        >
          {division}
        </span>
      </div>
    </div>
  );
};

export default TeamProfile;
