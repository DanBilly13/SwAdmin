import React from "react";
import { Chip, ChipProps } from "../../Chip/Chip";
import { Badge, BadgeProps } from "../../Badge/Badge";
import { Avatar, AvatarProps } from "../../Avatar/Avatar";
import { Dropdown, DropdownProps } from "../../Dropdown/Dropdown";
import { IconButton } from "../../IconButton/IconButton";
import { NotificationsCardBasic } from "../../../molecules/NotificationsCard/NotificationsCardBasic";
import { Thumbnail, ThumbnailProps } from "../../../atoms/Thumbnail/Thumbnail";
import { AccordionHybrid } from "../../AccordionHybrid/AccordionHybrid";

/**
 * Props for the cell title section
 * @property {string} [title] - Main text content
 * @property {string} [description] - Secondary text content
 * @property {string} [description2] - Additional description text content
 */
interface CellTitleProps {
  title?: string;
  description?: string;
  description2?: string;
}

/**
 * Props for the NotificationsCard component
 * @property {string} icon - Icon for the NotificationsCard
 * @property {string} [title] - Title for the NotificationsCard
 * @property {string} [description] - Description for the NotificationsCard
 * @property {string} [date] - Date for the NotificationsCard
 * @property {string[]} [inlineContent] - Inline content for the NotificationsCard
 * @property {"inline" | "stacked"} [variant] - Variant for the NotificationsCard
 * @property {string} [secondReporter] - Second reporter for the NotificationsCard
 * @property {string} [secondReason] - Second reason for the NotificationsCard
 * @property {string} [secondReportDate] - Second report date for the NotificationsCard
 * @property {boolean} [showBorder] - Show border for the NotificationsCard
 */
export interface NotificationsCardProps {
  /** Leading icon name from the icon set */
  icon: string;
  /** Main title of the notification */
  title?: string;
  /** Descriptive text for the notification */
  description?: string;
  /** Date or timestamp of the notification */
  date?: string;
  /** Optional onClick handler for the entire card */
  onClick?: () => void;
  /** Border variant for the card */
  borderVariant?: "default" | "caution" | "error" | "success";
  /** Whether to show the border */
  showBorder?: boolean;
  /** Optional className for styling */
  className?: string;
  /** Second reporter for additional report */
  secondReporter?: string;
  /** Second reason for additional report */
  secondReason?: string;
  /** Second report date */
  secondReportDate?: string;
}

/**
 * Props for the cell content section
 * @extends CellTitleProps
 * @property {Omit<ChipProps, "className">} [chip] - Props for the chip component
 * @property {Omit<BadgeProps, "className">} [badge] - Props for the badge component
 * @property {Omit<AvatarProps, "className"> | null} [avatar] - Props for the avatar component
 * @property {Omit<DropdownProps, "className">} [dropdown] - Props for the dropdown component
 * @property {IconButton} [iconButton] - Props for the icon button
 * @property {string[]} [inlineContent] - Content for inline notifications card variant
 * @property {string} [date] - Date for inline notifications card variant
 * @property {React.ReactNode} [icon] - Icon for inline notifications card variant
 * @property {NotificationsCardProps} [NotificationsCard] - Props for the NotificationsCard component
 * @property {ThumbnailProps} [thumbnail] - Props for the Thumbnail component
 * @property {accordion} [accordion] - Props for the Accordion component
 */
export interface CellContentProps extends CellTitleProps {
  chip?: Omit<ChipProps, "className">;
  badge?: Omit<BadgeProps, "className">;
  avatar?: Omit<AvatarProps, "className"> | null;
  dropdown?: Omit<DropdownProps, "className">;
  iconButton?: {
    icon: string;
    onClick?: () => void;
    menuOptions?: Array<{ value: string; label: string }>;
    menuPosition?: "left" | "center" | "right";
    menuType?: "action" | "select";
  };
  icon?: React.ReactNode;
  onClick?: () => void;
  menuOptions?: Array<{ value: string; label: string }>;
  value?: string;
  label?: string;
  menuPosition?: "left" | "center" | "right";
  menuType?: "action" | "select";
  NotificationsCard?: NotificationsCardProps & {
    /** Optional custom icon color for NotificationsCard */
    iconColor?: string;
  };
  thumbnail?: Omit<ThumbnailProps, "className">;
  accordion?: {
    label: string;
    labelTrailing?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onToggle?: (isOpen: boolean) => void;
    removeRoundedLeft?: boolean;
    removeRoundedRight?: boolean;
  };
}

