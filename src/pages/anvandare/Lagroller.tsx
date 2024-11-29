import React from "react";
import { ContentContainer } from "../../components/atoms/ContentContainer/ContentContainer";
import { MainContentHead } from "../../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from "../../components/templates";
import { PageTitle } from "../../components/atoms/PageTitle/PageTitle";
import { Card, TableCell, TableHead } from "../../components/atoms";
import { GridTableRow } from "../../components/molecules/GridTableRow/GridTableRow";
import { teams } from "../../data/teams";
import { classNames } from "../../utils/classNames";
import {
  getColumnSpanClasses,
  isFirstInRow,
  isLastInRow,
} from "../../utils/tableUtils";
import { Thumbnail, ThumbnailType } from "../../components/atoms/Thumbnail/Thumbnail";

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
}

interface TableRowData {
  id: string | number;
  content: TableCellData[];
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
        size: "lg",
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
  ],
}));

const columns = [
  {
    header: "Klub",
    span: {
      xs: 16,
      sm: 16,
      md: 6,
      lg: 6,
    },
    align: "left" as const,
  },
  {
    header: "Roll",
    span: {
      xs: 16,
      sm: 4,
      md: 3,
      lg: 3,
    },
    align: "left" as const,
  },
  {
    header: "Säsong",
    span: {
      xs: 16,
      sm: 4,
      md: 4,
      lg: 4,
    },
    align: "left" as const,
  },
  {
    header: "Källa",
    span: {
      xs: 16,
      sm: 4,
      md: 3,
      lg: 3,
    },
    align: "right" as const,
    className: "!pr-0",
  },
];

const Lagroller = () => {
  const { toggleDrawer } = useDrawerControl();

  return (
    <ContentContainer>
      <MainContentHead
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Användare", href: "/anvandare" },
          { label: "Lagroller", href: "/anvandare/lagroller" },
        ]}
        onMenuClick={toggleDrawer}
      />

      <PageTitle
        title="Lagroller"
        description="Hantera användarroller och team"
      />

      <div className="space-y-8">
        <Card variant="table">
          <TableHead>
            <GridTableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={index}
                  align={column.align}
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
                    title={cell.value}
                    description={cell.description}
                    imageType={cell.imageType}
                    thumbnail={cell.thumbnail}
                    badge={cell.badge}
                  />
                );
              })}
            </GridTableRow>
          ))}
        </Card>
      </div>
    </ContentContainer>
  );
};

export default Lagroller;
