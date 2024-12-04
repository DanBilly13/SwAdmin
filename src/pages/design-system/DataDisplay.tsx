import React from "react";
import { Chip, SectionCard, PageTitle, Badge } from "../../components/atoms";
import { DesignSystemContentContainerSlots } from "../../components/atoms/ContentContainerSlots/DesignSystemContentContainerSlots";
import { MainContentHead } from "../../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from "../../components/templates";

const DataDisplay = () => {
  const { toggleDrawer } = useDrawerControl();

  return (
    <DesignSystemContentContainerSlots
      header={
        <>
          <MainContentHead
            breadcrumbs={[
              { label: "Home", href: "/" },
              { label: "Design System", href: "/design-system" },
              { label: "Data Display", href: "/design-system/data-display" },
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
          />
          <PageTitle
            title="Data Display"
            description="Components for displaying and organizing information effectively."
          />
        </>
      }
      content={
        <div className="space-y-8">
          <SectionCard title="Chips">
            {/* Variants */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Variants
              </h3>
              <div className="flex flex-wrap gap-4">
                <Chip variant="success">Success</Chip>
                <Chip variant="error">Error</Chip>
                <Chip variant="warning">Warning</Chip>
                <Chip variant="info">Info</Chip>
                <Chip variant="neutral">Neutral</Chip>
              </div>
            </div>

            {/* With Icons */}
            <div className="mt-8">
              <h3 className="text-title-s text-content-secondary mb-4">
                With Icons
              </h3>
              <div className="flex flex-wrap gap-4">
                <Chip variant="success" leadingIcon="check">
                Success
              </Chip>
              <Chip variant="error" leadingIcon="error">
                Error
              </Chip>
              <Chip variant="warning" leadingIcon="warning">
                Warning
              </Chip>
              <Chip variant="info" leadingIcon="info">
                Info
              </Chip>
              <Chip variant="neutral" leadingIcon="circle">
                Neutral
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
                Success
              </Chip>
              <Chip variant="error" onClose={() => {}}>
                Error
              </Chip>
              <Chip variant="warning" onClose={() => {}}>
                Warning
              </Chip>
              <Chip variant="info" onClose={() => {}}>
                Info
              </Chip>
              <Chip variant="neutral" onClose={() => {}}>
                Neutral
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
          {/* Empty Badges */}
          <div>
            <h3 className="text-title-s text-content-secondary mb-4">
              Empty Badges
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Badge variant="success" />
              <Badge variant="error" />
              <Badge variant="warning" />
              <Badge variant="info" />
              <Badge variant="neutral" />
            </div>
          </div>

          {/* With Icons */}
          <div className="mt-8">
            <h3 className="text-title-s text-content-secondary mb-4">
              With Icons
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Badge variant="success" icon={true} />
              <Badge variant="error" icon={true} />
              <Badge variant="warning" icon={true} />
              <Badge variant="info" icon={true} />
              <Badge variant="neutral" icon={true} />
            </div>
          </div>
        </SectionCard>
      </div>
    }
  />
  );
};

export default DataDisplay;
