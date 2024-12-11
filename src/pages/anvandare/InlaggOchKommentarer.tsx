import React from "react";
import { ContentContainerSlots } from "../../components/atoms/ContentContainerSlots/ContentContainerSlots";
import { MainContentHead } from "../../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from "../../components/templates";
import { PageTitle } from "../../components/atoms/PageTitle/PageTitle";
import { Card, TableCell, TableHead } from "../../components/atoms";
import { GridTableRow } from "../../components/molecules/GridTableRow/GridTableRow";

import { uploads } from "../../data/uploads";
import { classNames } from "../../utils/classNames";
import { FilterAndSearch } from "../../components/molecules/FilterAndSearch/FilterAndSearch";
import {
  getColumnSpanClasses,
  isFirstInRow,
  isLastInRow,
} from "../../utils/tableUtils";
import { ThumbnailType } from "../../components/atoms/Thumbnail/Thumbnail";

interface TableCellData {
  type: "text" | "image";
  imageType?: "avatar" | "thumbnail";
  title?: string;
  description?: string;
  thumbnail?: {
    src: string;
    size: "sm" | "md" | "lg";
    type?: ThumbnailType;
    isVideo?: boolean;
  };
  badge?: {
    variant: "success" | "error";
    icon: string;
  };
  chip?: {
    children: string;
    variant: "success" | "error" | "warning" | "info";
    className?: string;
  };
  iconButton?: {
    icon: string;
    onClick?: () => void;
    menuOptions?: { value: string; label: string }[];
    menuPosition?: "left" | "right" | "center";
    menuType?: "action" | "select";
  };
  icon?: string;
  inlineContent?: string[];
  date?: string;
  NotificationsCard?: {
    icon: string;
    title?: string;
    description?: string;
    date: string;
    variant?: "inline" | "stacked";
    secondReporter?: string;
    secondReason?: string;
    secondReportDate?: string;
    thirdReporter?: string;
    thirdReason?: string;
    thirdReportDate?: string;
  };
}

interface TableRowData {
  id: string | number;
  content: TableCellData[];
}

interface ColumnDefinition {
  header: string;
  span: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
  };
  align: "left" | "right";
  className?: string;
}

const getStatusConfig = (
  status: string
): {
  variant: "success" | "error" | "warning" | "info";
  text: string;
} => {
  switch (status) {
    case "Auto Borttaget":
      return {
        variant: "error",
        text: "Auto Borttaget",
      };
    case "Inlägg Borttaget":
      return {
        variant: "error",
        text: "Inlägg Borttaget",
      };
    case "Inlägg återställt":
      return {
        variant: "warning",
        text: "Inlägg återställt",
      };
    case "Anmälan avfärdad":
      return {
        variant: "info",
        text: "Anmälan avfärdad",
      };
    default:
      return {
        variant: "info",
        text: status,
      };
  }
};

const tableData: TableRowData[] = uploads.map((upload) => ({
  id: upload.id,
  content: [
    {
      type: "text",
      title: upload.id.toString(),
    },
    {
      type: "text",
      title: upload.postAuthor,
      description: upload.postText,
      thumbnail: {
        src: upload.thumbnailSrc,
        size: "lg",
        isVideo: upload.isVideo,
      },
    },

    {
      type: "text",
      title: "",
      chip: {
        children: upload.status,
        variant: getStatusConfig(upload.status).variant,
        className: "whitespace-nowrap",
      },
    },

    {
      type: "text",
      title: "",
      iconButton: {
        icon: "more_vert",
        menuOptions: [
          { value: "edit", label: "Redigera" },
          { value: "delete", label: "Ta bort" },
        ],
        menuPosition: "right",
        menuType: "action",
        onClick: () => {
          // Add your click handling logic here
          console.log("Button clicked");
        },
      },
    },
  ],
}));

const columns: ColumnDefinition[] = [
  {
    header: "id",
    span: {
      xs: 16,
      sm: 16,
      md: 1,
      lg: 1,
    },
    align: "left" as const,
  },
  {
    header: "Post",
    span: {
      xs: 16,
      sm: 16,
      md: 11,
      lg: 11,
    },
    align: "left" as const,
  },

  {
    header: "Status",
    span: {
      xs: 8,
      sm: 8,
      md: 2,
      lg: 2,
    },
    align: "left" as const,
  },

  {
    header: "Action",
    span: {
      xs: 8,
      sm: 8,
      md: 2,
      lg: 2,
    },
    align: "right" as const,
    className: "pr-0",
  },
];

