import React from "react";
import { Chip, SectionCard, PageTitle, Badge } from "../components/atoms";
import { ContentContainer } from "../components/atoms/ContentContainer/ContentContainer";
import { MainContentHead } from "../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from "../components/templates";

const DataDisplay = () => {
  const { toggleDrawer } = useDrawerControl();

  return (
    <ContentContainer>
      <MainContentHead
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Design System", href: "/components" },
          { label: "Data Display", href: "/data-display" },
        ]}
        onMenuClick={toggleDrawer}
        actions={[
          {
            label: "View Source",
            onClick: () =>
              window.open(
                "https://github.com/yourusername/SwAdmin/tree/main/src/components/atoms/Chip",
                "_blank"
              ),
            leadingIcon: "code",
          },
        ]}
      >
        <PageTitle
          title="Data Display"
          description="Components for displaying and organizing information effectively."
        />
      </MainContentHead>

      <div className="space-y-8">
        <SectionCard title="Chips">
          {/* Variants */}
          <div>
            <h3 className="text-title-s text-content-secondary mb-4">
              Variants
            </h3>
            <div className="flex flex-wrap gap-4">
              <Chip variant="success">Saved</Chip>
              <Chip variant="error">Failed</Chip>
              <Chip variant="warning">Expiring Soon</Chip>
              <Chip variant="info">Pending</Chip>
              <Chip variant="neutral">Normal</Chip>
            </div>
          </div>

          {/* With Icons */}
          <div className="mt-8">
            <h3 className="text-title-s text-content-secondary mb-4">
              With Icons
            </h3>
            <div className="flex flex-wrap gap-4">
              <Chip variant="success" leadingIcon="check">
                Online
              </Chip>
              <Chip variant="error" leadingIcon="error">
                Offline
              </Chip>
              <Chip variant="warning" leadingIcon="schedule">
                Expiring Soon
              </Chip>
              <Chip variant="info" leadingIcon="info">
                In Progress
              </Chip>
              <Chip variant="neutral" leadingIcon="sync">
                Processing
              </Chip>
            </div>
          </div>

          {/* With Close Button */}
          <div className="mt-8">
            <h3 className="text-title-s text-content-secondary mb-4">
              With Close Button
            </h3>
            <div className="flex flex-wrap gap-4">
              <Chip variant="success" onClose={() => {}}>
                Active
              </Chip>
              <Chip variant="error" onClose={() => {}}>
                Blocked
              </Chip>
              <Chip variant="warning" onClose={() => {}}>
                Review Needed
              </Chip>
              <Chip variant="info" onClose={() => {}}>
                Draft
              </Chip>
              <Chip variant="neutral" onClose={() => {}}>
                Default
              </Chip>
            </div>
          </div>

          {/* Disabled */}
          <div className="mt-8">
            <h3 className="text-title-s text-content-secondary mb-4">
              Disabled
            </h3>
            <div className="flex flex-wrap gap-4">
              <Chip variant="success" disabled>
                Disabled
              </Chip>
              <Chip variant="error" disabled>
                Disabled
              </Chip>
              <Chip variant="warning" disabled>
                Disabled
              </Chip>
              <Chip variant="info" disabled>
                Disabled
              </Chip>
              <Chip variant="neutral" disabled>
                Disabled
              </Chip>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Badges">
          {/* Variants */}
          <div>
            <h3 className="text-title-s text-content-secondary mb-4">
              Status Indicators
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Badge variant="success" />
              <Badge variant="error" />
              <Badge variant="warning" />
              <Badge variant="info" />
              <Badge variant="neutral" />
            </div>
          </div>
        </SectionCard>
      </div>
    </ContentContainer>
  );
};

export default DataDisplay;
