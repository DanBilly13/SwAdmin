import React from "react";
import { SectionCard, PageTitle } from "../components/atoms";
import { ContentContainer } from "../components/atoms/ContentContainer/ContentContainer";
import { MainContentHead } from "../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from "../components/templates";

const Containers = () => {
  const { toggleDrawer } = useDrawerControl();

  return (
    <ContentContainer>
      <MainContentHead
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Design System", href: "/components" },
          { label: "Containers", href: "/containers" },
        ]}
        onMenuClick={toggleDrawer}
        actions={[
          {
            label: "View Source",
            onClick: () =>
              window.open(
                "https://github.com/yourusername/SwAdmin/tree/main/src/components/atoms/ContentContainer",
                "_blank"
              ),
            leadingIcon: "code",
          },
        ]}
      >
        <PageTitle
          title="Containers"
          description="Layout containers for organizing and structuring content."
        />
      </MainContentHead>

      <div className="space-y-8">
        <SectionCard title="Content Container">
          {/* Basic */}
          <div>
            <h3 className="text-title-s text-content-secondary mb-4">
              Basic Usage
            </h3>
            <div className="p-4 bg-surface rounded-lg">
              <ContentContainer className="bg-bg rounded-lg p-4">
                <p className="text-content">
                  The Content Container provides consistent padding and max-width constraints
                  for your content. It's commonly used as the main wrapper for page content.
                </p>
              </ContentContainer>
            </div>
          </div>

          {/* With Custom Width */}
          <div className="mt-8">
            <h3 className="text-title-s text-content-secondary mb-4">
              Custom Max Width
            </h3>
            <div className="p-4 bg-surface rounded-lg">
              <ContentContainer className="bg-bg rounded-lg p-4 max-w-2xl">
                <p className="text-content">
                  You can customize the max-width of the container using Tailwind classes.
                  This container has a max-width of 2xl (42rem).
                </p>
              </ContentContainer>
            </div>
          </div>

          {/* With Custom Padding */}
          <div className="mt-8">
            <h3 className="text-title-s text-content-secondary mb-4">
              Custom Padding
            </h3>
            <div className="p-4 bg-surface rounded-lg">
              <ContentContainer className="bg-bg rounded-lg p-8">
                <p className="text-content">
                  The padding can be customized using Tailwind classes. This container
                  has larger padding (p-8) for more spacious content.
                </p>
              </ContentContainer>
            </div>
          </div>
        </SectionCard>
      </div>
    </ContentContainer>
  );
};

export default Containers;