/**
 * Renders the title and description text
 */
const CellTitle: React.FC<CellTitleProps> = ({
  title,
  description,
  description2,
}) => {
  if (!title && !description && !description2) return null;

  return (
    <>
      {title && <div className="text-body-s text-content">{title}</div>}
      {description && (
        <div className="text-body-s text-content-secondary">{description}</div>
      )}
      {description2 && (
        <div className="text-body-s text-content-secondary">{description2}</div>
      )}
    </>
  );
};

/**
 * Renders a chip with proper spacing
 */
const CellChip: React.FC<Pick<CellContentProps, "chip">> = ({ chip }) => {
  if (!chip) return null;

  return (
    <div className="mt-1">
      <Chip {...chip} />
    </div>
  );
};

const getNotificationsCardProps = (
  baseProps: NotificationsCardProps,
  isSecondReport: boolean = false
) => {
  const {
    icon,
    title,
    description,
    date,
    secondReporter,
    secondReason,
    secondReportDate,
    showBorder = true,
    ...restProps
  } = baseProps;

  if (isSecondReport && (secondReporter || secondReason)) {
    return {
      ...restProps,
      icon,
      title: secondReporter || "",
      description: secondReason || "",
      date: secondReportDate || date || "",
      borderVariant: "error" as const,
      showBorder,
    };
  }

  return {
    ...restProps,
    icon,
    title: title || "",
    description: description || "",
    date: date || "",
    borderVariant: "error" as const,
    showBorder,
  };
};

/**
 * Component for rendering the content section of a table cell
 * Includes title, description, and optional chip
 *
 * @example
 * ```tsx
 * <CellContent
 *   title="User Name"
 *   description="user@example.com"
 *   chip={{ children: "Active", variant: "success" }}
 * />
 * ```
 */
export const CellContent: React.FC<CellContentProps> = ({
  title,
  description,
  chip,
  badge,
  avatar,
  thumbnail,
  iconButton,
  icon,
  NotificationsCard,
  description2,
  accordion,
}) => {
  if (NotificationsCard) {
    const firstCardProps = getNotificationsCardProps(NotificationsCard, false);
    return (
      <div className="w-full flex flex-col gap-2">
        <NotificationsCardBasic {...firstCardProps} className="w-full" />
        {NotificationsCard.secondReporter && (
          <NotificationsCardBasic
            {...getNotificationsCardProps(NotificationsCard, true)}
            className="w-full"
          />
        )}
      </div>
    );
  }

  if (accordion) {
    return (
      <AccordionHybrid
        label={accordion.label}
        labelTrailing={accordion.labelTrailing}
        children={accordion.children}
        isOpen={accordion.isOpen}
        onToggle={accordion.onToggle}
        removeRoundedLeft={accordion.removeRoundedLeft}
        removeRoundedRight={accordion.removeRoundedRight}
        className="w-full"
      />
    );
  }

  return (
    <div className="flex items-center gap-2">
      {avatar && <Avatar {...avatar} />}
      {thumbnail && <Thumbnail {...thumbnail} />}
      <div className="flex-1 min-w-0">
        <CellTitle
          title={title}
          description={description}
          description2={description2}
        />
        {chip && <CellChip chip={chip} />}
        {badge && <Badge {...badge} />}
      </div>
      {iconButton && (
        <IconButton
          icon={iconButton.icon}
          onClick={iconButton.onClick}
          menuOptions={iconButton.menuOptions}
          menuPosition={iconButton.menuPosition}
          menuType={iconButton.menuType}
        />
      )}
      {icon && icon}
    </div>
  );
};

export default CellContent;
