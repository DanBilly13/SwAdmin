import React from "react";
import { Card, TableCell, TableHead } from "../components/atoms";
import { TableRow } from "../components/molecules/TableRow/TableRow";
import { IconButton } from "../components/atoms/IconButton/IconButton";
import { Button } from "../components/atoms/Button/Button";
import { Badge } from "../components/atoms/Badge/Badge";
import { Dropdown } from "../components/atoms/Dropdown/Dropdown";
import { Radio } from "../components/atoms/Radio/Radio";
import { users } from "../data/users";

interface TableCellData {
  type: "text" | "image";
  imageType?: "avatar" | "thumbnail";
  value: string;
  avatar?: string;
  badge?: {
    variant: 'success' | 'error';
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
      badge: user.account === 'Active' 
        ? { variant: 'success' }
        : user.account === 'Suspended'
        ? { variant: 'error' }
        : undefined
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
      sm: 2,
      md: 2,
      lg: 3,
    },
    align: "left" as const,
  },
  {
    header: "Email",
    span: {
      sm: 2,
      md: 2,
      lg: 3,
    },
    align: "left" as const,
  },
  {
    header: "Mobile",
    span: {
      sm: 0,
      md: 2,
      lg: 3,
    },
    align: "left" as const,
  },
  {
    header: "Personnr",
    span: {
      sm: 0,
      md: 0,
      lg: 2,
    },
    align: "left" as const,
  },
  {
    header: "Source",
    align: "right" as const,
    span: {
      sm: 1,
      md: 1,
      lg: 1,
    },
  },
];

