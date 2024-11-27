import React from "react";
import classNames from "classnames";

export type ThumbnailSize = "large" | "medium" | "small" | "tiny";
export type ThumbnailType = "image" | "teamBadge" | "icon";

const sizeClasses: Record<ThumbnailSize, string> = {
  large: "w-[60px] h-[60px]",
  medium: "w-[48px] h-[48px]",
  small: "w-[36px] h-[36px]",
  tiny: "w-[24px] h-[24px]",
};

const teamBadgePaddingClasses: Record<ThumbnailSize, string> = {
  large: "p-2",
  medium: "p-1.5",
  small: "p-1",
  tiny: "p-0.5",
};

const DEFAULT_IMAGE = "/images/avatars/TheRock.jpg";
const DEFAULT_TEAM_BADGE = "/images/team-badges/svff.jpg";

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
  size = "medium",
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
    type === "teamBadge" && [teamBadgePaddingClasses[size], "border border-border"],
    className
  );

  const videoIconClasses = classNames(
    "w-0 h-0 ml-[2px]",
    "border-y-[5px] border-l-[8px] border-r-0",
    "border-y-fill-on border-l-content border-solid",
    {
      "!border-y-[3px] !border-l-[5px]": size === "tiny",
      "!border-y-[4px] !border-l-[6px]": size === "small",
      "!border-y-[5px] !border-l-[8px]": size === "medium",
      "!border-y-[6px] !border-l-[10px]": size === "large",
    }
  );

  const maskSizes = {
    tiny: { circle: 16, triangle: 5, offset: 1 },
    small: { circle: 20, triangle: 6, offset: 1 },
    medium: { circle: 24, triangle: 8, offset: 1 },
    large: { circle: 32, triangle: 10, offset: 2 },
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
      "w-4 h-4": size === "tiny",
      "w-5 h-5": size === "small",
      "w-6 h-6": size === "medium",
      "w-8 h-8": size === "large",
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
      {isVideo && type === "image" && (
        <div className="absolute inset-0 bg-content/30 rounded flex items-center justify-center">
          <div className={circleClasses} style={getMaskStyle()} />
        </div>
      )}
    </div>
  );
};

export default Thumbnail;
