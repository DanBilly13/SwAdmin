import React from "react";
import { Card, TableCell, TableHead } from "../../components/atoms";
import { classNames } from "../../utils/classNames";
import { users } from "../../data/users";
import { ContentContainer } from "../../components/atoms/ContentContainer/ContentContainer";
import { MainContentHead } from "../../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from "../../components/templates";
import { PageTitle } from "../../components/atoms/PageTitle/PageTitle";

interface TableCellData {
  type: "text" | "image";
  imageType?: "avatar" | "thumbnail";
  value: string;
  avatar?: string;
  badge?: {
    variant: "success" | "error";
    icon: string;
  };
}

interface TableRowData {
  id: string | number;
  content: TableCellData[];
}

const tableData: TableRowData[] = users.map((user) => ({
  id: user.id,
  content: [
    {
      type: "text",
      imageType: "avatar",
      value: user.name,
      avatar: user.avatar,
      badge:
        user.account === "Active"
          ? { variant: "success", icon: "check" }
          : user.account === "Suspended"
          ? { variant: "error", icon: "priority_high" }
          : undefined,
    },
    {
      type: "text",
      value: user.email,
    },
    {
      type: "text",
      value: user.mobile,
    },
    {
      type: "text",
      value: user.personnr,
    },
    {
      type: "text",
      value: user.source,
    },
  ],
}));

const columns = [
  {
    header: "User",
    span: {
      sm: 8,
      md: 4,
      lg: 4,
    },
    align: "left" as const,
  },
  {
    header: "Email",
    span: {
      sm: 6,
      md: 4,
      lg: 5,
    },
    align: "left" as const,
  },
  {
    header: "Mobile",
    span: {
      sm: 4,
      md: 4,
      lg: 3,
    },
    align: "left" as const,
  },
  {
    header: "Personnr",
    span: {
      sm: 4,
      md: 2,
      lg: 3,
    },
    align: "left" as const,
  },
  {
    header: "Source",
    align: "right" as const,
    span: {
      sm: 8,
      md: 2,
      lg: 1,
    },
  },
];

const Tables = () => {
  const { toggleDrawer } = useDrawerControl();

  return (
    <ContentContainer>
      <MainContentHead
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Design System", href: "/components" },
          { label: "Tables", href: "/tables" },
        ]}
        onMenuClick={toggleDrawer}
        actions={[
          {
            label: "View Source",
            onClick: () =>
              window.open(
                "https://github.com/yourusername/SwAdmin/tree/main/src/components/molecules/Table",
                "_blank"
              ),
            leadingIcon: "code",
          },
        ]}
      >
        <PageTitle
          title="Tables"
          description="Interactive data tables with sorting, filtering, and pagination capabilities."
        />
      </MainContentHead>

      <div className="space-y-8">
        {/* User Table Example */}
        <Card variant="table">
          <TableHead>
            <div className="grid grid-cols-16">
              {columns.map((column, index) => (
                <TableCell
                  key={index}
                  variant="header"
                  align={column.align}
                  className={classNames({
                    "col-span-8": column.span.sm === 8,
                    "col-span-7": column.span.sm === 7,
                    "col-span-6": column.span.sm === 6,
                    "col-span-5": column.span.sm === 5,
                    "col-span-4": column.span.sm === 4,
                    "col-span-3": column.span.sm === 3,
                    "col-span-2": column.span.sm === 2,
                    "col-span-1": column.span.sm === 1,
                    "col-span-0": column.span.sm === 0,
                    "md:col-span-8": column.span.md === 8,
                    "md:col-span-7": column.span.md === 7,
                    "md:col-span-6": column.span.md === 6,
                    "md:col-span-5": column.span.md === 5,
                    "md:col-span-4": column.span.md === 4,
                    "md:col-span-3": column.span.md === 3,
                    "md:col-span-2": column.span.md === 2,
                    "md:col-span-1": column.span.md === 1,
                    "md:col-span-0": column.span.md === 0,
                    "lg:col-span-8": column.span.lg === 8,
                    "lg:col-span-7": column.span.lg === 7,
                    "lg:col-span-6": column.span.lg === 6,
                    "lg:col-span-5": column.span.lg === 5,
                    "lg:col-span-4": column.span.lg === 4,
                    "lg:col-span-3": column.span.lg === 3,
                    "lg:col-span-2": column.span.lg === 2,
                    "lg:col-span-1": column.span.lg === 1,
                    "lg:col-span-0": column.span.lg === 0,
                  })}
                  isFirst={index === 0}
                  isLast={index === columns.length - 1}
                >
                  {column.header}
                </TableCell>
              ))}
            </div>
          </TableHead>
          {/* Body Row */}
          {tableData.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-16 border-b border-border"
            >
              {row.content.map((cell, cellIndex) => (
                <TableCell
                  key={cellIndex}
                  className={classNames({
                    "col-span-8": columns[cellIndex].span.sm === 8,
                    "col-span-7": columns[cellIndex].span.sm === 7,
                    "col-span-6": columns[cellIndex].span.sm === 6,
                    "col-span-5": columns[cellIndex].span.sm === 5,
                    "col-span-4": columns[cellIndex].span.sm === 4,
                    "col-span-3": columns[cellIndex].span.sm === 3,
                    "col-span-2": columns[cellIndex].span.sm === 2,
                    "col-span-1": columns[cellIndex].span.sm === 1,
                    "col-span-0": columns[cellIndex].span.sm === 0,
                    "md:col-span-8": columns[cellIndex].span.md === 8,
                    "md:col-span-7": columns[cellIndex].span.md === 7,
                    "md:col-span-6": columns[cellIndex].span.md === 6,
                    "md:col-span-5": columns[cellIndex].span.md === 5,
                    "md:col-span-4": columns[cellIndex].span.md === 4,
                    "md:col-span-3": columns[cellIndex].span.md === 3,
                    "md:col-span-2": columns[cellIndex].span.md === 2,
                    "md:col-span-1": columns[cellIndex].span.md === 1,
                    "md:col-span-0": columns[cellIndex].span.md === 0,
                    "lg:col-span-5": columns[cellIndex].span.lg === 5,
                    "lg:col-span-4": columns[cellIndex].span.lg === 4,
                    "lg:col-span-3": columns[cellIndex].span.lg === 3,
                    "lg:col-span-2": columns[cellIndex].span.lg === 2,
                    "lg:col-span-1": columns[cellIndex].span.lg === 1,
                    "lg:col-span-0": columns[cellIndex].span.lg === 0,
                  })}
                  title={cell.value}
                  imageType={cell.imageType}
                  align={columns[cellIndex].align}
                  isFirst={cellIndex === 0}
                  isLast={cellIndex === row.content.length - 1}
                  avatar={
                    cell.imageType === "avatar"
                      ? { src: cell.avatar, alt: cell.value }
                      : undefined
                  }
                  badge={cell.badge}
                />
              ))}
            </div>
          ))}
        </Card>
      </div>
    </ContentContainer>
  );
};

export default Tables;