const Tables = () => {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-headline-l text-content-primary mb-4">Tables</h1>
        <p className="text-content-secondary mb-8">
          Table components for displaying and organizing data in a structured
          format.
        </p>
      </div>

      <div className="space-y-8">
        {/* User Table Example */}

        <Card variant="table">
          <TableHead>
            <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
              {columns.map((column, index) => (
                <TableCell
                  key={index}
                  variant="header"
                  align={column.align}
                  className={`col-span-${column.span.sm} md:col-span-${column.span.md} lg:col-span-${column.span.lg}`}
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
              className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 border-b border-border"
            >
              {row.content.map((cell, index) => (
                <TableCell
                  key={index}
                  className={`col-span-${columns[index].span.sm} md:col-span-${columns[index].span.md} lg:col-span-${columns[index].span.lg}`}
                  title={cell.value}
                  imageType={cell.imageType}
                  align={columns[index].align}
                  isFirst={index === 0}
                  isLast={index === row.content.length - 1}
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

        <div className="p-6 rounded-lg border border-border bg-surface">
          <h2 className="text-headline-s mb-4">Table Atoms</h2>
          <div className="space-y-8">
            {/* Cell Alignment */}
            <div>
              <h3 className="text-body-l mb-4">Cell Alignment</h3>
              <Card variant="table">
                <TableHead>
                  <div className="grid grid-cols-3 gap-4 border border-border rounded-lg overflow-hidden">
                    <TableCell align="left">Left aligned text</TableCell>
                    <TableCell align="center">Center aligned text</TableCell>
                    <TableCell align="right">
                      Right aligned text (good for numbers)
                    </TableCell>
                  </div>
                </TableHead>
              </Card>
            </div>

            {/* Cell Padding */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Cell Padding
              </h3>
              <div className="grid grid-cols-3 gap-4 border border-border rounded-lg overflow-hidden bg-surface-secondary">
                <TableCell padding="normal">Normal padding</TableCell>
                <TableCell padding="compact">Compact padding</TableCell>
                <TableCell padding="none">No padding</TableCell>
              </div>
            </div>

            {/* Cell Variants */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Cell Variants
              </h3>
              <div className="border border-border rounded-lg overflow-hidden">
                <div className="grid grid-cols-3">
                  <TableCell variant="header">Header Cell</TableCell>
                  <TableCell variant="header">Header Cell</TableCell>
                  <TableCell variant="header">Header Cell</TableCell>
                </div>
                <div className="grid grid-cols-3">
                  <TableCell variant="body">Body Cell</TableCell>
                  <TableCell variant="body">Body Cell</TableCell>
                  <TableCell variant="body">Body Cell</TableCell>
                </div>
                <div className="grid grid-cols-3">
                  <TableCell variant="footer">Footer Cell</TableCell>
                  <TableCell variant="footer">Footer Cell</TableCell>
                  <TableCell variant="footer">Footer Cell</TableCell>
                </div>
              </div>
            </div>

            {/* Cell Sizes */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Cell Sizes
              </h3>
              <div className="grid grid-cols-2 gap-4 border border-border rounded-lg overflow-hidden">
                <TableCell size="medium">Medium size text</TableCell>
                <TableCell size="small">Small size text</TableCell>
              </div>
            </div>

            {/* Complex Content */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Complex Content
              </h3>
              <div className="grid grid-cols-2 gap-4 border border-border rounded-lg overflow-hidden">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10" />
                    <div>
                      <div className="font-medium">Custom Layout</div>
                      <div className="text-content-secondary">
                        With avatar and text
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell align="right">
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-content-secondary">$</span>
                    <span className="text-headline-s">1,234.56</span>
                  </div>
                </TableCell>
              </div>
            </div>

            {/* Complete Table Row Example */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                User Table
              </h3>
              <div className="border border-border rounded-lg overflow-hidden">
                {/* Header Row */}
                <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
                  {columns.map((column, index) => (
                    <TableCell
                      key={index}
                      variant="header"
                      align={column.align}
                      className={`col-span-${column.span.sm} md:col-span-${column.span.md} lg:col-span-${column.span.lg}`}
                      isFirst={index === 0}
                      isLast={index === columns.length - 1}
                    >
                      {column.header}
                    </TableCell>
                  ))}
                </div>
                {/* Body Row */}
                {tableData.map((row, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 border-b border-border"
                  >
                    {row.content.map((cell, index) => (
                      <TableCell
                        key={index}
                        className={`col-span-${columns[index].span.sm} md:col-span-${columns[index].span.md} lg:col-span-${columns[index].span.lg}`}
                        title={cell.value}
                        imageType={cell.imageType}
                        align={columns[index].align}
                        isFirst={index === 0}
                        isLast={index === row.content.length - 1}
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
              </div>
            </div>

            {/* With Icon Buttons */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                With Icon Buttons
              </h3>
              <div className="border border-border rounded-lg overflow-hidden">
                <div className="grid grid-cols-4">
                  <TableCell variant="header">Basic Icon Button</TableCell>
                  <TableCell variant="header">Icon Button with Text</TableCell>
                  <TableCell variant="header">Multiple Actions</TableCell>
                  <TableCell variant="header">Right Aligned Actions</TableCell>
                </div>
                <div className="grid grid-cols-4">
                  <TableCell>
                    <IconButton
                      icon="edit"
                      variant="ghost"
                      size="small"
                      onClick={() => {}}
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton
                      icon="trash"
                      variant="ghost"
                      size="small"
                      onClick={() => {}}
                    >
                      Delete
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <IconButton
                        icon="edit"
                        variant="ghost"
                        size="small"
                        onClick={() => {}}
                      />
                      <IconButton
                        icon="trash"
                        variant="ghost"
                        size="small"
                        onClick={() => {}}
                      />
                      <IconButton
                        icon="more"
                        variant="ghost"
                        size="small"
                        onClick={() => {}}
                      />
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    <div className="flex items-center justify-end gap-2">
                      <IconButton
                        icon="edit"
                        variant="ghost"
                        size="small"
                        onClick={() => {}}
                      />
                      <IconButton
                        icon="more"
                        variant="ghost"
                        size="small"
                        onClick={() => {}}
                      />
                    </div>
                  </TableCell>
                </div>
              </div>
            </div>

            {/* With Action Buttons */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                With Action Buttons
              </h3>
              <div className="border border-border rounded-lg overflow-hidden">
                <div className="grid grid-cols-4">
                  <TableCell variant="header">Basic Button</TableCell>
                  <TableCell variant="header">With Badge</TableCell>
                  <TableCell variant="header">With Dropdown</TableCell>
                  <TableCell variant="header">With Radio</TableCell>
                </div>
                <div className="grid grid-cols-4">
                  <TableCell>
                    <Button variant="tertiary" size="small">
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Badge variant="success">New</Badge>
                  </TableCell>
                  <TableCell>
                    <Dropdown
                      options={[
                        { label: "Edit", value: "edit" },
                        { label: "Delete", value: "delete" },
                      ]}
                      onChange={() => {}}
                    />
                  </TableCell>
                  <TableCell>
                    <Radio
                      name="tableExample"
                      value="option1"
                      onChange={() => {}}
                    />
                  </TableCell>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table Cell Card */}
        <div className="p-6 rounded-lg border border-border bg-surface">
          <h2 className="text-headline-s mb-4">Table Cell</h2>
          <div className="space-y-8">
            {/* Basic Usage */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Basic Usage
              </h3>
              <div className="space-y-4 max-w-md">
                <TableCell title="Title Only" />
                <TableCell
                  title="With Description"
                  description="This is a description that provides more context"
                />
              </div>
            </div>

            {/* With Chips */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                With Chips
              </h3>
              <div className="space-y-4 max-w-md">
                <TableCell
                  title="Status Example"
                  description="Using primary variant"
                  chip={{
                    children: "Active",
                    variant: "primary",
                  }}
                />
                <TableCell
                  title="Status Example"
                  description="Using success variant"
                  chip={{
                    children: "Completed",
                    variant: "success",
                  }}
                />
                <TableCell
                  title="Status Example"
                  description="Using warning variant"
                  chip={{
                    children: "Pending",
                    variant: "warning",
                  }}
                />
                <TableCell
                  title="Status Example"
                  description="Using error variant"
                  chip={{
                    children: "Failed",
                    variant: "error",
                  }}
                />
              </div>
            </div>

            {/* With Thumbnails */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                With Thumbnails
              </h3>
              <div className="space-y-4 max-w-md">
                <TableCell
                  title="Large Thumbnail"
                  description="Using size large"
                  thumbnail={{
                    type: "image",
                    size: "large",
                    src: "/images/avatars/TheRock.jpg",
                    alt: "The Rock",
                  }}
                />
                <TableCell
                  title="Medium Thumbnail"
                  description="Using size medium"
                  thumbnail={{
                    type: "image",
                    size: "medium",
                    src: "/images/avatars/TheRock.jpg",
                    alt: "The Rock",
                  }}
                />
                <TableCell
                  title="Small Thumbnail"
                  description="Using size small"
                  thumbnail={{
                    type: "image",
                    size: "small",
                    src: "/images/avatars/TheRock.jpg",
                    alt: "The Rock",
                  }}
                />
                <TableCell
                  title="Tiny Thumbnail"
                  description="Using size tiny"
                  thumbnail={{
                    type: "image",
                    size: "tiny",
                    src: "/images/avatars/TheRock.jpg",
                    alt: "The Rock",
                  }}
                />
              </div>
            </div>

            {/* Team Badge Examples */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                With Team Badges
              </h3>
              <div className="space-y-4 max-w-md">
                <TableCell
                  title="Large Team Badge"
                  description="Using size large"
                  thumbnail={{
                    type: "teamBadge",
                    size: "large",
                    src: "/images/team-badges/svff.jpg",
                    alt: "SVFF",
                  }}
                />
                <TableCell
                  title="Medium Team Badge"
                  description="Using size medium"
                  thumbnail={{
                    type: "teamBadge",
                    size: "medium",
                    src: "/images/team-badges/DIF.png",
                    alt: "DIF",
                  }}
                />
                <TableCell
                  title="Small Team Badge"
                  description="Using size small"
                  thumbnail={{
                    type: "teamBadge",
                    size: "small",
                    src: "/images/team-badges/IFK-Stockholm.png",
                    alt: "IFK Stockholm",
                  }}
                />
                <TableCell
                  title="Tiny Team Badge"
                  description="Using size tiny"
                  thumbnail={{
                    type: "teamBadge",
                    size: "tiny",
                    src: "/images/team-badges/svff.jpg",
                    alt: "SVFF",
                  }}
                />
              </div>
            </div>

            {/* In a Row */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                In a Row
              </h3>
              <div className="flex gap-6 items-start border border-border rounded-lg p-4">
                <TableCell
                  title="User Name"
                  description="John Doe"
                  thumbnail={{
                    type: "image",
                    size: "medium",
                    src: "/images/avatars/TheRock.jpg",
                    alt: "John Doe",
                  }}
                />
                <TableCell
                  title="Team"
                  description="SVFF"
                  thumbnail={{
                    type: "teamBadge",
                    size: "medium",
                    src: "/images/team-badges/svff.jpg",
                    alt: "SVFF",
                  }}
                />
                <TableCell title="Role" description="Administrator" />
              </div>
            </div>

            {/* Combined Examples */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Combined Examples
              </h3>
              <div className="flex gap-6 items-start border border-border rounded-lg p-4">
                <TableCell
                  title="User Name"
                  description="John Doe"
                  thumbnail={{
                    type: "image",
                    size: "medium",
                    src: "/images/avatars/TheRock.jpg",
                    alt: "John Doe",
                  }}
                  chip={{
                    children: "Active",
                    variant: "success",
                  }}
                />
                <TableCell
                  title="Team"
                  description="SVFF"
                  thumbnail={{
                    type: "teamBadge",
                    size: "medium",
                    src: "/images/team-badges/svff.jpg",
                    alt: "SVFF",
                  }}
                  chip={{
                    children: "Primary",
                    variant: "primary",
                  }}
                />
                <TableCell
                  title="Role"
                  description="Administrator"
                  chip={{
                    children: "Staff",
                    variant: "warning",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Table Row Card */}
        <div className="p-6 rounded-lg border border-border bg-surface">
          <h2 className="text-headline-s mb-4">Table Row</h2>
          <div className="space-y-8">
            {/* Example Usage */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Example Usage
              </h3>
              <div className="space-y-4">
                <TableRow
                  id={1}
                  thumbnail={{
                    src: "https://picsum.photos/200/300",
                    alt: "Sample video thumbnail",
                    isVideo: true,
                  }}
                  title="Introduction to React"
                  description="Learn the basics of React including components, props, and state management"
                  date={new Date()}
                  status={{
                    label: "Published",
                    variant: "success",
                  }}
                  onActionSelect={() => console.log("Action selected")}
                />
                <TableRow
                  id={2}
                  thumbnail={{
                    src: "https://picsum.photos/200/300",
                    alt: "Sample video thumbnail",
                    isVideo: true,
                  }}
                  title="Advanced TypeScript Patterns"
                  description="Deep dive into TypeScript's advanced features and design patterns"
                  date={new Date(Date.now() - 86400000)} // Yesterday
                  status={{
                    label: "Draft",
                    variant: "warning",
                  }}
                  onActionSelect={() => console.log("Action selected")}
                />
                <TableRow
                  id={3}
                  thumbnail={{
                    src: "https://picsum.photos/200/300",
                    alt: "Sample video thumbnail",
                    isVideo: true,
                  }}
                  title="CSS Grid Masterclass"
                  description="Master CSS Grid layout with practical examples and best practices"
                  date={new Date(Date.now() - 172800000)} // 2 days ago
                  status={{
                    label: "Archived",
                    variant: "info",
                  }}
                  onActionSelect={() => console.log("Action selected")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tables;
