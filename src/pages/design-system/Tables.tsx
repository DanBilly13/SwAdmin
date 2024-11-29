import React from "react";
import TableCell from "../../components/atoms/TableCell/TableCell";
import { ContentContainer } from "../../components/atoms/ContentContainer/ContentContainer";
import { MainContentHead } from "../../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from "../../components/templates";
import { PageTitle } from "../../components/atoms/PageTitle/PageTitle";
import { SectionCard } from "../../components/atoms/SectionCard/SectionCard";
import { getAssetPath } from "../../utils/paths";
import { GridTableRow } from "../../components/molecules/GridTableRow/GridTableRow";
import { Card } from "../../components/atoms/Card/Card";
import { classNames } from "../../utils/classNames";
import { getColumnSpanClasses } from "../../utils/tableUtils";

const Tables = () => {
  const { toggleDrawer } = useDrawerControl();

  // Define column spans for examples
  const fullWidthSpan = {
    xs: 16,
    sm: 16,
    md: 16,
    lg: 16,
  };

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
          description="A collection of table cell variants for displaying different types of content."
        />
      </MainContentHead>

      <div className="space-y-8">
        {/* Avatar Cell Example */}
        <SectionCard title="Avatar Cell">
          <Card variant="table">
            <GridTableRow>
              <TableCell
                title="Daniel Billingham"
                description="daniel.billingham@example.com"
                imageType="avatar"
                avatar={{
                  src: getAssetPath("/images/avatars/TheRock.jpg"),
                  size: "sm",
                  badge: { variant: "success" },
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
        </SectionCard>

        {/* Team Badge Cell Example */}
        <SectionCard title="Team Badge Cell">
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
        </SectionCard>

        {/* Thumbnail Cell Example */}
        <SectionCard title="Thumbnail Cell">
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
        </SectionCard>

        {/* Text Cell Example */}
        <SectionCard title="Text Cell">
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
        </SectionCard>

        {/* Text with Badge Example */}
        <SectionCard title="Text with Badge">
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
        </SectionCard>

        {/* Text with Chip Example */}
        <SectionCard title="Text with Chip">
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
        </SectionCard>

        {/* Chip Only Cell Example */}
        <SectionCard title="Chip Only Cell">
          <Card variant="table">
            <GridTableRow>
              <TableCell
                chip={{
                  children: "Active",
                  variant: "success"
                }}
                className={classNames(
                  getColumnSpanClasses(fullWidthSpan)
                )}
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
                    { value: "share", label: "Share" }
                  ],
                  menuPosition: "right",
                  menuType: "action"
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
                    { value: "archive", label: "Archive" }
                  ],
                  value: "",
                  onChange: (value: string) => console.log('Selected:', value),
                  placeholder: "Select action",
                  size: "small",
                  menuType: "action"
                }}
                className={classNames(
                  getColumnSpanClasses(fullWidthSpan)
                )}
              />
            </GridTableRow>
          </Card>
        </SectionCard>
      </div>
    </ContentContainer>
  );
};

export default Tables;
