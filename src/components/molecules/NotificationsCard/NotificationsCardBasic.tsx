import React from "react";
import { Icon, IconSize } from "../../atoms/Icon/Icon";

export interface NotificationsCardBasicProps {
  /** Leading icon name from the icon set */
  icon: string;
  /** Main title of the notification */
  title: string;
  /** Descriptive text for the notification */
  description: string;
  /** Date or timestamp of the notification */
  date: string;
  /** Optional onClick handler for the entire card */
  onClick?: () => void;
  /** Border variant for the card */
  borderVariant?: "default" | "caution" | "error" | "success";
  /** Whether to show the border */
  showBorder?: boolean;
  /** Optional className for styling */
  className?: string;
  /** Optional custom icon color */
  iconColor?: string;
}

/**
 * Basic Notifications Card Molecule
 * Displays a notification with an icon, title, description, and date
 */
export const NotificationsCardBasic: React.FC<NotificationsCardBasicProps> = ({
  icon,
  title,
  description,
  date,
  onClick,
  borderVariant = "default",
  showBorder = true,
  className,
  iconColor,
}) => {
  const borderVariantClasses = {
    default: "border-secondary",
    caution: "border-caution",
    error: "border-error",
    success: "border-success",
  };

  const containerClasses = `
    flex flex-row items-start sm:items-center
    px-1 sm: px-0.5
    py-1 sm: px-0.5
    bg-surface-tertiary
    rounded-sm 

    ${showBorder ? "border" : ""}
    ${showBorder ? borderVariantClasses[borderVariant] : ""}
    w-full
    h-full
    ${className || ""}
  `;

  const contentClasses = "flex flex-col sm:flex-row sm:items-center gap-x-1";
  const iconContainerClasses =
    "mr-2 flex items-center justify-start sm:justify-center mb-1 sm:mb-0";
  const iconSizeClasses = "xxsm";

  return (
    <div className={containerClasses} onClick={onClick}>
      <div className={iconContainerClasses}>
        <Icon
          name={icon}
          size={iconSizeClasses as IconSize}
          color={iconColor}
        />
      </div>
      <div className={`flex ${contentClasses}`}>
        <div className="flex flex-col sm:flex-row sm:items-center gap-x-2 w-full">
          <span className="text-body-s text-content text-left">{title}</span>
          {description && (
            <span className="text-body-s italic text-content-secondary text-left">
              {description}
            </span>
          )}
          {date && (
            <span className="text-body-s text-content-secondary text-left">
              {date}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationsCardBasic;
