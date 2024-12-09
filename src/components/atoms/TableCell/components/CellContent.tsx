import React from "react";
import { Chip, ChipProps } from "../../Chip/Chip";
import { Badge, BadgeProps } from "../../Badge/Badge";
import { Avatar, AvatarProps } from "../../Avatar/Avatar";
import { Dropdown, DropdownProps } from "../../Dropdown/Dropdown";
import { IconButton } from "../../IconButton/IconButton";
import { NotificationsCardBasic } from "../../../molecules/NotificationsCard/NotificationsCardBasic";
import { Thumbnail, ThumbnailProps } from "../../../atoms/Thumbnail/Thumbnail";

/**
 * Props for the cell title section
 * @property {string} [title] - Main text content
 * @property {string} [description] - Secondary text content
 */
interface CellTitleProps {
  title?: string;
  description?: string;
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
 * @property {string} [icon] - Icon for inline notifications card variant
 * @property {NotificationsCardProps} [NotificationsCard] - Props for the NotificationsCard component
 * @property {ThumbnailProps} [thumbnail] - Props for the Thumbnail component
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
  icon?: string;
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
}

/**
 * Renders the title and description text
 */
const CellTitle: React.FC<CellTitleProps> = ({ title, description }) => {
  if (!title && !description) return null;

  return (
    <>
      {title && <div className="text-body-s text-content">{title}</div>}
      {description && (
        <div className="text-body-s text-content-secondary">{description}</div>
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
}) => {
  if (NotificationsCard) {
    return (
      <div className="flex flex-col gap-0 w-full border border-surface-caution rounded-sm">
        {/* <div className="text-label-s text-content">Reports</div> */}
        <NotificationsCardBasic
          {...getNotificationsCardProps(NotificationsCard)}
          className="w-auto"
          showBorder={false}
          iconColor={NotificationsCard.iconColor}
        />
        {(NotificationsCard.secondReporter ||
          NotificationsCard.secondReason) && (
          <NotificationsCardBasic
            {...getNotificationsCardProps(NotificationsCard, true)}
            className="w-auto"
            showBorder={false}
            iconColor={NotificationsCard.iconColor}
          />
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-0">
      {avatar !== null && avatar && <Avatar {...avatar} />}
      {thumbnail && <Thumbnail {...thumbnail} />}
      <CellTitle title={title} description={description} />
      {chip && <CellChip chip={chip} />}
      {badge && <Badge {...badge} />}
      {iconButton && <IconButton {...iconButton} />}
      {icon && <div className="text-body-s text-content">{icon}</div>}
    </div>
  );
};

export default CellContent;
