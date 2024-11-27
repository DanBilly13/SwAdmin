import React from "react";
import classNames from "classnames";
import { getImagePath, DEFAULT_AVATAR, DEFAULT_TEAM_BADGE } from "../../../utils/imagePaths";

export type ThumbnailSize = "sm" | "md" | "lg";
export type ThumbnailType = "avatar" | "team-badge";

const sizeClasses: Record<ThumbnailSize, string> = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
};

const teamBadgePaddingClasses: Record<ThumbnailSize, string> = {
  sm: "p-1",
  md: "p-1.5",
  lg: "p-2",
};

export interface ThumbnailProps {
  src?: string;
  size?: ThumbnailSize;
  type?: ThumbnailType;
  alt?: string;
  className?: string;
  isVideo?: boolean;
  icon?: string;
  disabled?: boolean;
}

export const Thumbnail = ({
  src,
  size = "md",
  type = "avatar",
  alt,
  className,
  isVideo = false,
  icon,
  disabled,
}: ThumbnailProps) => {
  const defaultImage = type === "avatar" ? DEFAULT_AVATAR : DEFAULT_TEAM_BADGE;

  const [imgSrc, setImgSrc] = React.useState(src || defaultImage);

  const handleError = () => {
    setImgSrc(defaultImage);
  };

  React.useEffect(() => {
    setImgSrc(src || defaultImage);
  }, [src]);

  const containerClasses = classNames(
    "rounded relative",
    sizeClasses[size],
    type === "team-badge" && [teamBadgePaddingClasses[size], "border border-border"],
    className
  );

  const videoIconClasses = classNames(
    "w-0 h-0 ml-[2px]",
    "border-y-[5px] border-l-[8px] border-r-0",
    "border-y-fill-on border-l-content border-solid",
    {
      "!border-y-[3px] !border-l-[5px]": size === "sm",
      "!border-y-[4px] !border-l-[6px]": size === "md",
      "!border-y-[5px] !border-l-[8px]": size === "lg",
    }
  );

  const maskSizes = {
    sm: { circle: 16, triangle: 5, offset: 1 },
    md: { circle: 20, triangle: 6, offset: 1 },
    lg: { circle: 24, triangle: 8, offset: 1 },
  };

  const getMaskSvg = (circleSize: number, triangleSize: number, offset: number) => {
    // Multiply all dimensions by 10 for higher precision
    const scale = 10;
    const viewSize = circleSize * scale;
    const center = viewSize / 2;
    const triangleHeight = triangleSize * scale * 1.5;
    const triangleWidth = triangleSize * scale;
    const triangleLeft = center - triangleWidth/2 + (offset * scale);
    const triangleTop = center - triangleHeight/2;
    
    return `url("data:image/svg+xml,<svg width='${circleSize}' height='${circleSize}' viewBox='0 0 ${viewSize} ${viewSize}' shape-rendering='geometricPrecision' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M${viewSize} ${center}A${center} ${center} 0 0 1 ${center} ${viewSize}A${center} ${center} 0 0 1 0 ${center}A${center} ${center} 0 0 1 ${center} 0A${center} ${center} 0 0 1 ${viewSize} ${center}ZM${triangleLeft.toFixed(1)} ${triangleTop.toFixed(1)}L${(triangleLeft + triangleWidth).toFixed(1)} ${center.toFixed(1)}L${triangleLeft.toFixed(1)} ${(triangleTop + triangleHeight).toFixed(1)}Z' fill='black'/></svg>")`;
  };

  const circleClasses = classNames(
    "bg-fill-on rounded-full flex items-center justify-center",
    {
      "w-4 h-4": size === "sm",
      "w-5 h-5": size === "md",
      "w-6 h-6": size === "lg",
    }
  );

  const getMaskStyle = () => {
    const sizes = maskSizes[size];
    return {
      WebkitMaskImage: getMaskSvg(sizes.circle, sizes.triangle, sizes.offset),
      maskImage: getMaskSvg(sizes.circle, sizes.triangle, sizes.offset),
    };
  };

  return (
    <div className={containerClasses}>
      {type === "icon" && icon ? (
        <img
          src={icon}
          alt={alt}
          className="w-full h-full object-contain rounded"
        />
      ) : (
        <img
          src={imgSrc}
          alt={alt}
          onError={handleError}
          className={classNames(
            "w-full h-full object-cover rounded",
            disabled && "opacity-50 cursor-not-allowed"
          )}
          {...(disabled ? { disabled: true } : {})}
        />
      )}
      {isVideo && type === "avatar" && (
        <div className="absolute inset-0 bg-content/30 rounded flex items-center justify-center">
          <div className={circleClasses} style={getMaskStyle()} />
        </div>
      )}
    </div>
  );
};

export default Thumbnail;
