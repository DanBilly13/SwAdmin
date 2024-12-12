import React from "react";
import classNames from "classnames";
import { getAssetPath } from "../../../utils/paths";
import { Icon } from "../Icon/Icon";

export type ThumbnailSize = "lg" | "md" | "sm" | "xsm";
export type ThumbnailType =
  | "image"
  | "teamBadge"
  | "icon"
  | "comment"
  | "matchEvent";

const sizeClasses: Record<ThumbnailSize, string> = {
  lg: "w-[60px] h-[60px]",
  md: "w-[48px] h-[48px]",
  sm: "w-[36px] h-[36px]",
  xsm: "w-[24px] h-[24px]",
};

const teamBadgePaddingClasses: Record<ThumbnailSize, string> = {
  lg: "p-2",
  md: "p-1.5",
  sm: "p-1",
  xsm: "p-0.5",
};

const DEFAULT_IMAGE = getAssetPath("avatars/TheRock.jpg");
const DEFAULT_TEAM_BADGE = getAssetPath("team-badges/svff.jpg");

export interface ThumbnailProps {
  size?: ThumbnailSize;
  type?: ThumbnailType;
  src?: string;
  alt?: string;
  className?: string;
  isVideo?: boolean;
  icon?: string;
  disabled?: boolean;
}

export const Thumbnail = ({
  size = "md",
  type = "image",
  src,
  alt,
  className,
  isVideo = false,
  icon,
  disabled,
}: ThumbnailProps) => {
  const [imgSrc, setImgSrc] = React.useState(
    src || (type === "teamBadge" ? DEFAULT_TEAM_BADGE : DEFAULT_IMAGE)
  );

  const handleError = () => {
    setImgSrc(type === "teamBadge" ? DEFAULT_TEAM_BADGE : DEFAULT_IMAGE);
  };

  React.useEffect(() => {
    setImgSrc(
      src || (type === "teamBadge" ? DEFAULT_TEAM_BADGE : DEFAULT_IMAGE)
    );
  }, [src, type]);

  const containerClasses = classNames(
    "rounded relative",
    sizeClasses[size],
    type === "teamBadge" && [
      teamBadgePaddingClasses[size],
      "border border-border",
    ],
    className
  );

  const iconSize = {
    lg: "sm",
    md: "xsm",
    sm: "xxsm",
    xsm: "xxsm",
  } as const;

  return (
    <div className={containerClasses}>
      {type === "comment" ? (
        <div className="w-full h-full rounded bg-content-tertiary flex items-center justify-center">
          <Icon name="chat" size={iconSize[size]} color="text-white" fill={1} />
        </div>
      ) : type === "matchEvent" ? (
        <div className="w-full h-full rounded bg-content-tertiary flex items-center justify-center">
          <Icon
            name="scoreboard"
            size={iconSize[size]}
            color="text-white"
            fill={1}
          />
        </div>
      ) : type === "icon" ? (
        <div
          className={classNames(
            "w-full h-full rounded bg-gray-100 flex items-center justify-center",
            {
              "opacity-50": disabled,
            }
          )}
        >
          {icon && (
            <Icon name={icon} size={iconSize[size]} className="text-gray-500" />
          )}
        </div>
      ) : (
        <>
          <img
            src={imgSrc}
            alt={alt}
            onError={handleError}
            className={classNames("w-full h-full rounded object-cover", {
              "opacity-50": disabled,
            })}
          />
          {isVideo && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon
                name="play_circle"
                size={iconSize[size]}
                color="text-white"
                fill={1}
                className="drop-shadow-lg"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Thumbnail;
