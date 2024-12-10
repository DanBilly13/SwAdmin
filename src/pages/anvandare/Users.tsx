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
import { FilterAndSearch } from "../../components/molecules";

interface TableCellData {
  type: "text" | "image";
  imageType?: "avatar" | "thumbnail";
  title?: string;
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

const tableData: TableRowData[] = users.map((user) => ({
  id: user.id,
  content: [
    {
      type: "text",
      imageType: "avatar",
      title: user.name,
      description: user.email,
      avatar: user.avatar
        ? {
            src: user.avatar,
            size: "sm",
          }
        : undefined,
      badge:
        user.account === "Active"
          ? { variant: "success", icon: "check" }
          : user.account === "Suspended"
          ? { variant: "error", icon: "priority_high" }
          : undefined,
    },
    {
      type: "text",
      description: user.mobile,
    },
    {
      type: "text",
      description: user.personnr,
    },
    {
      type: "text",
      description: user.source,
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
    header: "Mobile",
    span: {
      xs: 7,
      sm: 4,
      md: 4,
      lg: 4,
    },
    align: "left" as const,
  },
  {
    header: "Personnr",
    span: {
      xs: 7,
      sm: 5,
      md: 3,
      lg: 3,
    },
    align: "left" as const,
  },
  {
    header: "Source",
    span: {
      xs: 2,
      sm: 6,
      md: 2,
      lg: 2,
    },
    align: "right" as const,
    className: "!pr-0",
  },
];

const Users = () => {
  const { toggleDrawer } = useDrawerControl();
  const [searchValue, setSearchValue] = React.useState("");
  const [accountFilter, setAccountFilter] = React.useState("all");
  const [sourceFilter, setSourceFilter] = React.useState("all");

  // Filter the table data based on search and filters
  const filteredData = tableData.filter((row) => {
    const user = users.find((u) => u.id === row.id);
    if (!user) return false;

    // Search filter
    const searchLower = searchValue.toLowerCase();
    const matchesSearch =
      searchValue === "" ||
      user.name.toLowerCase().includes(searchLower) ||
      user.email.toLowerCase().includes(searchLower) ||
      user.mobile.toLowerCase().includes(searchLower) ||
      user.personnr.toLowerCase().includes(searchLower);

    // Account status filter
    const matchesAccount =
      accountFilter === "all" || user.account.toLowerCase() === accountFilter;

    // Source filter
    const matchesSource =
      sourceFilter === "all" || user.source.toLowerCase() === sourceFilter;

    return matchesSearch && matchesAccount && matchesSource;
  });

  return (
    <ContentContainer>
      <MainContentHead
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Användare", href: "/anvandare" },
          { label: "Användare", href: "/anvandare/users" },
        ]}
        onMenuClick={toggleDrawer}
      />
      <PageTitle
        title="Användare"
        description="Hantera och övervaka alla användare i systemet"
      />

      <div className="space-y-8">
        <FilterAndSearch
          filters={[
            {
              label: "Status",
              value: accountFilter,
              onChange: setAccountFilter,
              options: [
                { label: "All", value: "all" },
                { label: "Active", value: "active" },
                { label: "Suspended", value: "suspended" },
              ],
            },
            {
              label: "Source",
              value: sourceFilter,
              onChange: setSourceFilter,
              options: [
                { label: "All", value: "all" },
                { label: "App", value: "app" },
                { label: "Fogis", value: "fogis" },
              ],
            },
          ]}
          searchValue={searchValue}
          onSearchChange={setSearchValue}
        />
        <Card variant="table">
          <TableHead>
            <GridTableRow>
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
          {filteredData.map((row, index) => (
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

export default Users;
