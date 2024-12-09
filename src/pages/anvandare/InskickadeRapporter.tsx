import React from "react";
import { ContentContainerSlots } from "../../components/atoms/ContentContainerSlots/ContentContainerSlots";
import { MainContentHead } from "../../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from "../../components/templates";
import { PageTitle } from "../../components/atoms/PageTitle/PageTitle";
import { Card, TableCell, TableHead } from "../../components/atoms";
import { GridTableRow } from "../../components/molecules/GridTableRow/GridTableRow";
import { teams } from "../../data/teams";
import { reports } from "../../data/reports";
import { classNames } from "../../utils/classNames";
import { FilterAndSearch } from "../../components/molecules/FilterAndSearch/FilterAndSearch";
import {
  getColumnSpanClasses,
  isFirstInRow,
  isLastInRow,
} from "../../utils/tableUtils";
import {
  Thumbnail,
  ThumbnailType,
} from "../../components/atoms/Thumbnail/Thumbnail";

interface TableCellData {
  type: "text" | "image";
  imageType?: "avatar" | "thumbnail";
  title?: string;
  description?: string;
  thumbnail?: {
    src: string;
    size: "sm" | "md" | "lg";
    type?: ThumbnailType;
  };
  badge?: {
    variant: "success" | "error";
    icon: string;
  };
  chip?: {
    children: string;
    variant: "success" | "error";
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
    case "Publicerad":
      return {
        variant: "success",
        text: "Publicerad",
      };
    case "Inlägg Borttaget":
      return {
        variant: "error",
        text: "Inlägg Borttaget",
      };
    case "Auto Borttaget":
      return {
        variant: "error",
        text: "Auto Borttaget",
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

const tableData: TableRowData[] = reports.map((report) => ({
  id: report.id,
  content: [
    {
      type: "text",
      title: report.id.toString(),
    },
    {
      type: "text",
      title: report.postAuthor,
      description: report.postText,
      thumbnail: {
        src: report.thumbnailSrc,
        size: "lg",
      },
    },

    {
      type: "text",
      title: "",
      chip: {
        children: report.status,
        variant: report.status === "Anmälan avfärdad" ? "success" : "error",
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
    {
      type: "text",
      title: "",
    },
    {
      type: "text",
      NotificationsCard: {
        icon: "warning",
        title: report.firstReporter,
        description: report.firstReason,
        date: report.firstReportDate || "", // Add a fallback empty string
        variant: "inline",
        secondReporter: report.secondReporter,
        secondReason: report.secondReason,
        secondReportDate: report.secondReportDate,
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
      xs: 16,
      sm: 16,
      md: 2,
      lg: 2,
    },
    align: "left" as const,
  },
  {
    header: "Action",
    span: {
      xs: 16,
      sm: 16,
      md: 2,
      lg: 2,
    },
    align: "right" as const,
  },
  {
    header: "Blank",
    span: {
      xs: 16,
      sm: 16,
      md: 1,
      lg: 1,
    },
    align: "left" as const,
  },
  {
    header: "Report",
    span: {
      xs: 16,
      sm: 16,
      md: 15,
      lg: 15,
    },
    align: "left" as const,
  },
];

const InskickadeRapporter = () => {
  const { toggleDrawer } = useDrawerControl();
  const [searchValue, setSearchValue] = React.useState("");
  const [roleFilter, setRoleFilter] = React.useState("all");
  const [seasonFilter, setSeasonFilter] = React.useState("all");
  const [sourceFilter, setSourceFilter] = React.useState("all");

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
            title="Inskickade rapporter"
            description="Hantera användarroller och team"
          />
        </>
      }
      filters={
        <FilterAndSearch
          filters={[
            {
              label: "Roll",
              value: roleFilter,
              onChange: setRoleFilter,
              options: [
                { value: "all", label: "All" },
                { value: "staff", label: "Staff" },
                { value: "spelare", label: "Spelare" },
                { value: "guardian", label: "Guardian" },
              ],
            },
            {
              label: "Säsong",
              value: seasonFilter,
              onChange: setSeasonFilter,
              options: [
                { value: "all", label: "All" },
                { value: "2023-2024", label: "2023-2024" },
              ],
            },
            {
              label: "Källa",
              value: sourceFilter,
              onChange: setSourceFilter,
              options: [
                { value: "all", label: "All" },
                { value: "fogis", label: "Fogis" },
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
                    "flex items-center gap-4"
                  )}
                  isFirst={index === 0}
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
                    isFirst={first}
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

export default InskickadeRapporter;
