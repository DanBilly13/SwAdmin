import React from "react";
import TableCell from "../../components/atoms/TableCell/TableCell";
import { DesignSystemContentContainerSlots } from "../../components/atoms/ContentContainerSlots/DesignSystemContentContainerSlots";
import { MainContentHead } from "../../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from "../../components/templates";
import { PageTitle } from "../../components/atoms/PageTitle/PageTitle";
import { SectionCard } from "../../components/atoms/SectionCard/SectionCard";
import { getAssetPath } from "../../utils/paths";
import { GridTableRow } from "../../components/molecules/GridTableRow/GridTableRow";
import { Card } from "../../components/atoms/Card/Card";
import { classNames } from "../../utils/classNames";
import { getColumnSpanClasses } from "../../utils/tableUtils";
import { CodeBlock } from "../../components/atoms/CodeBlock/CodeBlock";

const Tables = () => {
  const { toggleDrawer } = useDrawerControl();

  // Define column spans for examples
  const fullWidthSpan = {
    xs: 16,
    sm: 16,
    md: 16,
    lg: 16,
  };

  const avatarCellCode = `<TableCell
  title="Daniel Billingham"
  description="daniel.billingham@example.com"
  imageType="avatar"
  avatar={{
    src: getAssetPath("avatars/TheRock.jpg"),
    size: "sm"
  }}
  badge={{
    variant: "success",
    icon: "check"
  }}
  className="flex items-center gap-4"
/>`;

  const teamBadgeCellCode = `<TableCell
  title="SVFF"
  description="Team"
  imageType="thumbnail"
  thumbnail={{
    src: getAssetPath("/images/team-badges/svff.jpg"),
    size: "sm",
    type: "teamBadge"
  }}
  className="flex items-center gap-4"
/>`;

  const thumbnailCellCode = `<TableCell
  title="Match Highlights"
  description="Final Game 2023"
  imageType="thumbnail"
  thumbnail={{
    src: getAssetPath("/images/thumbnails/default.jpg"),
    size: "sm",
    type: "image",
    isVideo: true
  }}
  className="flex items-center gap-4"
/>`;

  const textCellCode = `<TableCell
  title="Regular Text Cell"
  description="With optional description"
  className="flex items-center gap-4"
/>`;

  const textWithBadgeCode = `<TableCell
  title="Status Cell"
  description="With status badge"
  badge={{ 
    variant: "success", 
    icon: "check" 
  }}
  className="flex items-center gap-4"
/>`;

  const textWithChipCode = `<TableCell
  title="Category Cell"
  description="With category chip"
  chip={{ 
    children: "Active", 
    variant: "success" 
  }}
  className="flex items-center gap-4"
/>`;

  return (
    <DesignSystemContentContainerSlots
      header={
        <>
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
          />
          <PageTitle
            title="Tables"
            description="A collection of table cell variants for displaying different types of content."
          />
        </>
      }
      content={
        <div className="space-y-8">
          {/* Avatar Cell Example */}
          <SectionCard title="Avatar Cell">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card variant="table">
                <GridTableRow>
                  <TableCell
                    title="Daniel Billingham"
                    description="daniel.billingham@example.com"
                    imageType="avatar"
                    avatar={{
                      src: getAssetPath("avatars/TheRock.jpg"),
                      size: "sm",
                    }}
                    badge={{
                      variant: "success",
                      icon: "check",
                    }}
                    className={classNames(
                      getColumnSpanClasses(fullWidthSpan),
                      "flex items-center gap-4"
                    )}
                    isFirst
                    isLast
                  />
                </GridTableRow>
              </Card>

              {/* Code Block for Avatar Cell */}
              <CodeBlock language="typescript" code={avatarCellCode} />
            </div>
          </SectionCard>

          {/* Team Badge Cell Example */}
          <SectionCard title="Team Badge Cell">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card variant="table">
                <GridTableRow>
                  <TableCell
                    title="SVFF"
                    description="Team"
                    imageType="thumbnail"
                    thumbnail={{
                      src: getAssetPath("/images/team-badges/svff.jpg"),
                      size: "sm",
                      type: "teamBadge",
                    }}
                    className={classNames(
                      getColumnSpanClasses(fullWidthSpan),
                      "flex items-center gap-4"
                    )}
                    isFirst
                    isLast
                  />
                </GridTableRow>
              </Card>

              {/* Code Block for Team Badge Cell */}
              <CodeBlock language="typescript" code={teamBadgeCellCode} />
            </div>
          </SectionCard>

          {/* Thumbnail Cell Example */}
          <SectionCard title="Thumbnail Cell">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card variant="table">
                <GridTableRow>
                  <TableCell
                    title="Match Highlights"
                    description="Final Game 2023"
                    imageType="thumbnail"
                    thumbnail={{
                      src: getAssetPath("/images/thumbnails/default.jpg"),
                      size: "sm",
                      type: "image",
                      isVideo: true,
                    }}
                    className={classNames(
                      getColumnSpanClasses(fullWidthSpan),
                      "flex items-center gap-4"
                    )}
                    isFirst
                    isLast
                  />
                </GridTableRow>
              </Card>

              {/* Code Block for Thumbnail Cell */}
              <CodeBlock language="typescript" code={thumbnailCellCode} />
            </div>
          </SectionCard>

          {/* Text Cell Example */}
          <SectionCard title="Text Cell">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card variant="table">
                <GridTableRow>
                  <TableCell
                    title="Regular Text Cell"
                    description="With optional description"
                    className={classNames(
                      getColumnSpanClasses(fullWidthSpan),
                      "flex items-center gap-4"
                    )}
                    isFirst
                    isLast
                  />
                </GridTableRow>
              </Card>

              {/* Code Block for Text Cell */}
              <CodeBlock language="typescript" code={textCellCode} />
            </div>
          </SectionCard>

          {/* Text with Badge Example */}
          <SectionCard title="Text with Badge">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card variant="table">
                <GridTableRow>
                  <TableCell
                    title="Status Cell"
                    description="With status badge"
                    badge={{ variant: "success", icon: "check" }}
                    className={classNames(
                      getColumnSpanClasses(fullWidthSpan),
                      "flex items-center gap-4"
                    )}
                    isFirst
                    isLast
                  />
                </GridTableRow>
              </Card>

              {/* Code Block for Text with Badge */}
              <CodeBlock language="typescript" code={textWithBadgeCode} />
            </div>
          </SectionCard>

          {/* Text with Chip Example */}
          <SectionCard title="Text with Chip">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card variant="table">
                <GridTableRow>
                  <TableCell
                    title="Category Cell"
                    description="With category chip"
                    chip={{ children: "Active", variant: "success" }}
                    className={classNames(
                      getColumnSpanClasses(fullWidthSpan),
                      "flex items-center gap-4"
                    )}
                    isFirst
                    isLast
                  />
                </GridTableRow>
              </Card>

              {/* Code Block for Text with Chip */}
              <CodeBlock language="typescript" code={textWithChipCode} />
            </div>
          </SectionCard>

          {/* Chip Only Cell Example */}
          <SectionCard title="Chip Only Cell">
            <Card variant="table">
              <GridTableRow>
                <TableCell
                  chip={{
                    children: "Active",
                    variant: "success",
                  }}
                  className={classNames(getColumnSpanClasses(fullWidthSpan))}
                />
              </GridTableRow>
            </Card>
          </SectionCard>

          {/* Icon Button Cell Example */}
          <SectionCard title="Icon Button Cell">
            <Card variant="table">
              <GridTableRow>
                <TableCell
                  iconButton={{
                    icon: "more_vert",
                    menuOptions: [
                      { value: "edit", label: "Edit" },
                      { value: "delete", label: "Delete" },
                      { value: "share", label: "Share" },
                    ],
                    menuPosition: "right",
                    menuType: "action",
                  }}
                  className={classNames(
                    getColumnSpanClasses(fullWidthSpan),
                    "justify-end"
                  )}
                />
              </GridTableRow>
            </Card>
          </SectionCard>

          {/* Dropdown Cell Example */}
          <SectionCard title="Dropdown Cell">
            <Card variant="table">
              <GridTableRow>
                <TableCell
                  dropdown={{
                    options: [
                      { value: "edit", label: "Edit" },
                      { value: "delete", label: "Delete" },
                      { value: "archive", label: "Archive" },
                    ],
                    value: "",
                    onChange: (value: string) =>
                      console.log("Selected:", value),
                    placeholder: "Select action",
                    size: "small",
                    menuType: "action",
                  }}
                  className={classNames(getColumnSpanClasses(fullWidthSpan))}
                />
              </GridTableRow>
            </Card>
          </SectionCard>
        </div>
      }
    />
  );
};

export default Tables;
