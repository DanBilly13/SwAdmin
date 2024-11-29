import React from "react";
import classNames from "classnames";
import TableCell from "../../atoms/TableCell/TableCell";
import { Chip } from "../../atoms/Chip/Chip";
import { IconButton } from "../../atoms/IconButton/IconButton";

export interface TableRowProps {
  id?: number;
  thumbnail?: {
    src: string;
    alt: string;
    isVideo?: boolean;
  };
  title?: string;
  description?: string;
  date?: Date;
  status?: {
    label: string;
    variant: "success" | "warning" | "error" | "info" | "neutral";
  };
  onActionSelect?: () => void;
  className?: string;
  cells?: Array<{
    width?: number;
    content:
      | { type: "text"; text: string }
      | { type: "title-description"; title: string; description: string }
      | { type: "image"; src: string; alt: string }
      | {
          type: "chip";
          label: string;
          variant?: "primary" | "success" | "warning" | "error" | "info";
        };
    align?: string;
  }>;
}

const actionOptions = [
  { value: "edit", label: "Edit" },
  { value: "delete", label: "Delete" },
  { value: "archive", label: "Archive" },
];

export const TableRow: React.FC<TableRowProps> = ({
  id,
  thumbnail,
  title,
  description,
  date,
  status,
  onActionSelect,
  className,
  cells,
}) => {
  return (
    <div
      className={classNames(
        "grid grid-cols-16 gap-4 items-center py-4 px-6",
        className
      )}
    >
      {/* ID Column */}
      {id && <div className="text-body-s text-content-secondary">{id}</div>}

      {/* Thumbnail Column */}
      {thumbnail && (
        <TableCell
          thumbnail={{
            src: thumbnail.src,
            alt: thumbnail.alt,
            size: "md",
            isVideo: thumbnail.isVideo,
          }}
          title=""
        />
      )}

      {/* Title and Description Column */}
      {(title || description) && (
        <TableCell
          title={title}
          description={description}
          className="col-span-2"
        />
      )}

      {/* Date Column */}
      {date && (
        <div className="text-body-s text-content">
          {date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
          <div className="text-content-secondary">
            {date.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      )}

      {/* Status Chip Column */}
      {status && (
        <div className="flex items-center justify-between gap-4">
          <Chip variant={status.variant}>{status.label}</Chip>

          {/* More Actions Button */}
          <IconButton
            icon="more_vert"
            menuOptions={actionOptions}
            onClick={onActionSelect}
            menuType="action"
          />
        </div>
      )}

      {/* Flexible Cells */}
      {cells &&
        cells.map((cell, index) => (
          <div
            key={index}
            style={{ width: cell.width }}
            className={classNames(cell.align)}
          >
            {cell.content.type === "text" && <div>{cell.content.text}</div>}
            {cell.content.type === "title-description" && (
              <TableCell
                title={cell.content.title}
                description={cell.content.description}
              />
            )}
            {cell.content.type === "image" && (
              <TableCell
                thumbnail={{
                  src: cell.content.src,
                  alt: cell.content.alt,
                  size: "md",
                }}
                title=""
              />
            )}
            {cell.content.type === "chip" && (
              <Chip variant={cell.content.variant || "primary"}>
                {cell.content.label}
              </Chip>
            )}
          </div>
        ))}
    </div>
  );
};

export default TableRow;
