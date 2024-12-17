import React from "react";
import { ContentContainerSlots } from "../../components/atoms/ContentContainerSlots/ContentContainerSlots";
import { MainContentHead } from "../../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from "../../components/templates";
import { PageTitle } from "../../components/atoms/PageTitle/PageTitle";
import { Card, TableCell, TableHead } from "../../components/atoms";
import { GridTableRow } from "../../components/molecules/GridTableRow/GridTableRow";
import { teams } from "../../data/teams";
import { divisions } from "../../data/divisions";
import { teamStaff } from "../../data/teamStaff";
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
import type { ColumnDefinition } from "../../components/atoms/TableCell/types";
import { DivisionsAccordion } from "../../components/molecules/DivisionsAccordion/DivisionsAccordion";
import { TeamStaffAccordion } from "../../components/molecules/TeamStaffAccordion/TeamStaffAccordion";

interface TableCellData {
  type: "text" | "image";
  imageType?: "avatar" | "thumbnail";
  title?: string;
  description?: string;
  description2?: string;
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
  accordion?: {
    label: string;
    labelTrailing?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onToggle?: (isOpen: boolean) => void;
  };
  className?: string;
  align?: "left" | "center" | "right" | {
    xs?: "left" | "center" | "right";
    sm?: "left" | "center" | "right";
    md?: "left" | "center" | "right";
    lg?: "left" | "center" | "right";
  };
}

interface TableRowData {
  id: string | number;
  content: TableCellData[];
}

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
      xs: 10,
      sm: 10,
      md: 3,
      lg: 3,
    },
    align: {
      xs: "left",
      md: "left",
    },
  },
  {
    header: "Säsong",
    span: {
      xs: 6,
      sm: 6,
      md: 3,
      lg: 3,
    },
    align: {
      xs: "right",
      md: "left",
    },
  },
  {
    header: "Källa",
    span: {
      xs: 14,
      sm: 14,
      md: 2,
      lg: 2,
    },
    align: "left" as const,
  },
  {
    header: "",
    span: {
      xs: 2,
      sm: 2,
      md: 1,
      lg: 1,
    },
    align: {
      xs: "right",
      md: "right",
    },
  },
  {
    header: "",
    span: {
      xs: 16,
      sm: 16,
      md: 8,
      lg: 8,
    },
    align: {
      xs: "left",
      md: "left",
    },
  },
  {
    header: "",
    span: {
      xs: 16,
      sm: 16,
      md: 8,
      lg: 8,
    },
    align: {
      xs: "left",
      md: "left",
    },
  },
];

const Lagroller: React.FC = () => {
  const { toggleDrawer } = useDrawerControl();
  const [searchValue, setSearchValue] = React.useState("");
  const [roleFilter, setRoleFilter] = React.useState("all");
  const [seasonFilter, setSeasonFilter] = React.useState("all");
  const [sourceFilter, setSourceFilter] = React.useState("all");
  const [expandedRows, setExpandedRows] = React.useState<
    Record<string | number, { one: boolean; two: boolean }>
  >({});

  const [isMdScreen, setIsMdScreen] = React.useState(window.matchMedia('(min-width: 768px)').matches);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handler = (e: MediaQueryListEvent) => setIsMdScreen(e.matches);
    
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleAccordionToggle =
    (rowId: string | number, accordionType: 'one' | 'two') =>
    (isOpen: boolean): void => {
      setExpandedRows((prev) => {
        const currentRow = prev[rowId] || { one: false, two: false };
        
        if (isMdScreen) {
          // On md and up, both accordions sync
          return {
            ...prev,
            [rowId]: {
              one: isOpen,
              two: isOpen,
            },
          };
        } else {
          // On smaller screens, they act independently
          return {
            ...prev,
            [rowId]: {
              ...currentRow,
              [accordionType]: isOpen,
            },
          };
        }
      });
      console.log("Accordion toggled for row:", rowId, "type:", accordionType, "isOpen:", isOpen, "isMdScreen:", isMdScreen);
    };

  const createTableData = (): TableRowData[] =>
    teams.map((team) => ({
      id: team.id,
      content: [
        {
          type: "image",
          imageType: "thumbnail",
          title: team.klubName,
          description2: `${team.lag} - ${team.kon} - ${team.sport}`,
          thumbnail: {
            src: team.klubBadge,
            size: "md",
            type: "teamBadge",
          },
        },
        {
          type: "text",
          description2: team.roll,
        },
        {
          type: "text",
          description2: team.sasong,
        },
        {
          type: "text",
          description2: team.kalla,
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
              console.log("Button clicked");
            },
          },
        },
        {
          type: "text",
          accordion: {
            label: "Divisions",
            labelTrailing: `${divisions.length} items`,
            children: <DivisionsAccordion />,
            isOpen: expandedRows[team.id]?.one,
            onToggle: handleAccordionToggle(team.id, 'one'),
          },
          className: "w-full self-start",
        },
        {
          type: "text",
          accordion: {
            label: "Team Staff",
            labelTrailing: `${teamStaff.length} items`,
            children: <TeamStaffAccordion />,
            isOpen: expandedRows[team.id]?.two,
            onToggle: handleAccordionToggle(team.id, 'two'),
          },
          className: "w-full self-start",
        },
      ],
    }));

  const tableData = createTableData();

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
            title="Lagroller"
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
                      cell.accordion ? "w-full" : "",
                      cell.className
                    )}
                    isLast={last}
                    title={cell.title}
                    description={cell.description}
                    description2={cell.description2}
                    imageType={cell.imageType}
                    thumbnail={cell.thumbnail}
                    badge={cell.badge}
                    iconButton={cell.iconButton}
                    accordion={cell.accordion}
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
