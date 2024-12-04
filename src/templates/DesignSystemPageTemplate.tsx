import React from "react";
import { 
  SectionCard, 
  PageTitle 
} from "../components/atoms";
import { 
  MainContentHead 
} from "../components/molecules";
import { DesignSystemContentContainerSlots } from "../components/atoms/ContentContainerSlots/DesignSystemContentContainerSlots";
import { useDrawerControl } from "../components/templates";

const DesignSystemPageTemplate = () => {
  const { toggleDrawer } = useDrawerControl();

  return (
    <DesignSystemContentContainerSlots
      header={
        <>
          <MainContentHead
            breadcrumbs={[
              { label: "Home", href: "/" },
              { label: "Design System", href: "/design-system" },
              { label: "Component Name", href: "/design-system/component-name" },
            ]}
            onMenuClick={toggleDrawer}
            actions={[
              {
                label: "View Source",
                onClick: () =>
                  window.open(
                    "https://github.com/yourusername/SwAdmin/tree/main/src/components/path/to/component",
                    "_blank"
                  ),
                leadingIcon: "code",
              },
            ]}
          />
          <PageTitle
            title="Component Name"
            description="Brief description of the component and its purpose."
          />
        </>
      }
      content={
        <div className="space-y-8">
          {/* Basic Component Example */}
          <SectionCard title="Basic Example">
            <div className="space-y-4">
              <p className="text-content-secondary">
                Add your first component example here.
              </p>
            </div>
          </SectionCard>

          {/* Variant Examples */}
          <SectionCard title="Variants">
            <div className="space-y-4">
              <div>
                <h3 className="text-title-s text-content-secondary mb-2">
                  Variant 1
                </h3>
                <p className="text-content-secondary">
                  Description of the first variant.
                </p>
              </div>
              <div>
                <h3 className="text-title-s text-content-secondary mb-2">
                  Variant 2
                </h3>
                <p className="text-content-secondary">
                  Description of the second variant.
                </p>
              </div>
            </div>
          </SectionCard>

          {/* Advanced Usage */}
          <SectionCard title="Advanced Usage">
            <div className="space-y-4">
              <p className="text-content-secondary">
                Demonstrate more complex use cases or configurations of the component.
              </p>
            </div>
          </SectionCard>
        </div>
      }
    />
  );
};

export default DesignSystemPageTemplate;