const InlaggOchKommentarer = () => {
  const { toggleDrawer } = useDrawerControl();
  const [searchValue, setSearchValue] = React.useState("");
  const [roleFilter, setRoleFilter] = React.useState("alla");
  const [seasonFilter, setSeasonFilter] = React.useState("alla");
  const [sourceFilter, setSourceFilter] = React.useState("alla");

  return (
    <ContentContainerSlots
      header={
        <>
          <MainContentHead
            breadcrumbs={[
              { label: "Home", href: "/" },
              { label: "Användare", href: "/anvandare" },
              { label: "Lagroller", href: "/anvandare/lagroller" },
            ]}
            onMenuClick={toggleDrawer}
          />
          <PageTitle
            title="Inlagg Och Kommentarer"
            description="Hantera användarroller och team"
          />
        </>
      }
      filters={
        <FilterAndSearch
          filters={[
            {
              label: "Date",
              value: roleFilter,
              onChange: setRoleFilter,
              options: [
                { value: "alla", label: "All" },
                { value: "last 24 hrs", label: "Last 24 hrs" },
                { value: "last 7 days", label: "Last 7 days" },
                { value: "last 4 weeks", label: "Last 4 weeks" },
                { value: "last 3 months", label: "Last 3 months" },
                { value: "custom", label: "Custom" },
              ],
            },
            {
              label: "Type",
              value: seasonFilter,
              onChange: setSeasonFilter,
              options: [
                { value: "alla", label: "All" },
                { value: "video", label: "Video" },
                { value: "image", label: "Image" },
                { value: "Comment", label: "Comment" },
              ],
            },
            {
              label: "Status",
              value: sourceFilter,
              onChange: setSourceFilter,
              options: [
                { value: "alla", label: "Alla" },
                { value: "auto borttaget", label: "Auto borttaget" },
                { value: "borttagna", label: "Borttagna" },
                { value: "publicerade", label: "Publicerade" },
                { value: "anmälan avfärdad", label: "Anmälan avfärdad" },
                { value: "återställda", label: "Återställda" },
              ],
            },
          ]}
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          showSpacer={true}
        />
      }
      content={
        <Card variant="table">
          <TableHead>
            <GridTableRow hasBorder={false}>
              {columns.map((column, index) => (
                <TableCell
                  key={index}
                  align={column.align}
                  variant="header"
                  className={classNames(
                    getColumnSpanClasses(column.span),
                    column.className,
                    "hidden md:flex items-center gap-4",
                    (column.header === "Blank" || column.header === "Report") &&
                      "text-transparent md:select-none h-0 !pb-0"
                  )}
                  isLast={index === columns.length - 1}
                >
                  {column.header}
                </TableCell>
              ))}
            </GridTableRow>
          </TableHead>
          {tableData.map((row, index) => (
            <GridTableRow key={index}>
              {row.content.map((cell, cellIndex) => {
                const first = isFirstInRow(
                  cellIndex,
                  columns,
                  row.content.length
                );
                const last = isLastInRow(
                  cellIndex,
                  columns,
                  row.content.length
                );

                return (
                  <TableCell
                    key={cellIndex}
                    align={columns[cellIndex].align}
                    className={classNames(
                      getColumnSpanClasses(columns[cellIndex].span),
                      columns[cellIndex].className,
                      "flex items-center gap-4",
                      {
                        "justify-end": columns[cellIndex].align === "right",
                      }
                    )}
                    isLast={last}
                    title={cell.title}
                    description={cell.description || cell.date}
                    imageType={cell.imageType}
                    thumbnail={cell.thumbnail}
                    badge={cell.badge}
                    chip={cell.chip}
                    iconButton={cell.iconButton}
                    icon={cell.icon as any}
                    NotificationsCard={cell.NotificationsCard}
                  />
                );
              })}
            </GridTableRow>
          ))}
        </Card>
      }
    />
  );
};

export default InlaggOchKommentarer;
