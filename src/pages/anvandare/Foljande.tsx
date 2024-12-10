import React from "react";
import { ContentContainer } from "../../components/atoms/ContentContainer/ContentContainer";
import { MainContentHead } from "../../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from "../../components/templates";
import { PageTitle } from "../../components/atoms/PageTitle/PageTitle";
import { Card, TableCell, TableHead } from "../../components/atoms";
import { GridTableRow } from "../../components/molecules/GridTableRow/GridTableRow";
import { users } from "../../data/users";
import { classNames } from "../../utils/classNames";
import {
  getColumnSpanClasses,
  isFirstInRow,
  isLastInRow,
} from "../../utils/tableUtils";

interface TableCellData {
  type: "text" | "image";
  imageType?: "avatar" | "thumbnail";
  value: string;
  description?: string;
  avatar?: {
    src: string;
    size: "sm" | "md" | "lg";
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

// Filter users to only show those being followed (you might want to adjust this logic)
const tableData: TableRowData[] = users
  .filter((user) => user.account === "Active")
  .map((user) => ({
    id: user.id,
    content: [
      {
        type: "text",
        imageType: "avatar",
        value: user.name,
        description: user.email,
        avatar: user.avatar
          ? {
              src: user.avatar,
              size: "sm",
            }
          : undefined,
      },
      {
        type: "text",
        value: user.mobile,
      },
      {
        type: "text",
        value: "Following since: 2024-01-01", // You might want to add this data to your user model
      },
    ],
  }));

const columns = [
  {
    header: "User",
    span: {
      xs: 16,
      sm: 16,
      md: 7,
      lg: 7,
    },
    align: "left" as const,
  },
  {
    header: "Contact",
    span: {
      xs: 16,
      sm: 4,
      md: 4,
      lg: 4,
    },
    align: "left" as const,
  },
  {
    header: "Status",
    span: {
      xs: 16,
      sm: 5,
      md: 3,
      lg: 3,
    },
    align: "right" as const,
    className: "!pr-0",
  },
];

const Foljande = () => {
  const { toggleDrawer } = useDrawerControl();

  return (
    <ContentContainer>
      <MainContentHead
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Användare", href: "/anvandare" },
          { label: "Följande", href: "/anvandare/foljande" },
        ]}
        onMenuClick={toggleDrawer}
      />

      <PageTitle
        title="Följande"
        description="Hantera dina följande användare"
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
                    avatar={cell.avatar}
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

export default Foljande;
