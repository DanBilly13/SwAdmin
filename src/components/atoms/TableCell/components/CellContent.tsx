import React from "react";
import { Chip, ChipProps } from "../../Chip/Chip";
import { Badge, BadgeProps } from "../../Badge/Badge";
import { Avatar, AvatarProps } from "../../Avatar/Avatar";
import { Dropdown, DropdownProps } from "../../Dropdown/Dropdown";
import { IconButton } from "../../IconButton/IconButton";
import { NotificationsCard } from "../../../molecules/NotificationsCard/NotificationsCard";
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
 * @property {string} date - Date for the NotificationsCard
 * @property {string[]} [inlineContent] - Inline content for the NotificationsCard
 * @property {"inline" | "stacked"} [variant] - Variant for the NotificationsCard
 * @property {string} [secondReporter] - Second reporter for the NotificationsCard
 * @property {string} [secondReason] - Second reason for the NotificationsCard
 * @property {string} [secondReportDate] - Second report date for the NotificationsCard
 */
export interface NotificationsCardProps {
  icon: string;
  title?: string;
  description?: string;
  date: string;
  inlineContent?: string[];
  variant?: "inline" | "stacked";
  secondReporter?: string;
  secondReason?: string;
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
 * @property {boolean} [useNotificationsCard] - Explicitly control NotificationsCard rendering
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
  inlineContent?: string[];
  date?: string;
  icon?: string;
  useNotificationsCard?: boolean;
  NotificationsCard?: NotificationsCardProps;
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
  } = baseProps;

  if (isSecondReport && (secondReporter || secondReason)) {
    return {
      icon,
      title: title || "",
      description: `Second Report by ${secondReporter || "Unknown"}`,
      date: secondReportDate || date || "",
      variant: "inline" as const,
      inlineContent: [`Reason: ${secondReason || "Not specified"}`],
      borderVariant: "error" as const,
    };
  }

  return {
    icon,
    title: title || "",
    description: description || "",
    date: date || "",
    variant: "inline" as const,
    borderVariant: "error" as const,
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
  inlineContent,
  date,
  icon,
  useNotificationsCard,
  NotificationsCard: NotificationsCardProps,
}) => {
  if (NotificationsCardProps) {
    return (
      <div className="flex flex-col gap-2 w-full">
        <NotificationsCard
          {...getNotificationsCardProps(NotificationsCardProps)}
          className="w-full"
        />
        {(NotificationsCardProps.secondReporter ||
          NotificationsCardProps.secondReason) && (
          <NotificationsCard
            {...getNotificationsCardProps(NotificationsCardProps, true)}
            className="w-full"
          />
        )}
      </div>
    );
  }

  // If useNotificationsCard is true, use NotificationsCard inline variant
  if (useNotificationsCard && inlineContent && date && icon) {
    return (
      <NotificationsCard
        title={title || ""}
        icon={icon}
        inlineContent={inlineContent}
        date={date}
        variant="inline"
        description=""
        borderVariant="error"
      />
    );
  }

  return (
    <div className="flex flex-col gap-0">
      {avatar !== null && avatar && <Avatar {...avatar} />}
      <CellTitle title={title} description={description} />
      {chip && <CellChip chip={chip} />}
      {badge && <Badge {...badge} />}
    </div>
  );
};

export default CellContent;
