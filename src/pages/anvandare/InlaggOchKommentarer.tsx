import React from "react";
import { ContentContainerSlots } from "../../components/atoms/ContentContainerSlots/ContentContainerSlots";
import { MainContentHead } from "../../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from "../../components/templates";
import { PageTitle } from "../../components/atoms/PageTitle/PageTitle";
import { Card, TableCell, TableHead } from "../../components/atoms";
import { GridTableRow } from "../../components/molecules/GridTableRow/GridTableRow";
import { teams } from "../../data/teams";
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
  value: string;
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
  iconButton?: {
    icon: string;
    onClick?: () => void;
    menuOptions?: { value: string; label: string }[];
    menuPosition?: "left" | "right" | "center";
    menuType?: "action" | "select";
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

const tableData: TableRowData[] = teams.map((team) => ({
  id: team.id,
  content: [
    {
      type: "image",
      imageType: "thumbnail",
      value: team.klubName,
      description: `${team.lag} - ${team.kon} - ${team.sport}`,
      thumbnail: {
        src: team.klubBadge,
        size: "md",
        type: "teamBadge",
      },
    },
    {
      type: "text",
      value: team.roll,
    },
    {
      type: "text",
      value: team.sasong,
    },
    {
      type: "text",
      value: team.kalla,
    },
    {
      type: "text",
      value: "",
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
    header: "Klub",
    span: {
      xs: 16,
      sm: 16,
      md: 7,
      lg: 7,
    },
    align: "left" as const,
  },
  {
    header: "Roll",
    span: {
      xs: 5,
      sm: 10,
      md: 3,
      lg: 3,
    },
    align: "left" as const,
  },
  {
    header: "Säsong",
    span: {
      xs: 5,
      sm: 6,
      md: 3,
      lg: 3,
    },
    align: "left" as const,
  },
  {
    header: "Källa",
    span: {
      xs: 5,
      sm: 10,
      md: 2,
      lg: 2,
    },
    align: "left" as const,
  },
  {
    header: "",
    span: {
      xs: 1,
      sm: 6,
      md: 1,
      lg: 1,
    },
    align: "right" as const,
  },
];

const Lagroller = () => {
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
            title="Inlägg & Kommentarer"
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
                    title={cell.value}
                    description={cell.description}
                    imageType={cell.imageType}
                    thumbnail={cell.thumbnail}
                    badge={cell.badge}
                    iconButton={cell.iconButton}
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

export default Lagroller;
