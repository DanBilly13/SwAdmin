import React from "react";
import classNames from "classnames";

export type IconSize = "lg" | "md" | "sm" | "xsm";

const sizeClasses: Record<IconSize, string> = {
  lg: "!w-[60px] !h-[60px] !text-[60px] !font-size-[60px]",
  md: "!w-[48px] !h-[48px] !text-[48px] !font-size-[48px]",
  sm: "!w-[36px] !h-[36px] !text-[36px] !font-size-[36px]",
  xsm: "!w-[24px] !h-[24px] !text-[24px] !font-size-[24px]",
};

export interface IconProps {
  /**
   * The name of the Material Symbol icon
   */
  name?: string;
  /**
   * The size of the icon
   */
  size?: IconSize;
  /**
   * Custom color class for the icon (e.g., "text-primary", "text-gray-500")
   */
  color?: string;
  /**
   * Fill variation (0 or 1)
   */
  fill?: number;
  /**
   * Weight variation (100-700)
   */
  weight?: number;
  /**
   * Additional CSS classes
   */
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name = "circle",
  size = "md",
  color = "text-gray-900",
  fill = 0,
  weight = 400,
  className,
}) => {
  return (
    <span
      className={classNames(
        "material-symbols-rounded block",
        sizeClasses[size],
        color,
        className
      )}
      style={{
        fontSize: size === 'lg' ? '60px' : 
                 size === 'md' ? '48px' : 
                 size === 'sm' ? '36px' : '24px',
        fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}`
      }}
    >
      {name}
    </span>
  );
};

export default Icon;
