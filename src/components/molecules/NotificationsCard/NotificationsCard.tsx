import React from "react";
import { Icon, IconSize } from "../../atoms/Icon/Icon";

export interface NotificationsCardProps {
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
  /** Variant of the notifications card */
  variant?: "stacked" | "inline";
  /** Border variant for the card */
  borderVariant?: "default" | "caution" | "error" | "success";
  /** Whether to show the border */
  showBorder?: boolean;
  /** Additional inline content for inline variant */
  inlineContent?: string[];
  /** Optional className for styling */
  className?: string;
}

/**
 * Notifications Card Molecule
 * Displays a notification with an icon, title, description, and date
 */
export const NotificationsCard: React.FC<NotificationsCardProps> = ({
  icon,
  title,
  description,
  date,
  onClick,
  variant = "stacked",
  borderVariant = "default",
  showBorder = true,
  className,
}) => {
  console.log('NotificationsCard Props:', {
    icon,
    title,
    description,
    date,
    variant,
    borderVariant,
    showBorder,
    className
  });

  const borderVariantClasses = {
    default: "border-border",
    caution: "border-border-caution",
    error: "border-border-error",
    success: "border-border-success",
  };

  const containerClasses = {
    stacked: `
      flex items-start 
      p-4 
      bg-white 
      rounded-lg 
      hover:bg-gray-50 
      transition-colors 
      cursor-pointer
      ${showBorder ? "border" : ""}
      ${showBorder ? borderVariantClasses[borderVariant] : ""}
      w-full      
    `,
    inline: `
      flex sm:items-center
      px-1 
      py-1
      bg-surface
      rounded-lg 
      hover:bg-gray-50 
      transition-colors 
      cursor-pointer
      ${showBorder ? "border" : ""}
      ${showBorder ? borderVariantClasses[borderVariant] : ""}
      w-full
      h-full
    `,
  };

  const contentClasses = {
    stacked: "flex-col gap-2",
    inline: "flex-col sm:flex-row sm:items-center gap-x-1",
  };

  const iconContainerClasses = {
    stacked: "mr-4 flex items-center",
    inline: "mr-1 flex items-center",
  };

  const iconSizeClasses = {
    stacked: "xsm",
    inline: "xxsm",
  };

  return (
    <div
      className={`${containerClasses[variant]} ${className}`}
      onClick={onClick}
    >
      <div
        className={`${iconContainerClasses[variant]} ${
          variant === "stacked" ? "items-start" : "items-center"
        } h-full`}
      >
        <Icon
          name={icon}
          weight={400}
          size={iconSizeClasses[variant] as IconSize}
          className="text-primary-500"
        />
      </div>
      <div className={`flex-1 flex ${contentClasses[variant]}`}>
        <div className="text-label-m text-content">{title}</div>
        <div className="text-body-s text-content-secondary">{description}</div>
        <div className="text-body-s text-content-secondary">{date}</div>
      </div>
    </div>
  );
};

export default NotificationsCard;
